'use client';

import { ChatRequestOptions } from 'ai';
import { Message } from 'ai/react';
import { motion } from 'framer-motion';
import ChatMessageContent from './chat-message-content';
import ToolRenderer from './tool-renderer';

interface SimplifiedChatViewProps {
  message: Message;
  isLoading: boolean;
  reload: (chatRequestOptions?: ChatRequestOptions) => Promise<string | null | undefined>;
  addToolResult?: (args: { toolCallId: string; result: string }) => void;
}

const MOTION_CONFIG = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 16 },
  transition: { duration: 0.3 },
};

export function SimplifiedChatView({ message, isLoading, reload, addToolResult }: SimplifiedChatViewProps) {
  if (message.role !== 'assistant') return null;

  const toolInvocations =
    message.parts
      ?.filter(
        (part) =>
          part.type === 'tool-invocation' && part.toolInvocation?.state === 'result'
      )
      .map((part) => (part.type === 'tool-invocation' ? part.toolInvocation : null))
      .filter(Boolean) || [];

  const currentTool = toolInvocations.length > 0 ? [toolInvocations[0]] : [];
  const hasTextContent = message.content.trim().length > 0;
  const hasTools = currentTool.length > 0;

  return (
    <motion.div {...MOTION_CONFIG} className="flex h-full w-full flex-col px-4">
      <div className="flex h-full w-full flex-col overflow-y-auto">
        {hasTools && (
          <div className="mb-3 w-full">
            <ToolRenderer toolInvocations={currentTool} messageId={message.id || 'msg'} />
          </div>
        )}
        {hasTextContent && (
          <div className="w-full bg-[#141414] border border-[#262626] rounded-2xl p-4">
            <ChatMessageContent
              message={message}
              isLast={true}
              isLoading={isLoading}
              reload={reload}
              addToolResult={addToolResult}
              skipToolRendering={true}
            />
          </div>
        )}
        <div className="pb-4" />
      </div>
    </motion.div>
  );
}
