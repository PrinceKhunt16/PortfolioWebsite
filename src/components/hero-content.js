'use client';

import Image from 'next/image';
import { PiArrowRight, PiDownloadSimple } from 'react-icons/pi';
import { ClipButton, ClipOutlineButton } from './ui/buttons';
import ClipCard from './ui/clip-card';

const HeroContent = () => {
    return (
        <section
            id="home"
            className="hero-aurora grain relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-32 pb-16 sm:px-6 lg:px-8"
        >
            {/* long sweeping diagonals */}
            <div className="landing-rays pointer-events-none absolute inset-0" />

            {/* drifting colour blobs for extra life */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="ld-aurora-1 absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-tint-1/30 blur-3xl dark:bg-tint-1/40" />
                <div className="ld-aurora-2 absolute -top-10 right-1/4 h-80 w-80 rounded-full bg-tint-2/25 blur-3xl dark:bg-tint-2/35" />
                <div className="ld-drift absolute bottom-0 left-1/2 h-72 w-[28rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl dark:bg-primary/12" />
            </div>

            <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
                {/* avatar in a cut-corner frame */}
                <ClipCard
                    border="border-accent-clip"
                    outerClassName="ld-float mt-8 [--notch:16px] shadow-[0_30px_80px_-40px_var(--shadow-tint)]"
                    className="bg-card [--notch:16px]"
                >
                    <Image
                        width={150}
                        height={150}
                        src="./prince.png"
                        alt="Prince Khunt"
                        className="font-caprasimo size-[120px] object-cover sm:size-[140px]"
                        priority
                    />
                </ClipCard>

                {/* name */}
                <div className="headline-glow relative mt-8">
                    <h1 className="font-caprasimo text-[2.6rem] leading-[1.08] text-balance text-foreground sm:text-6xl lg:text-7xl">
                        Prince Khunt
                    </h1>
                </div>

                {/* tagline */}
                <p className="font-geom mt-5 max-w-2xl text-lg font-medium text-balance text-foreground/80 sm:text-xl">
                    I build{' '}
                    <span className="text-gradient-accent">
                        AI-powered products
                    </span>{' '}
                    — from ML &amp; deep learning to GenAI agents and full-stack MERN.
                </p>

                {/* sub-tagline */}
                <p className="font-geom mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                    2x Intern · Kaggle 2x Expert · 1x Hackathon Winner. Currently turning
                    data-driven ideas into real, shipped applications.
                </p>

                {/* CTAs */}
                <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
                    <ClipButton
                        href="#projects"
                        onClick={(e) => {
                            e.preventDefault();
                            document
                                .querySelector('#projects')
                                ?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        innerClassName="px-7 py-3.5"
                    >
                        View my work
                        <PiArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </ClipButton>
                    <ClipOutlineButton
                        href="/resume.pdf"
                        download
                        innerClassName="px-7 py-3.5"
                    >
                        <PiDownloadSimple className="size-4" />
                        Download Resume
                    </ClipOutlineButton>
                </div>
            </div>
        </section>
    );
};

export default HeroContent;
