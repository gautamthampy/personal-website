'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Monogram */}
          <Link href="/" className="font-display font-bold text-xl text-[#d4a853] tracking-tight">
            GT
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#a8a29e] hover:text-[#fafaf9] transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/chat"
              className="text-sm text-[#d4a853] hover:text-[#e8c06a] transition-colors duration-200 tracking-wide"
            >
              Chat with Me ↗
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-1.5 border border-[#d4a853] text-[#d4a853] rounded-full hover:bg-[#d4a853] hover:text-[#0a0a0a] transition-all duration-200"
            >
              Resume
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#a8a29e] hover:text-[#fafaf9]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="font-display text-3xl text-[#fafaf9] hover:text-[#d4a853] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="/chat"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.05 }}
              className="font-display text-3xl text-[#d4a853]"
              onClick={() => setMobileOpen(false)}
            >
              Chat with Me
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (links.length + 1) * 0.05 }}
              className="mt-4 px-8 py-3 border border-[#d4a853] text-[#d4a853] rounded-full text-lg"
              onClick={() => setMobileOpen(false)}
            >
              Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
