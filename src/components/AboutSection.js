'use client';

import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const AboutSection = () => {
    const highlights = [
        { icon: '🎓', text: 'Graduate in B.Sc Data Science' },
        { icon: '🤖', text: 'AI / ML focused developer' },
        { icon: '💻', text: 'MERN + GenAI full-stack builder' },
        { icon: '🚀', text: 'Building real-world AI projects' },
        { icon: '🏆', text: 'Kaggle 2x Expert & SSIP Winner' },
    ];

    return (
        <section id="about" className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <SectionTitle title="About Me" subtitle="Get to know me better" />

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left - text */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
                            Hello! I&apos;m{' '}
                            <span className="text-[var(--accent-blue)] font-medium">
                                Prince Khunt
                            </span>
                            , a BSc Data Science Graduate passionate about{' '}
                            <strong className="text-[var(--text-primary)]">Data Science</strong> and{' '}
                            <strong className="text-[var(--text-primary)]">AI</strong>.
                        </p>
                        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
                            I&apos;m skilled in{' '}
                            <strong className="text-[var(--text-primary)]">
                                ML, DL, GenAI, MLOps, and the MERN stack
                            </strong>
                            . I enjoy solving real-world problems using data-driven insights and
                            building full-stack applications.
                        </p>
                        <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-8">
                            Currently seeking an{' '}
                            <strong className="text-[var(--text-primary)]">
                                AI/ML Engineer role
                            </strong>{' '}
                            to gain industry experience and contribute to impactful projects.
                        </p>

                        <div className="flex gap-4">
                            <a
                                href="https://www.linkedin.com/in/prince-khunt-linked-in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-[var(--accent-blue)] hover:text-white transition-colors border border-[var(--accent-blue)]/30 px-4 py-2 hover:bg-[var(--accent-blue)]/10"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/PrinceKhunt16/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-[var(--text-muted)] hover:text-white transition-colors border border-[var(--text-muted)]/30 px-4 py-2 hover:bg-white/5"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://www.kaggle.com/princekhunt19"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-[var(--accent-yellow)] hover:text-white transition-colors border border-[var(--accent-yellow)]/30 px-4 py-2 hover:bg-[var(--accent-yellow)]/10"
                            >
                                Kaggle
                            </a>
                        </div>
                    </motion.div>

                    {/* Right - highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.7 }}
                        className="space-y-4"
                    >
                        {highlights.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex items-center gap-4 bg-[var(--card-bg)] p-4 border border-white/5 card-hover"
                            >
                                <span className="text-2xl">{item.icon}</span>
                                <span className="text-[var(--text-primary)]">{item.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
