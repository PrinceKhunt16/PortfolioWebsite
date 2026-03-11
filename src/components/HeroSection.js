'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#111827] to-[#0B1120]" />

            {/* Floating decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--accent-blue)] opacity-5 blur-3xl animate-float" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--gradient-end)] opacity-5 blur-3xl animate-float-delayed" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] opacity-[0.03] blur-3xl" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <div className="relative inline-block mb-8">
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] blur-xl opacity-30" />
                        <Image
                            width={160}
                            height={160}
                            src="./prince.jpeg"
                            alt="Prince Khunt"
                            className="relative w-40 h-40 rounded-full object-cover border-2 border-[var(--accent-blue)]/30"
                            style={{ borderRadius: '9999px' }}
                        />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold font-title text-white mb-4"
                >
                    Prince Khunt
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-[var(--text-muted)] mb-3 font-subtitle"
                >
                    2x Intern (Web / AI) | ML | DL | GenAI | MERN
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-base md:text-lg text-[var(--text-muted)] mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    LOOKING FOR JOB (AI ROLE) || 2x Intern || ML || DL || GenAI || MERN || KAGGLE 2x
                    Expert || 1x Hackathon Winner
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        onClick={(e) => {
                            e.preventDefault();
                            document
                                .querySelector('#projects')
                                ?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-8 py-3 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white font-medium hover:opacity-90 transition-opacity text-sm tracking-wide"
                    >
                        VIEW PORTFOLIO
                    </a>
                    <a
                        href="/resume.pdf"
                        download
                        className="px-8 py-3 border border-[var(--text-muted)]/30 text-[var(--text-primary)] font-medium hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)] transition-colors text-sm tracking-wide"
                    >
                        DOWNLOAD RESUME
                    </a>
                </motion.div>

                {/* Scroll indicator */}
                {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-5 h-8 border border-[var(--text-muted)]/30 flex justify-center pt-1.5"
            style={{ borderRadius: "10px" }}
          >
            <div className="w-1 h-2 bg-[var(--accent-blue)]" style={{ borderRadius: "2px" }} />
          </motion.div>
        </motion.div> */}
            </div>
        </section>
    );
};

export default HeroSection;
