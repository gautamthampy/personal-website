export default function ChatProjects({ data }: { data: any }) {
  const projects = data?.projects || [];
  return (
    <div className="mb-4 flex flex-col gap-3">
      {projects.map((p: any, i: number) => (
        <div
          key={i}
          className="bg-[#141414] border border-[#262626] rounded-xl p-4 hover:border-[rgba(212,168,83,0.2)] transition-colors"
        >
          <div className="flex items-start justify-between gap-2 mb-2">
            <h4 className="text-sm font-semibold text-[#fafaf9]">{p.name}</h4>
            {p.year && (
              <span className="font-mono text-xs text-[#78716c] shrink-0">{p.year}</span>
            )}
          </div>
          <p className="text-xs text-[#a8a29e] leading-relaxed mb-3">{p.description}</p>
          {p.achievements && p.achievements.length > 0 && (
            <ul className="mb-3 flex flex-col gap-1">
              {p.achievements.map((a: string, j: number) => (
                <li key={j} className="flex gap-2 text-xs text-[#d4a853]">
                  <span>✦</span><span>{a}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="flex flex-wrap gap-1.5">
            {p.technologies?.map((t: string, j: number) => (
              <span
                key={j}
                className="font-mono text-xs px-2 py-0.5 bg-[#0a0a0a] border border-[#262626] rounded text-[#78716c]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
