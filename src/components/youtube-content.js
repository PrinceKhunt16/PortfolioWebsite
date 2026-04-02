'use client';

import { motion } from 'framer-motion';
import ContentTitle from './content-title';

const videos = [
    {
        name: 'LinkedIn Chat Assistant Extension / Demo / Features Explained / prince khunt',
        url: 'https://www.youtube.com/embed/k2ERRWbyfc8',
        thumbnail: 'https://img.youtube.com/vi/k2ERRWbyfc8/maxresdefault.jpg',
        watchUrl: 'https://www.youtube.com/watch?v=k2ERRWbyfc8',
    },
    {
        name: 'AI Code Agent with Gemini / Demo / prince khunt',
        url: 'https://www.youtube.com/embed/rSYPTN6u0XY',
        thumbnail: 'https://img.youtube.com/vi/rSYPTN6u0XY/maxresdefault.jpg',
        watchUrl: 'https://www.youtube.com/watch?v=rSYPTN6u0XY',
    },
];

const YouTubeContent = () => {
    return (
        <section id="youtube" className="py-24 px-4 bg-[var(--bg-secondary)]">
            <div className="max-w-6xl mx-auto">
                <ContentTitle title="YouTube" subtitle="Video demos and tutorials" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {videos.map((video, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-[var(--card-bg)] border border-white/5 overflow-hidden card-hover group"
                        >
                            <div className="relative" style={{ aspectRatio: '16 / 9' }}>
                                <iframe
                                    src={video.url}
                                    title={video.name}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="p-4 flex items-center justify-between gap-4">
                                <p className="text-sm text-[var(--text-primary)] line-clamp-2">
                                    {video.name}
                                </p>
                                <a
                                    href={video.watchUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-shrink-0 px-4 py-2 text-xs bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 transition-colors"
                                >
                                    Watch
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default YouTubeContent;
