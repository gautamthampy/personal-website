import { personalInfo } from '@/lib/data';
import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#141414] py-10 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-[#78716c] text-center sm:text-left">
          Designed & built by{' '}
          <span className="text-[#d4a853]">{personalInfo.name}</span> · 2026
        </p>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#78716c] hover:text-[#d4a853] transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#78716c] hover:text-[#d4a853] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
