'use client';

import { Message } from 'ai/react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export type ChatMessageContentProps = {
  message: Message;
  isLast?: boolean;
  isLoading?: boolean;
  reload?: () => Promise<string | null | undefined>;
  addToolResult?: (args: { toolCallId: string; result: string }) => void;
  skipToolRendering?: boolean;
};

const CodeBlock = ({ content }: { content: string }) => {
  const [isOpen, setIsOpen] = useState(true);
  const firstLineBreak = content.indexOf('\n');
  const firstLine = content.substring(0, firstLineBreak).trim();
  const language = firstLine || 'text';
  const code = firstLine ? content.substring(firstLineBreak + 1) : content;
  const previewLines = code.split('\n').slice(0, 1).join('\n');
  const hasMoreLines = code.split('\n').length > 1;

  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-[#262626]">
      <div className="flex items-center justify-between bg-[#1c1c1c] px-4 py-2 border-b border-[#262626]">
        <span className="font-mono text-xs text-[#d4a853]">
          {language !== 'text' ? language : 'Code'}
        </span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#78716c] hover:text-[#a8a29e] transition-colors"
        >
          {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>
      <div className="bg-[#141414]">
        {!isOpen && hasMoreLines ? (
          <pre className="px-4 py-3 font-mono text-sm text-[#a8a29e]">
            <code>{previewLines + '\n...'}</code>
          </pre>
        ) : (
          isOpen && (
            <div style={{ overflowX: 'auto' }}>
              <pre className="min-w-max px-4 py-3 font-mono text-sm text-[#a8a29e] whitespace-pre">
                <code>{code}</code>
              </pre>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default function ChatMessageContent({ message }: ChatMessageContentProps) {
  const renderContent = () =>
    message.parts?.map((part, partIndex) => {
      if (part.type !== 'text' || !part.text) return null;
      const contentParts = part.text.split('```');
      return (
        <div key={partIndex} className="w-full space-y-2">
          {contentParts.map((content, i) =>
            i % 2 === 0 ? (
              <div key={`text-${i}`} className="prose-dark">
                <Markdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    p: ({ children }) => (
                      <p className="mb-2 text-[#a8a29e] leading-relaxed break-words whitespace-pre-wrap">
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="my-2 list-disc pl-5 text-[#a8a29e]">{children}</ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="my-2 list-decimal pl-5 text-[#a8a29e]">{children}</ol>
                    ),
                    li: ({ children }) => <li className="mb-1 text-[#a8a29e]">{children}</li>,
                    strong: ({ children }) => (
                      <strong className="text-[#fafaf9] font-semibold">{children}</strong>
                    ),
                    a: ({ href, children }) => (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#d4a853] hover:text-[#e8c06a] underline"
                      >
                        {children}
                      </a>
                    ),
                  }}
                >
                  {content}
                </Markdown>
              </div>
            ) : (
              <CodeBlock key={`code-${i}`} content={content} />
            )
          )}
        </div>
      );
    });

  return <div className="w-full">{renderContent()}</div>;
}
