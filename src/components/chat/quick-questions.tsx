'use client';

import { motion } from 'framer-motion';
import { Laugh, BriefcaseBusiness, Layers, FileText, UserRoundSearch } from 'lucide-react';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface QuickQuestionsProps {
  submitQuery: (query: string) => void;
}

const questions = {
  Me: 'Who are you? Tell me about yourself.',
  Projects: 'What are your projects?',
  Skills: 'What are your skills?',
  Resume: 'Can I see your resume?',
  Contact: 'How can I reach you?',
} as const;

const config = [
  { key: 'Me' as const, icon: Laugh },
  { key: 'Projects' as const, icon: BriefcaseBusiness },
  { key: 'Skills' as const, icon: Layers },
  { key: 'Resume' as const, icon: FileText },
  { key: 'Contact' as const, icon: UserRoundSearch },
];

export default function QuickQuestions({ submitQuery }: QuickQuestionsProps) {
  const [visible, setVisible] = useState(true);

  return (
    <div className="w-full">
      <div className="flex justify-center mb-1">
        <button
          onClick={() => setVisible(!visible)}
          className="flex items-center gap-1 px-3 py-1 text-xs font-mono text-[#78716c] hover:text-[#a8a29e] transition-colors"
        >
          {visible ? <ChevronDown size={12} /> : <ChevronUp size={12} />}
          {visible ? 'Hide suggestions' : 'Show suggestions'}
        </button>
      </div>
      {visible && (
        <div className="flex flex-wrap gap-2 justify-center">
          {config.map(({ key, icon: Icon }) => (
            <motion.button
              key={key}
              onClick={() => submitQuery(questions[key])}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-3 py-2 bg-[#141414] border border-[#262626] rounded-xl text-xs text-[#a8a29e] hover:border-[rgba(212,168,83,0.3)] hover:text-[#d4a853] transition-colors font-mono"
            >
              <Icon size={12} />
              {key}
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
}
