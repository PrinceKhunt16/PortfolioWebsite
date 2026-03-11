'use client';

import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const experiences = [
    {
        role: 'AI Developer Intern',
        company: 'Vertical Systems',
        companyUrl: 'https://www.verticalsystems.io/',
        location: 'Vancouver, British Columbia, Canada • Remote',
        duration: 'Nov 2025 – Feb 2026 (4 months)',
        points: [
            'Completed this internship during my 6th semester.',
            'Spearheaded the end-to-end development of a Full Stack AI Solution, managing the lifecycle from initial design to deployment and implementing AI-powered automation to optimize task efficiency.',
        ],
    },
    {
        role: 'Web Developer Intern',
        company: 'Rain Infotech',
        companyUrl: 'https://www.raininfotech.com/',
        location: 'Surat, Gujarat, India • Offsite',
        duration: 'March 2023 – June 2023 (3 months)',
        points: [
            'Developed web applications using Next.js and modern frontend technologies.',
            'Mastered the MERN stack to deliver scalable web applications.',
            'Completed this internship just after finishing 12th grade, gaining early hands-on experience.',
        ],
    },
];

const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-4">
            <div className="max-w-4xl mx-auto">
                <SectionTitle title="Experience" subtitle="My professional journey" />

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent-blue)] via-[var(--gradient-end)] to-transparent" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="relative pl-12 md:pl-20"
                            >
                                {/* Timeline dot */}
                                <div
                                    className="absolute left-2 md:left-6 top-1 w-5 h-5 border-2 border-[var(--accent-blue)] bg-[var(--bg-primary)]"
                                    style={{ borderRadius: '50%' }}
                                >
                                    <div
                                        className="absolute inset-1 bg-[var(--accent-blue)]"
                                        style={{ borderRadius: '50%' }}
                                    />
                                </div>

                                <div className="bg-[var(--card-bg)] border border-white/5 p-6 card-hover">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                        <h3 className="text-xl font-semibold text-[var(--text-primary)] font-subtitle">
                                            {exp.role}
                                        </h3>
                                        <span className="text-sm text-[var(--text-muted)] whitespace-nowrap">
                                            {exp.duration}
                                        </span>
                                    </div>

                                    <p className="text-[var(--accent-blue)] mb-1">
                                        <a
                                            href={exp.companyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            {exp.company}
                                        </a>
                                    </p>
                                    <p className="text-sm text-[var(--text-muted)] mb-4">
                                        {exp.location}
                                    </p>

                                    <ul className="space-y-2">
                                        {exp.points.map((point, i) => (
                                            <li
                                                key={i}
                                                className="text-[var(--text-muted)] text-sm leading-relaxed flex gap-2"
                                            >
                                                <span className="text-[var(--accent-blue)] mt-1">
                                                    ▸
                                                </span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
