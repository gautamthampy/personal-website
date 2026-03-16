'use client';

import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import FadeIn from './fade-in';
import { skills } from '@/lib/data';

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto"
    >
      <SectionHeading
        title="Skills"
        subtitle="Technologies and tools I work with regularly."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((group, gi) => (
          <FadeIn key={group.category} delay={gi * 0.07}>
            <div className="flex flex-col gap-4">
              <h3 className="font-mono text-xs text-[#d4a853] tracking-[0.2em] uppercase">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    whileHover={{ borderColor: 'rgba(212,168,83,0.5)', color: '#d4a853' }}
                    transition={{ duration: 0.15 }}
                    className="font-mono text-xs px-3 py-1.5 bg-[#141414] border border-[#262626] rounded text-[#a8a29e] cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
