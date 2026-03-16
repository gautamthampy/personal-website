'use client';

import { Suspense } from 'react';
import Chat from '@/components/chat/chat';

export default function ChatPage() {
  return (
    <Suspense
      fallback={
        <div className="h-screen flex items-center justify-center bg-[#0a0a0a]">
          <div className="font-mono text-xs text-[#78716c]">Loading...</div>
        </div>
      }
    >
      <Chat />
    </Suspense>
  );
}
