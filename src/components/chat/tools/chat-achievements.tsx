export default function ChatAchievements({ data }: { data: any }) {
  const { techJourney } = data || {};
  return (
    <div className="bg-[#141414] border border-[#262626] rounded-2xl p-5 mb-4">
      <h4 className="font-mono text-xs text-[#d4a853] tracking-widest uppercase mb-4">
        {techJourney?.title || 'Achievements'}
      </h4>
      <div className="flex flex-col gap-3 mb-4">
        {techJourney?.highlights?.map((h: any, i: number) => (
          <div key={i} className="flex items-start gap-3">
            <span className="text-[#d4a853] shrink-0 mt-0.5">✦</span>
            <div>
              <span className="text-sm font-semibold text-[#fafaf9]">{h.achievement}</span>
              <span className="text-sm text-[#78716c]"> — {h.context}</span>
            </div>
          </div>
        ))}
      </div>
      {techJourney?.philosophy && (
        <p className="text-xs text-[#78716c] italic border-t border-[#262626] pt-3 mt-3">
          &ldquo;{techJourney.philosophy}&rdquo;
        </p>
      )}
    </div>
  );
}
