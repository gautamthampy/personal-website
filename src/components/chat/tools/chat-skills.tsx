export default function ChatSkills({ data }: { data: any }) {
  const skills = data?.skills || {};
  const categories = [
    { label: 'Languages', key: 'languages' },
    { label: 'Backend', key: 'backend' },
    { label: 'Frontend', key: 'frontend' },
    { label: 'Cloud & DevOps', key: 'devops' },
    { label: 'Monitoring', key: 'monitoring' },
    { label: 'AI & ML', key: 'ai_ml' },
    { label: 'Databases', key: 'databases' },
  ];

  return (
    <div className="bg-[#141414] border border-[#262626] rounded-2xl p-5 mb-4">
      <h4 className="font-mono text-xs text-[#d4a853] tracking-widest uppercase mb-4">
        Technical Skills
      </h4>
      <div className="flex flex-col gap-4">
        {categories.map(({ label, key }) => {
          const items = skills[key];
          if (!items?.length) return null;
          return (
            <div key={key}>
              <p className="text-xs text-[#78716c] font-mono mb-2">{label}</p>
              <div className="flex flex-wrap gap-1.5">
                {items.map((s: string, i: number) => (
                  <span
                    key={i}
                    className="font-mono text-xs px-2.5 py-1 bg-[#0a0a0a] border border-[#262626] rounded text-[#a8a29e]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
