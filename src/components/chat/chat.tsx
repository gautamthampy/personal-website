'use client';

import { useChat } from '@ai-sdk/react';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { toast } from 'sonner';
import Link from 'next/link';
import { Download, Github, Linkedin, ArrowLeft } from 'lucide-react';
import ChatBottombar from './chat-bottombar';
import ChatLanding from './chat-landing';
import ChatMessageContent from './chat-message-content';
import { SimplifiedChatView } from './simple-chat-view';
import QuickQuestions from './quick-questions';

// Loading indicator for AI response
const LoadingDots = () => (
  <div className="flex items-center gap-1 px-4 py-3 bg-[#141414] border border-[#262626] rounded-2xl w-fit">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-[#d4a853]"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
      />
    ))}
  </div>
);

interface AvatarProps {
  hasActiveTool: boolean;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  isTalking: boolean;
}

const Avatar = dynamic<AvatarProps>(
  () =>
    Promise.resolve(({ hasActiveTool, videoRef }: AvatarProps) => {
      const isIOS = () => {
        const ua = window.navigator.userAgent;
        const platform = window.navigator.platform;
        const maxTP = window.navigator.maxTouchPoints || 0;
        return (
          /iPad|iPhone|iPod/.test(ua) ||
          /iPad|iPhone|iPod/.test(platform) ||
          (platform === 'MacIntel' && maxTP > 1) ||
          (/Safari/.test(ua) && !/Chrome/.test(ua))
        );
      };

      return (
        <div
          className={`flex items-center justify-center rounded-full transition-all duration-300 ${
            hasActiveTool ? 'h-16 w-16' : 'h-24 w-24'
          }`}
        >
          <Link href="/" className="relative cursor-pointer block">
            {isIOS() ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="/landing-memojis.png"
                alt="Gautam avatar"
                className="h-full w-full scale-[1.8] object-contain"
              />
            ) : (
              <video
                ref={videoRef}
                className="h-full w-full scale-[1.8] object-contain"
                muted
                playsInline
                loop
              >
                <source src="/final_memojis.webm" type="video/webm" />
                <source src="/final_memojis_ios.mp4" type="video/mp4" />
              </video>
            )}
          </Link>
        </div>
      );
    }),
  { ssr: false }
);

const MOTION_CONFIG = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 16 },
  transition: { duration: 0.3 },
};

