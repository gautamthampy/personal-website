'use client';

import { ChatRequestOptions } from 'ai';
import { motion } from 'framer-motion';
import { ArrowUp, Square } from 'lucide-react';
import React, { useEffect } from 'react';

interface ChatBottombarProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions
  ) => void;
  isLoading: boolean;
  stop: () => void;
  input: string;
  isToolInProgress: boolean;
}

export default function ChatBottombar({
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
  stop,
  isToolInProgress,
}: ChatBottombarProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing && !isToolInProgress && input.trim()) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full pb-4 md:pb-8"
    >
      <form onSubmit={handleSubmit} className="relative w-full md:px-4">
        <div className="mx-auto flex items-center rounded-full border border-[#262626] bg-[#141414] py-2 pr-2 pl-6 focus-within:border-[rgba(212,168,83,0.4)] transition-colors">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder={isToolInProgress ? 'Processing...' : 'Ask me anything...'}
            className="text-sm w-full border-none bg-transparent text-[#fafaf9] placeholder:text-[#78716c] focus:outline-none font-sans"
            disabled={isToolInProgress || isLoading}
          />
          <button
            type="submit"
            disabled={(!input.trim() && !isLoading) || isToolInProgress}
            className="flex items-center justify-center rounded-full bg-[#d4a853] p-2 text-[#0a0a0a] disabled:opacity-30 hover:bg-[#e8c06a] transition-colors"
            onClick={(e) => {
              if (isLoading) {
                e.preventDefault();
                stop();
              }
            }}
          >
            {isLoading ? <Square size={16} /> : <ArrowUp size={16} />}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
