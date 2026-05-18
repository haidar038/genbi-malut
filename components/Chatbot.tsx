'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import { HugeiconsIcon } from '@hugeicons/react'
import { AiChat02Icon, Cancel01Icon, Sent02Icon, Sparkle, SparklesIcon } from '@hugeicons/core-free-icons'

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const GREETING_MESSAGE: Message = {
  id: 'greeting',
  role: 'assistant',
  content: 'Halo! 👋 Saya adalah Asisten Virtual GenBI Komisariat Maluku Utara. Ada yang bisa saya bantu terkait GenBI, Bank Indonesia, atau beasiswa pendidikan?',
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Show greeting when chat opens for the first time
  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setMessages([GREETING_MESSAGE]);
      setHasGreeted(true);
    }
  }, [isOpen, hasGreeted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: trimmed,
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    // Create a placeholder for the assistant response
    const assistantId = `assistant-${Date.now()}`;
    setMessages((prev) => [
      ...prev,
      { id: assistantId, role: 'assistant', content: '' },
    ]);

    try {
      // Only send user/assistant messages (exclude greeting) to the API
      const apiMessages = updatedMessages
        .filter((m) => m.id !== 'greeting')
        .map((m) => ({ role: m.role, content: m.content }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No reader available');

      const decoder = new TextDecoder();
      let fullContent = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        fullContent += chunk;

        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId ? { ...m, content: fullContent } : m
          )
        );
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId
            ? {
              ...m,
              content:
                'Maaf, terjadi kesalahan. Silakan coba lagi dalam beberapa saat.',
            }
            : m
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-xl w-80 sm:w-96 flex flex-col h-125 border border-gray-200 overflow-hidden text-gray-800 absolute bottom-20 right-0 mb-4 transition-all ease-in-out duration-300">
          <div className="bg-[#06619F] text-white p-4 flex justify-between items-center">
            <div>
              <div className="flex items-center gap-1 mb-1">
                <h3 className="font-semibold text-lg font-display">
                  GenBI Assistant
                </h3>
                <HugeiconsIcon icon={SparklesIcon} size={24} color='currentColor' strokeWidth={2} className='text-blue-300' />
              </div>
              <p className="text-xs opacity-80">Online & Ready to Help</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-full transition-colors"
              aria-label="Close Chat"
            >
              <HugeiconsIcon icon={Cancel01Icon} size={20} color='currentColor' strokeWidth={2} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
              >
                <div
                  className={`max-w-[85%] min-w-0 rounded-2xl px-4 py-2 text-sm ${m.role === 'user'
                    ? 'bg-[#06619F] text-white rounded-tr-sm'
                    : 'bg-white border border-gray-200 text-gray-800 rounded-tl-sm'
                    }`}
                >
                  {m.content ? (
                    m.role === 'user' ? (
                      <p className="whitespace-pre-wrap wrap-break-words">{m.content}</p>
                    ) : (
                      <div className="prose prose-sm max-w-none wrap-break-words
                        [&_p]:mb-2.5 [&_p:last-child]:mb-0 [&_p]:leading-relaxed
                        [&_ul]:mb-2.5 [&_ul]:mt-1 [&_ul]:ml-4 [&_ul]:list-disc [&_ul]:space-y-1
                        [&_ol]:mb-2.5 [&_ol]:mt-1 [&_ol]:ml-4 [&_ol]:list-decimal [&_ol]:space-y-1
                        [&_li]:mb-0.5 [&_li]:leading-relaxed
                        [&_strong]:font-bold [&_strong]:text-gray-900
                        [&_em]:italic [&_em]:text-gray-600
                        [&_a]:text-[#06619F] [&_a]:underline [&_a]:font-medium [&_a]:hover:text-[#054E81]
                        [&_h1]:text-base [&_h1]:font-bold [&_h1]:mb-2 [&_h1]:mt-3 [&_h1]:text-gray-900
                        [&_h2]:text-sm [&_h2]:font-bold [&_h2]:mb-2 [&_h2]:mt-2.5 [&_h2]:text-gray-900
                        [&_h3]:text-sm [&_h3]:font-bold [&_h3]:mb-1.5 [&_h3]:mt-2 [&_h3]:text-gray-900
                        [&_code]:bg-[#06619F]/10 [&_code]:text-[#06619F] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-xs [&_code]:font-mono [&_code]:font-semibold
                        [&_pre]:bg-gray-900 [&_pre]:text-gray-100 [&_pre]:p-3 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:text-xs
                        [&_pre_code]:bg-transparent [&_pre_code]:text-gray-100 [&_pre_code]:p-0 [&_pre_code]:text-xs [&_pre_code]:font-normal
                        [&_blockquote]:border-l-3 [&_blockquote]:border-[#06619F] [&_blockquote]:bg-[#06619F]/5 [&_blockquote]:pl-3 [&_blockquote]:pr-2 [&_blockquote]:py-1.5 [&_blockquote]:rounded-r-lg [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_blockquote]:my-2
                        [&_hr]:border-gray-200 [&_hr]:my-3
                        [&_table]:text-xs [&_table]:w-full [&_th]:bg-gray-100 [&_th]:p-1.5 [&_th]:font-semibold [&_th]:text-left [&_td]:p-1.5 [&_td]:border-t [&_td]:border-gray-100
                      ">
                        <ReactMarkdown
                          components={{
                            a: ({ href, children, ...props }) => (
                              <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5" {...props}>
                                {children}
                                <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            ),
                          }}
                        >{m.content}</ReactMarkdown>
                      </div>
                    )
                  ) : (
                    <span className="flex gap-1 items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </span>
                  )}
                </div>
              </div>
            ))}
            {isLoading &&
              !messages[messages.length - 1]?.content &&
              messages[messages.length - 1]?.role !== 'assistant' && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 text-gray-500 rounded-2xl rounded-tl-sm px-4 py-2 text-sm flex gap-1 items-center shadow-sm">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-3 bg-white border-t border-gray-100 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
              placeholder="Ketik pertanyaan Anda..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#06619F]/20 focus:border-[#06619F] transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-[#06619F] text-white p-2 rounded-full hover:bg-[#054E81] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-12"
            >
              <HugeiconsIcon icon={Sent02Icon} size={20} color='currentColor' strokeWidth={2} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#06619F] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        aria-label="Open Chatbot"
      >
        {isOpen ? (
          <HugeiconsIcon icon={Cancel01Icon} size={24} color='currentColor' strokeWidth={2} />
        ) : (
          <HugeiconsIcon icon={AiChat02Icon} size={24} color='currentColor' strokeWidth={2} />
        )}
      </button>
    </div>
  );
}