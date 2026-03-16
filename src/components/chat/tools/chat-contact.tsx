import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export default function ChatContact({ data }: { data: any }) {
  const contact = data?.contact || {};
  return (
    <div className="bg-[#141414] border border-[#262626] rounded-2xl p-5 mb-4">
      <h4 className="font-mono text-xs text-[#d4a853] tracking-widest uppercase mb-4">
        Contact Info
      </h4>
      <div className="flex flex-col gap-3">
        {contact.email && (
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-3 text-sm text-[#a8a29e] hover:text-[#d4a853] transition-colors"
          >
            <Mail size={14} className="text-[#d4a853] shrink-0" />
            {contact.email}
          </a>
        )}
        {contact.linkedin && (
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-[#a8a29e] hover:text-[#d4a853] transition-colors"
          >
            <Linkedin size={14} className="text-[#d4a853] shrink-0" />
            /in/gthampy
          </a>
        )}
        {contact.github && (
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-[#a8a29e] hover:text-[#d4a853] transition-colors"
          >
            <Github size={14} className="text-[#d4a853] shrink-0" />
            /gautamthampy
          </a>
        )}
        {contact.location && (
          <span className="flex items-center gap-3 text-sm text-[#a8a29e]">
            <MapPin size={14} className="text-[#d4a853] shrink-0" />
            {contact.location}
          </span>
        )}
      </div>
      {contact.availability && (
        <div className="mt-4 pt-4 border-t border-[#262626]">
          <div className="inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-mono text-xs text-[#a8a29e]">{contact.availability}</span>
          </div>
        </div>
      )}
    </div>
  );
}
