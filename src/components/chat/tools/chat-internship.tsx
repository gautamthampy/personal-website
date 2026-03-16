import { Briefcase, Mail, Linkedin } from 'lucide-react';

export default function ChatInternship({ data }: { data: any }) {
  const { status, experience } = data || {};
  return (
    <div className="bg-[#141414] border border-[#262626] rounded-2xl p-5 mb-4">
      {/* Status */}
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#262626]">
        <div className="w-10 h-10 rounded-lg bg-[rgba(212,168,83,0.1)] border border-[rgba(212,168,83,0.2)] flex items-center justify-center shrink-0">
          <Briefcase size={16} className="text-[#d4a853]" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-sm font-semibold text-[#fafaf9]">{status?.lookingFor}</span>
          </div>
          <p className="text-xs text-[#78716c] font-mono">{status?.role}</p>
        </div>
      </div>

      {/* Contact */}
      {status?.contact && (
        <div className="flex flex-wrap gap-3 mb-4">
          <a
            href={`mailto:${status.contact.email}`}
            className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 bg-[#0a0a0a] border border-[#262626] rounded-full text-[#a8a29e] hover:border-[rgba(212,168,83,0.3)] hover:text-[#d4a853] transition-colors"
          >
            <Mail size={11} />
            Email me
          </a>
          <a
            href={status.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 bg-[#0a0a0a] border border-[#262626] rounded-full text-[#a8a29e] hover:border-[rgba(212,168,83,0.3)] hover:text-[#d4a853] transition-colors"
          >
            <Linkedin size={11} />
            LinkedIn
          </a>
        </div>
      )}

      {/* Experience */}
      {experience && (
        <div>
          <p className="font-mono text-xs text-[#78716c] tracking-widest uppercase mb-3">
            Work History
          </p>
          <div className="flex flex-col gap-3">
            {experience.map((exp: any, i: number) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#d4a853] mt-1.5 shrink-0" />
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-[#fafaf9] font-medium">{exp.company}</span>
                    <span className="font-mono text-xs text-[#78716c]">{exp.period}</span>
                  </div>
                  <p className="text-xs text-[#a8a29e]">{exp.role}</p>
                  {exp.highlight && (
                    <p className="text-xs text-[#d4a853] mt-0.5">✦ {exp.highlight}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
