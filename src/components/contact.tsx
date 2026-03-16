import FadeIn from './fade-in';
import { personalInfo } from '@/lib/data';
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/gthampy',
    href: personalInfo.linkedin,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '/gautamthampy',
    href: personalInfo.github,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto"
    >
      <div className="bg-[#141414] border border-[#262626] rounded-3xl p-10 md:p-16 relative overflow-hidden">
        {/* Background gold glow */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(212,168,83,0.05) 0%, transparent 70%)',
            transform: 'translate(30%, -30%)',
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#d4a853]" />
                <span className="font-mono text-xs text-[#d4a853] tracking-[0.2em] uppercase">
                  Contact
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl text-[#fafaf9] leading-tight mb-6">
                Let&apos;s build something{' '}
                <span className="text-[#d4a853]">together.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-[#a8a29e] leading-relaxed mb-8 max-w-md">
                I&apos;m currently open to internship and full-time roles in software
                engineering, backend systems, and AI/ML. Feel free to reach out — I respond
                promptly.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#d4a853] text-[#0a0a0a] rounded-full font-medium text-sm hover:bg-[#e8c06a] transition-colors duration-200"
                >
                  <Mail size={15} />
                  Get In Touch
                </a>
                <a
                  href="/chat"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#262626] text-[#a8a29e] rounded-full font-medium text-sm hover:border-[#d4a853] hover:text-[#d4a853] transition-colors duration-200"
                >
                  <MessageCircle size={15} />
                  Chat with AI Me
                </a>
              </div>
            </FadeIn>

            {/* Open to work badge */}
            <FadeIn delay={0.3}>
              <div className="inline-flex items-center gap-2 bg-[#0a0a0a] border border-[#262626] rounded-full px-4 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="font-mono text-xs text-[#a8a29e]">
                  Available — Summer 2025
                </span>
              </div>
            </FadeIn>
          </div>

          {/* Right — contact cards */}
          <div className="flex flex-col gap-4">
            {contactMethods.map((method, i) => {
              const Icon = method.icon;
              return (
                <FadeIn key={method.label} delay={0.1 + i * 0.08}>
                  <a
                    href={method.href}
                    target={method.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 bg-[#0a0a0a] border border-[#262626] rounded-xl hover:border-[rgba(212,168,83,0.3)] transition-colors duration-200"
                  >
                    <div className="w-10 h-10 bg-[rgba(212,168,83,0.1)] border border-[rgba(212,168,83,0.2)] rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[rgba(212,168,83,0.15)] transition-colors">
                      <Icon size={16} className="text-[#d4a853]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#78716c] font-mono">{method.label}</p>
                      <p className="text-sm text-[#a8a29e] group-hover:text-[#fafaf9] transition-colors">
                        {method.value}
                      </p>
                    </div>
                    <span className="ml-auto text-[#262626] group-hover:text-[#d4a853] transition-colors text-lg">
                      ↗
                    </span>
                  </a>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
