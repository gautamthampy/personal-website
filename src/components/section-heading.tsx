import FadeIn from './fade-in';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <FadeIn className={`flex flex-col gap-4 mb-16 ${alignClass}`}>
      <div className={`flex items-center gap-4 ${align === 'center' ? 'justify-center' : ''}`}>
        <div className="w-12 h-px bg-[#d4a853]" />
        <span className="font-mono text-xs text-[#d4a853] tracking-[0.2em] uppercase">
          {title}
        </span>
      </div>
      {subtitle && (
        <p className="text-[#78716c] text-sm max-w-md">{subtitle}</p>
      )}
    </FadeIn>
  );
}
