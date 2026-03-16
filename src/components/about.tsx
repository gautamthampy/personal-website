import Image from 'next/image';
import SectionHeading from './section-heading';
import FadeIn from './fade-in';
import { personalInfo, education } from '@/lib/data';
import { GraduationCap, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
      <SectionHeading title="About" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Photo */}
        <FadeIn direction="right" className="relative">
          <div className="relative w-full max-w-sm mx-auto lg:mx-0">
            {/* Gold border frame */}
            <div className="absolute -inset-3 border border-[rgba(212,168,83,0.2)] rounded-2xl" />
            <div className="absolute -inset-1.5 border border-[rgba(212,168,83,0.1)] rounded-xl" />
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-[#141414]">
              <Image
                src="/avatar_Gautam.jpeg"
                alt="Gautam Thampy"
                fill
                className="object-cover grayscale-[20%]"
                priority
              />
              {/* Subtle gold overlay at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1/3"
                style={{
                  background: 'linear-gradient(to top, rgba(212,168,83,0.08), transparent)',
                }}
              />
            </div>
            {/* Location chip */}
            <div className="absolute -bottom-4 -right-4 flex items-center gap-2 bg-[#141414] border border-[#262626] rounded-full px-4 py-2">
              <MapPin size={12} className="text-[#d4a853]" />
              <span className="font-mono text-xs text-[#a8a29e]">San Jose, CA</span>
            </div>
          </div>
        </FadeIn>

        {/* Text */}
        <div className="flex flex-col gap-8">
          <FadeIn delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl text-[#fafaf9] leading-snug">
              Engineer by trade,<br />
              <span className="text-[#d4a853]">builder by nature.</span>
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-4">
            {personalInfo.bio.map((para, i) => (
              <FadeIn key={i} delay={0.15 + i * 0.1}>
                <p className="text-[#a8a29e] leading-relaxed">{para}</p>
              </FadeIn>
            ))}
          </div>

          {/* Education */}
          <FadeIn delay={0.35}>
            <div className="flex flex-col gap-4 pt-4 border-t border-[#262626]">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap size={14} className="text-[#d4a853]" />
                <span className="font-mono text-xs text-[#d4a853] tracking-widest uppercase">Education</span>
              </div>
              {education.map((edu, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-[#fafaf9]">{edu.degree}</span>
                  <span className="text-sm text-[#a8a29e]">{edu.school}</span>
                  <span className="font-mono text-xs text-[#78716c]">{edu.period} · {edu.location}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Open to work badge */}
          <FadeIn delay={0.45}>
            <div className="inline-flex items-center gap-2 bg-[#141414] border border-[#262626] rounded-full px-4 py-2 self-start">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-xs text-[#a8a29e]">Open to internships & collaborations</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
