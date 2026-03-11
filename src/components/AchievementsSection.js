'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from './SectionTitle';

const achievements = [
    {
        title: "Triumphant Victory at SSIP 2023: First Place in Clean and Green Tech with Gujarat CM's Special Prize!",
        image: './achivements/achivement-1.jpeg',
        highlights: ['🏆 1st Place', "🏛️ Gujarat CM's Special Prize", '🌿 Clean & Green Tech'],
    },
];

const AchievementsSection = () => {
    return (
        <section id="achievements" className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <SectionTitle title="Achievements" subtitle="Milestones and recognitions" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6 }}
                            className="bg-[var(--card-bg)] border border-white/5 overflow-hidden card-glow group"
                        >
                            <div
                                className="relative overflow-hidden"
                                style={{ paddingBottom: '75%' }}
                            >
                                <Image
                                    width={500}
                                    height={375}
                                    src={achievement.image}
                                    alt={achievement.title}
                                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-[var(--text-primary)] font-subtitle mb-4 leading-relaxed">
                                    {achievement.title}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {achievement.highlights.map((h, i) => (
                                        <span
                                            key={i}
                                            className="text-sm px-3 py-1 bg-[var(--accent-yellow)]/10 text-[var(--accent-yellow)] border border-[var(--accent-yellow)]/20"
                                        >
                                            {h}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Kaggle Expert highlight card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[var(--card-bg)] border border-white/5 p-6 card-glow flex flex-col justify-center"
                    >
                        <div className="text-center">
                            <div className="text-5xl mb-4">🏅</div>
                            <h3 className="text-2xl font-bold text-[var(--text-primary)] font-subtitle mb-2">
                                Kaggle 2x Expert
                            </h3>
                            <p className="text-[var(--text-muted)] mb-6">
                                Recognized as a Kaggle Expert in Notebooks and Datasets
                            </p>
                            <a
                                href="https://www.kaggle.com/princekhunt19"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-6 py-2 bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] border border-[var(--accent-blue)]/30 hover:bg-[var(--accent-blue)]/20 transition-colors text-sm"
                            >
                                View Kaggle Profile ↗
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;
