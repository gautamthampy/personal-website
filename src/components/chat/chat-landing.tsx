'use client';

import { motion } from 'framer-motion';
import {
  BriefcaseBusiness,
  FileText,
  Layers,
  Laugh,
  UserRoundSearch,
} from 'lucide-react';
import React from 'react';

interface ChatLandingProps {
  submitQuery: (query: string) => void;
}

const questions = {
  Me: 'Who are you? Tell me about yourself.',
  Projects: 'What are your projects?',
  Skills: 'What are your skills?',
  Resume: "Can I see your resume?",
  Contact: 'How can I reach you?',
} as const;

const questionConfig = [
  { key: 'Me' as const, color: '#d4a853', icon: Laugh },
  { key: 'Projects' as const, color: '#d4a853', icon: BriefcaseBusiness },
  { key: 'Skills' as const, color: '#d4a853', icon: Layers },
  { key: 'Resume' as const, color: '#d4a853', icon: FileText },
  { key: 'Contact' as const, color: '#d4a853', icon: UserRoundSearch },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ChatLanding: React.FC<ChatLandingProps> = ({ submitQuery }) => {
  return (
    <motion.div
      className="flex w-full flex-col items-center px-4 py-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="mb-10 text-center" variants={itemVariants}>
        <h2 className="font-display text-2xl md:text-3xl text-[#fafaf9] font-semibold mb-3">
          Ask me anything.
        </h2>
        <p className="text-[#78716c] text-sm max-w-sm mx-auto font-mono">
          I'll answer as Gautam — about my work, skills, and experience.
        </p>
      </motion.div>

      <motion.div className="w-full max-w-md flex flex-col gap-2" variants={containerVariants}>
        {questionConfig.map((item) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={item.key}
              variants={itemVariants}
              className="group flex w-full items-center gap-4 rounded-xl bg-[#141414] border border-[#262626] p-4 text-left hover:border-[rgba(212,168,83,0.3)] transition-colors"
              onClick={() => submitQuery(questions[item.key])}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <span
                className="rounded-lg p-2 shrink-0"
                style={{ backgroundColor: 'rgba(212,168,83,0.1)' }}
              >
                <Icon size={16} style={{ color: item.color }} />
              </span>
              <div>
                <p className="text-sm font-medium text-[#fafaf9]">{item.key}</p>
                <p className="text-xs text-[#78716c] font-mono mt-0.5">
                  {questions[item.key].length > 45
                    ? `${questions[item.key].substring(0, 45)}...`
                    : questions[item.key]}
                </p>
              </div>
              <span className="ml-auto text-[#262626] group-hover:text-[#d4a853] transition-colors">
                →
              </span>
            </motion.button>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default ChatLanding;
