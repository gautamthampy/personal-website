import SectionHeading from './section-heading';
import FadeIn from './fade-in';
import { experiences } from '@/lib/data';
import { MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
      <SectionHeading
        title="Experience"
        subtitle="From cloud infrastructure at a Google Cloud partner to Gen AI at Sandisk."
      />

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4a853] via-[#262626] to-transparent hidden md:block" />

        <div className="flex flex-col gap-0">
          {experiences.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.1} className="relative">
              <div className="md:pl-10 pb-16 relative">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-[#d4a853] bg-[#0a0a0a] hidden md:block" />

                <div className="group">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
                    <div>
                      <h3 className="font-display text-xl text-[#fafaf9] font-semibold">
                        {exp.company}
                      </h3>
                      <p className="text-[#d4a853] text-sm mt-0.5">{exp.role}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1">
                      <span className="font-mono text-xs text-[#78716c] tracking-wide">{exp.period}</span>
                      <div className="flex items-center gap-1">
                        <MapPin size={10} className="text-[#78716c]" />
                        <span className="font-mono text-xs text-[#78716c]">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="flex flex-col gap-2 mb-4">
                    {exp.highlights.map((point, j) => (
                      <li key={j} className="flex gap-3 text-[#a8a29e] text-sm leading-relaxed">
                        <span className="text-[#d4a853] mt-1.5 shrink-0">—</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, j) => (
                      <span
                        key={j}
                        className="font-mono text-xs px-2.5 py-1 bg-[#141414] border border-[#262626] rounded text-[#78716c]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Divider (not last) */}
                {i < experiences.length - 1 && (
                  <div className="mt-16 w-full h-px bg-[#141414] md:hidden" />
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
