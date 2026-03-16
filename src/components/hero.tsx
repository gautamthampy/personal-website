'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 80% 40%, rgba(212,168,83,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 pt-24 pb-16">
        {/* Label */}
        <div className="mb-8">
          <span className="font-mono text-xs text-[#d4a853] tracking-[0.3em] uppercase">
            {personalInfo.title}
          </span>
        </div>

        {/* Name */}
        <div className="overflow-hidden mb-2">
          <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#fafaf9] leading-none tracking-tight">
            {personalInfo.name.split(' ').map((word, wi) => (
              <span key={wi} className="inline-block overflow-hidden mr-4 last:mr-0">
                {mounted ? (
                  word.split('').map((char, ci) => (
                    <motion.span
                      key={ci}
                      className="inline-block"
                      initial={{ y: '100%' }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 0.55,
                        delay: 0.05 + wi * 0.12 + ci * 0.025,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    >
                      {char}
                    </motion.span>
                  ))
                ) : (
                  <span>{word}</span>
                )}
              </span>
            ))}
          </h1>
        </div>

        {/* Gold accent line */}
        {mounted ? (
          <motion.div
            initial={{ scaleX: 0, transformOrigin: 'left' }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            className="w-32 h-px bg-[#d4a853] mb-8"
          />
        ) : (
          <div className="w-32 h-px bg-[#d4a853] mb-8" />
        )}

        {/* Tagline */}
        <p className="text-[#a8a29e] text-lg md:text-xl max-w-xl leading-relaxed mb-12">
          {personalInfo.tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#d4a853] text-[#0a0a0a] rounded-full font-medium text-sm hover:bg-[#e8c06a] transition-colors duration-200"
          >
            View My Work
            <ArrowDown size={16} />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#d4a853] text-[#d4a853] rounded-full font-medium text-sm hover:bg-[rgba(212,168,83,0.1)] transition-colors duration-200"
          >
            Download Resume
            <Download size={16} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-6 md:left-16 lg:left-24 flex items-center gap-3">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-[#78716c]" />
        </motion.div>
        <span className="font-mono text-xs text-[#78716c] tracking-widest uppercase">
          Scroll
        </span>
      </div>

      {/* Corner number */}
      <div className="absolute bottom-12 right-6 md:right-16 lg:right-24 font-mono text-xs text-[#262626] tracking-widest">
        01 / INTRO
      </div>
    </section>
  );
}
