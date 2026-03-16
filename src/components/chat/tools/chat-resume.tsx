import { Download } from 'lucide-react';

export default function ChatResume() {
  return (
    <div className="bg-[#141414] border border-[#262626] rounded-2xl p-5 mb-4">
      <h4 className="font-mono text-xs text-[#d4a853] tracking-widest uppercase mb-3">Resume</h4>
      <p className="text-sm text-[#a8a29e] mb-4">
        You can download my full resume below — it covers my experience at Sandisk, SADA, and SJSU Research, plus my projects and cloud certifications.
      </p>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#d4a853] text-[#0a0a0a] rounded-full text-sm font-medium hover:bg-[#e8c06a] transition-colors"
      >
        <Download size={14} />
        Download Resume
      </a>
    </div>
  );
}
