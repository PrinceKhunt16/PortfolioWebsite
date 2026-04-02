'use client';

import { motion } from 'framer-motion';
import ContentTitle from './content-title';
import { FaLinkedin, FaGithub, FaKaggle, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';

const socials = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/prince-khunt-linked-in/',
        icon: <FaLinkedin />,
        color: '#0A66C2',
    },
    {
        name: 'GitHub',
        url: 'https://github.com/PrinceKhunt16/',
        icon: <FaGithub />,
        color: '#E5E7EB',
    },
    {
        name: 'Kaggle',
        url: 'https://www.kaggle.com/princekhunt19',
        icon: <FaKaggle />,
        color: '#20BEFF',
    },
    {
        name: 'Twitter',
        url: 'https://x.com/princekhunt19',
        icon: <FaXTwitter />,
        color: '#E5E7EB',
    },
    {
        name: 'LeetCode',
        url: 'https://leetcode.com/u/PRINCEKHUNT/',
        icon: <SiLeetcode />,
        color: '#FFA116',
    },
    {
        name: 'YouTube',
        url: 'https://www.youtube.com/@princekhuntYT',
        icon: <FaYoutube />,
        color: '#FF0000',
    },
];

const ContactContent = () => {
    return (
        <section id="contact" className="py-24 px-4">
            <div className="max-w-4xl mx-auto">
                <ContentTitle
                    title="Get In Touch"
                    subtitle="Feel free to reach out or connect with me on any platform"
                />

                {/* Social links */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-16"
                >
                    {socials.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -4 }}
                            className="flex flex-col items-center gap-2 bg-[var(--card-bg)] border border-white/5 p-4 card-hover group text-center"
                        >
                            <span
                                className="text-2xl opacity-60 group-hover:opacity-100 transition-opacity"
                                style={{ color: social.color }}
                            >
                                {social.icon}
                            </span>
                            <span className="text-xs text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                                {social.name}
                            </span>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Contact form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-[var(--card-bg)] border border-white/5 p-8"
                >
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] font-subtitle mb-6 text-center">
                        Send a Message
                    </h3>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = new FormData(e.target);
                            const subject = encodeURIComponent(
                                data.get('subject') || 'Portfolio Contact',
                            );
                            const body = encodeURIComponent(
                                `Name: ${data.get('name')}\n\n${data.get('message')}`,
                            );
                            window.open(
                                `mailto:princekhunt1610@gmail.com?subject=${subject}&body=${body}`,
                                '_blank',
                            );
                        }}
                        className="space-y-4"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-white/10 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-blue)] focus:outline-none transition-colors text-sm"
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-white/10 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-blue)] focus:outline-none transition-colors text-sm"
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows={5}
                            required
                            className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-white/10 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-blue)] focus:outline-none transition-colors text-sm resize-none"
                        />
                        <div className="text-center">
                            <button
                                type="submit"
                                className="px-8 py-3 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white font-medium hover:opacity-90 transition-opacity text-sm tracking-wide"
                            >
                                SEND MESSAGE
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactContent;
