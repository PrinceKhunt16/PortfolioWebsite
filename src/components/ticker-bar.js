'use client';

import { Fragment } from 'react';
import { PiBriefcase, PiSparkle, PiPaperPlaneTilt, PiRocketLaunch, PiGlobeHemisphereWest } from 'react-icons/pi';

/**
 * TickerBar — the slim availability marquee that sits above the navbar.
 * The message list is rendered twice back-to-back and the track is translated
 * by -50%, so the loop is seamless with no visible reset.
 */
const messages = [
    {
        icon: <PiBriefcase />,
        text: 'Open to full-time',
        accent: 'AI / ML Engineer',
        tail: 'roles',
    },
    {
        icon: <PiSparkle />,
        text: 'Available for',
        accent: 'freelance AI / GenAI',
        tail: 'projects',
    },
    {
        icon: <PiRocketLaunch />,
        text: 'I build',
        accent: 'AI MVPs & prototypes',
        tail: 'for startups — from idea to shipped in weeks',
    },
    {
        icon: <PiGlobeHemisphereWest />,
        text: 'Want to work remotely with',
        accent: 'US & European',
        tail: 'clients',
    },
    {
        icon: <PiPaperPlaneTilt />,
        text: "Let's build something —",
        accent: 'princekhunt04@gmail.com',
        tail: '',
    },
];

const Track = ({ ariaHidden }) => (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
        {messages.map((m, i) => (
            <Fragment key={i}>
                <span className="font-geom flex items-center gap-2 text-xs whitespace-nowrap text-muted-foreground">
                    <span className="text-sm text-primary">{m.icon}</span>
                    {m.text} <span className="font-semibold text-primary">{m.accent}</span>
                    {m.tail && <> {m.tail}</>}
                </span>
                {/* separator: equal breathing room on both sides */}
                <span className="mx-8 size-1 shrink-0 rotate-45 bg-primary/50" />
            </Fragment>
        ))}
    </div>
);

const TickerBar = () => {
    return (
        <div className="fixed inset-x-0 top-0 z-[60] border-b border-border bg-background/85 backdrop-blur-xl">
            {/* accent hairline along the very top edge */}
            <div className="bg-accent-line h-px w-full" />

            <div className="group relative flex h-9 items-center overflow-hidden">
                {/* live availability dot */}
                <span className="absolute left-3 z-10 flex items-center gap-1.5 bg-background/85 pr-3 backdrop-blur-xl">
                    <span className="ld-pulse-dot size-1.5 rounded-full bg-primary" />
                    <span className="font-geom hidden text-[0.65rem] font-semibold tracking-widest text-primary uppercase sm:inline">
                        Available
                    </span>
                </span>

                {/* the marquee itself — pauses when you hover it */}
                <div className="ticker-track flex min-w-max group-hover:[animation-play-state:paused]">
                    <Track />
                    <Track ariaHidden />
                </div>

                {/* soft fade at both ends so text slides in and out, not pops */}
                <span className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-background to-transparent" />
                <span className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
            </div>
        </div>
    );
};

export default TickerBar;
