"use client";

import { useEffect } from "react";

export function useCounterAnimation() {
  useEffect(() => {
    const stats = document.querySelectorAll(".stat-number");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseInt(
              el.getAttribute("data-target") || "0",
              10
            );
            if (isNaN(target)) return;
            let current = 0;
            const inc = target / 50;
            const timer = setInterval(() => {
              current += inc;
              if (current >= target) {
                el.textContent = target.toString();
                clearInterval(timer);
              } else {
                el.textContent = Math.floor(current).toString();
              }
            }, 30);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    stats.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}