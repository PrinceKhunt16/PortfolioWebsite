'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'YouTube', href: '#youtube' },
    { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e, href) => {
        e.preventDefault();
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'glass shadow-lg' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a
                        href="#home"
                        onClick={(e) => handleClick(e, '#home')}
                        className="text-xl font-bold gradient-text font-title"
                    >
                        Prince Khunt
                    </a>

                    {/* Desktop nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => handleClick(e, item.href)}
                                className="px-3 py-2 text-sm text-[var(--text-muted)] hover:text-white transition-colors duration-200"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden relative w-8 h-8"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`absolute left-0 top-1/2 w-7 h-1 bg-[var(--text-primary)] transition-all duration-300 ${
                                mobileOpen ? 'rotate-45' : '-translate-y-2'
                            }`}
                        />

                        <span
                            className={`absolute left-0 top-1/2 w-7 h-1 bg-[var(--text-primary)] transition-all duration-300 ${
                                mobileOpen ? 'opacity-0' : ''
                            }`}
                        />

                        <span
                            className={`absolute left-0 top-1/2 w-7 h-1 bg-[var(--text-primary)] transition-all duration-300 ${
                                mobileOpen ? '-rotate-45' : 'translate-y-2'
                            }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden glass border-t border-white/5"
                    >
                        <div className="px-4 py-4 flex flex-col gap-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => handleClick(e, item.href)}
                                    className="px-3 py-2 text-[var(--text-muted)] hover:text-white transition-colors"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
