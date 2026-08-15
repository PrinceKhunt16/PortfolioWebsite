import Reveal from './reveal';

/**
 * SectionHeading — the editorial section header:
 *  - eyebrow: "# Label" in geometric sans with an accent-gradient label
 *  - title:  big Caprasimo display serif
 *  - subtitle: muted body copy
 */
export default function SectionHeading({
    eyebrow,
    title,
    subtitle,
    align = 'center',
    className = '',
}) {
    const isCenter = align === 'center';
    return (
        <Reveal
            className={`mb-14 flex flex-col ${
                isCenter ? 'items-center text-center' : 'items-start text-left'
            } ${className}`}
        >
            {eyebrow && (
                <p className="font-geom text-base font-semibold tracking-tight">
                    <span className="text-muted-foreground">#</span>{' '}
                    <span className="text-gradient-accent">{eyebrow}</span>
                </p>
            )}
            <h2 className="font-caprasimo mt-3 text-[2.1rem] leading-[1.12] text-balance text-foreground sm:text-[2.75rem] lg:text-[3.25rem]">
                {title}
            </h2>
            {subtitle && (
                <p
                    className={`mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground ${
                        isCenter ? 'mx-auto' : ''
                    }`}
                >
                    {subtitle}
                </p>
            )}
            <div
                className={`rule-sweep mt-6 h-px w-24 ${isCenter ? 'mx-auto' : ''}`}
            />
        </Reveal>
    );
}
