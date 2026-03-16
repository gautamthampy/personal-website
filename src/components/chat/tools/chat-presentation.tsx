import { MapPin, GraduationCap } from 'lucide-react';
import Image from 'next/image';

export default function ChatPresentation({ data }: { data: any }) {
  return (
    <div className="bg-[#141414] border border-[#262626] rounded-2xl p-5 mb-4">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[rgba(212,168,83,0.3)] shrink-0">
          <Image src="/avatar_Gautam.jpeg" alt="Gautam" fill className="object-cover" />
        </div>
        <div>
          <h3 className="font-display text-lg text-[#fafaf9] font-semibold">Gautam Thampy</h3>
          <p className="text-xs text-[#d4a853] font-mono">Software Engineer</p>
        </div>
      </div>
      <p className="text-sm text-[#a8a29e] leading-relaxed mb-4">{data?.presentation}</p>
      <div className="flex flex-wrap gap-3 text-xs font-mono text-[#78716c]">
        <span className="flex items-center gap-1.5">
          <MapPin size={11} className="text-[#d4a853]" />
          {data?.location}
        </span>
        <span className="flex items-center gap-1.5">
          <GraduationCap size={11} className="text-[#d4a853]" />
          {data?.currentStatus}
        </span>
      </div>
    </div>
  );
}
