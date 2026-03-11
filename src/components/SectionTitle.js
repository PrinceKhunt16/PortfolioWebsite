'use client';

import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] font-title">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-3 text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
            <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]" />
        </motion.div>
    );
};

export default SectionTitle;
