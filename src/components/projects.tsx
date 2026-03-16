'use client';

import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import FadeIn from './fade-in';
import { projects } from '@/lib/data';

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
      <SectionHeading
        title="Projects"
        subtitle="Selected work spanning AI, backend systems, and applied ML."
      />

      {/* Featured — full width */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        {featured.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} large />
        ))}
      </div>

      {/* Rest — 3-col grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {rest.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={featured.length + i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  large = false,
}: {
  project: (typeof projects)[0];
  index: number;
  large?: boolean;
}) {
  return (
    <FadeIn delay={index * 0.07}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className={`group relative bg-[#141414] border border-[#262626] rounded-2xl p-6 h-full flex flex-col cursor-default
          hover:border-[rgba(212,168,83,0.3)] transition-colors duration-300 ${large ? 'md:p-8' : ''}`}
        style={{
          boxShadow: '0 0 0 0 rgba(212,168,83,0)',
          transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.2s',
        }}
        onHoverStart={(e) => {
          (e.target as HTMLElement).style?.setProperty?.(
            'box-shadow',
            '0 8px 40px rgba(212,168,83,0.06)'
          );
        }}
      >
        {/* Category + Year */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs text-[#d4a853] tracking-widest uppercase">
            {project.category}
          </span>
          <span className="font-mono text-xs text-[#78716c]">{project.year}</span>
        </div>

        {/* Title */}
        <h3 className={`font-display font-semibold text-[#fafaf9] mb-1 ${large ? 'text-2xl' : 'text-lg'}`}>
          {project.title}
        </h3>

        {/* Tagline */}
        <p className="font-mono text-xs text-[#d4a853] mb-3">{project.tagline}</p>

        {/* Description */}
        <p className="text-[#a8a29e] text-sm leading-relaxed flex-1 mb-6">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-xs px-2 py-1 bg-[#0a0a0a] border border-[#262626] rounded text-[#78716c]"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </FadeIn>
  );
}
