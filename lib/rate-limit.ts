/**
 * Simple in-memory rate limiter for the chatbot API.
 * Tracks requests per IP address with rolling time windows.
 *
 * Limits (conservative, based on Groq llama-3.3-70b-versatile: 30 RPM, 1K RPD):
 * - 5 requests per minute per IP
 * - 20 requests per day per IP
 */

interface RateLimitEntry {
  timestamps: number[];
}

const minuteLimits = new Map<string, RateLimitEntry>();
const dailyLimits = new Map<string, RateLimitEntry>();

const MAX_REQUESTS_PER_MINUTE = 5;
const MAX_REQUESTS_PER_DAY = 20;
const MINUTE_MS = 60 * 1000;
const DAY_MS = 24 * 60 * 60 * 1000;

function cleanupOld(entries: RateLimitEntry, windowMs: number): number[] {
  const now = Date.now();
  return entries.timestamps.filter((ts) => now - ts < windowMs);
}

export interface RateLimitResult {
  allowed: boolean;
  reason?: 'rate_limit_minute' | 'rate_limit_daily';
  retryAfterSeconds?: number;
  remainingMinute: number;
  remainingDaily: number;
}

export function checkRateLimit(ip: string): RateLimitResult {
  // Get or create entries
  let minuteEntry = minuteLimits.get(ip);
  if (!minuteEntry) {
    minuteEntry = { timestamps: [] };
    minuteLimits.set(ip, minuteEntry);
  }

  let dailyEntry = dailyLimits.get(ip);
  if (!dailyEntry) {
    dailyEntry = { timestamps: [] };
    dailyLimits.set(ip, dailyEntry);
  }

  // Clean up expired timestamps
  minuteEntry.timestamps = cleanupOld(minuteEntry, MINUTE_MS);
  dailyEntry.timestamps = cleanupOld(dailyEntry, DAY_MS);

  // Check daily limit first (stricter)
  if (dailyEntry.timestamps.length >= MAX_REQUESTS_PER_DAY) {
    const oldest = dailyEntry.timestamps[0];
    const retryAfter = Math.ceil((oldest + DAY_MS - Date.now()) / 1000);
    return {
      allowed: false,
      reason: 'rate_limit_daily',
      retryAfterSeconds: retryAfter,
      remainingMinute: MAX_REQUESTS_PER_MINUTE - minuteEntry.timestamps.length,
      remainingDaily: 0,
    };
  }

  // Check per-minute limit
  if (minuteEntry.timestamps.length >= MAX_REQUESTS_PER_MINUTE) {
    const oldest = minuteEntry.timestamps[0];
    const retryAfter = Math.ceil((oldest + MINUTE_MS - Date.now()) / 1000);
    return {
      allowed: false,
      reason: 'rate_limit_minute',
      retryAfterSeconds: retryAfter,
      remainingMinute: 0,
      remainingDaily: MAX_REQUESTS_PER_DAY - dailyEntry.timestamps.length,
    };
  }

  // Record this request
  const now = Date.now();
  minuteEntry.timestamps.push(now);
  dailyEntry.timestamps.push(now);

  return {
    allowed: true,
    remainingMinute: MAX_REQUESTS_PER_MINUTE - minuteEntry.timestamps.length,
    remainingDaily: MAX_REQUESTS_PER_DAY - dailyEntry.timestamps.length,
  };
}