const Chat = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get('query');
  const [autoSubmitted, setAutoSubmitted] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [isTalking, setIsTalking] = useState(false);

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    stop,
    setMessages,
    setInput,
    reload,
    addToolResult,
    append,
  } = useChat({
    onResponse: () => {
      setLoadingSubmit(false);
      setIsTalking(true);
      videoRef.current?.play().catch(() => {});
    },
    onFinish: () => {
      setLoadingSubmit(false);
      setIsTalking(false);
      videoRef.current?.pause();
    },
    onError: (error) => {
      setLoadingSubmit(false);
      setIsTalking(false);
      videoRef.current?.pause();
      toast.error(`Error: ${error.message}`);
    },
  });

  const { currentAIMessage, latestUserMessage, hasActiveTool } = useMemo(() => {
    const latestAIIdx = messages.findLastIndex((m) => m.role === 'assistant');
    const latestUserIdx = messages.findLastIndex((m) => m.role === 'user');

    const result = {
      currentAIMessage: latestAIIdx !== -1 ? messages[latestAIIdx] : null,
      latestUserMessage: latestUserIdx !== -1 ? messages[latestUserIdx] : null,
      hasActiveTool: false,
    };

    if (result.currentAIMessage) {
      result.hasActiveTool =
        result.currentAIMessage.parts?.some(
          (p) => p.type === 'tool-invocation' && p.toolInvocation?.state === 'result'
        ) || false;
    }

    if (latestAIIdx < latestUserIdx) result.currentAIMessage = null;

    return result;
  }, [messages]);

  const isToolInProgress = messages.some(
    (m) =>
      m.role === 'assistant' &&
      m.parts?.some((p) => p.type === 'tool-invocation' && p.toolInvocation?.state !== 'result')
  );

  const submitQuery = (query: string) => {
    if (!query.trim() || isToolInProgress) return;
    setLoadingSubmit(true);
    append({ role: 'user', content: query });
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.loop = true;
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      videoRef.current.pause();
    }
    if (initialQuery && !autoSubmitted) {
      setAutoSubmitted(true);
      setInput('');
      submitQuery(initialQuery);
    }
  }, [initialQuery, autoSubmitted]);

  useEffect(() => {
    if (!videoRef.current) return;
    isTalking ? videoRef.current.play().catch(() => {}) : videoRef.current.pause();
  }, [isTalking]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isToolInProgress) return;
    submitQuery(input);
    setInput('');
  };

  const handleStop = () => {
    stop();
    setLoadingSubmit(false);
    setIsTalking(false);
    videoRef.current?.pause();
  };

  const isEmptyState = !currentAIMessage && !latestUserMessage && !loadingSubmit;
  const headerHeight = hasActiveTool ? 90 : 160;

  return (
    <div className="relative h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Top-left: Back to portfolio + open to work */}
      <div className="absolute top-5 left-5 z-50 flex items-center gap-3">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-xs font-mono text-[#78716c] hover:text-[#d4a853] transition-colors"
        >
          <ArrowLeft size={12} />
          Portfolio
        </Link>
        <div className="hidden sm:flex items-center gap-1.5 bg-[#141414] border border-[#262626] rounded-full px-3 py-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          <span className="text-xs font-mono text-[#78716c]">Open to Internships</span>
        </div>
      </div>

      {/* Top-right: Social links + resume */}
      <div className="absolute top-5 right-5 z-50 flex items-center gap-2">
        <a
          href="https://linkedin.com/in/gthampy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-8 h-8 rounded-full bg-[#141414] border border-[#262626] text-[#78716c] hover:text-[#d4a853] hover:border-[rgba(212,168,83,0.3)] transition-colors"
        >
          <Linkedin size={14} />
        </a>
        <a
          href="https://github.com/gautamthampy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-8 h-8 rounded-full bg-[#141414] border border-[#262626] text-[#78716c] hover:text-[#d4a853] hover:border-[rgba(212,168,83,0.3)] transition-colors"
        >
          <Github size={14} />
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#d4a853] text-[#0a0a0a] rounded-full text-xs font-medium hover:bg-[#e8c06a] transition-colors"
        >
          <Download size={12} />
          <span className="hidden sm:inline">Resume</span>
        </a>
      </div>

      {/* Fixed avatar header */}
      <div
        className="fixed top-0 left-0 right-0 z-40"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,10,10,1) 0%, rgba(10,10,10,0.95) 40%, rgba(10,10,10,0.7) 70%, rgba(10,10,10,0) 100%)',
        }}
      >
        <div className={`transition-all duration-300 ${hasActiveTool ? 'pt-16 pb-0' : 'pt-16 pb-2'}`}>
          <div className="flex justify-center">
            <Avatar hasActiveTool={hasActiveTool} videoRef={videoRef} isTalking={isTalking} />
          </div>

          <AnimatePresence>
            {latestUserMessage && !currentAIMessage && (
              <motion.div {...MOTION_CONFIG} className="mx-auto flex max-w-xl px-4 mt-3">
                <div className="ml-auto bg-[#1c1c1c] border border-[#262626] rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                  <p className="text-sm text-[#fafaf9]">{latestUserMessage.content}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto flex h-full max-w-2xl flex-col">
        <div
          className="flex-1 overflow-y-auto px-2"
          style={{ paddingTop: `${headerHeight}px` }}
        >
          <AnimatePresence mode="wait">
            {isEmptyState ? (
              <motion.div
                key="landing"
                className="flex min-h-full items-center justify-center"
                {...MOTION_CONFIG}
              >
                <ChatLanding submitQuery={submitQuery} />
              </motion.div>
            ) : currentAIMessage ? (
              <div className="pb-4">
                <SimplifiedChatView
                  message={currentAIMessage as any}
                  isLoading={isLoading}
                  reload={reload}
                  addToolResult={addToolResult}
                />
              </div>
            ) : (
              loadingSubmit && (
                <motion.div key="loading" {...MOTION_CONFIG} className="px-4 pt-4">
                  <LoadingDots />
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>

        {/* Bottom bar */}
        <div className="sticky bottom-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a] to-transparent pt-4 px-2 md:px-0">
          <div className="flex flex-col items-center gap-2">
            <QuickQuestions submitQuery={submitQuery} />
            <ChatBottombar
              input={input}
              handleInputChange={handleInputChange}
              handleSubmit={onSubmit}
              isLoading={isLoading}
              stop={handleStop}
              isToolInProgress={isToolInProgress}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
