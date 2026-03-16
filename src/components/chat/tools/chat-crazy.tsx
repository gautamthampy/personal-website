export default function ChatCrazy({ data }: { data: any }) {
  const { crazy } = data || {};
  return (
    <div className="bg-[#141414] border border-[rgba(212,168,83,0.2)] rounded-2xl p-5 mb-4">
      <h4 className="font-mono text-xs text-[#d4a853] tracking-widest uppercase mb-3">
        {crazy?.title}
      </h4>
      <p className="text-sm text-[#a8a29e] leading-relaxed">{crazy?.story}</p>
    </div>
  );
}
