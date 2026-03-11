'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from './SectionTitle';

const EducationSection = () => {
    return (
        <section className="py-24 px-4 bg-[var(--bg-secondary)]">
            <div className="max-w-6xl mx-auto">
                <SectionTitle title="Education" subtitle="My academic journey" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="relative pl-8 border-l-2 border-[var(--accent-blue)]/30">
                        <div
                            className="absolute left-[-9px] top-0 w-4 h-4 bg-[var(--accent-blue)]"
                            style={{ borderRadius: '50%' }}
                        />

                        <div className="bg-[var(--card-bg)] p-6 border border-white/5 card-hover">
                            <div className="flex items-start gap-4">
                                <Image
                                    width={56}
                                    height={56}
                                    src="./marwadiuniversity.jpeg"
                                    alt="Marwadi University Logo"
                                    className="w-14 h-14 object-cover border border-white/10"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold text-[var(--text-primary)] font-subtitle">
                                        Marwadi University
                                    </h3>
                                    <p className="text-[var(--accent-blue)] mt-1">
                                        Bachelor&apos;s of Science in <strong>Data Science</strong>
                                    </p>
                                    <p className="text-[var(--text-muted)] text-sm mt-1">
                                        July 2023 &ndash; March 2026
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default EducationSection;
