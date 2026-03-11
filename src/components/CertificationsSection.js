'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from './SectionTitle';

const certifications = [
    {
        title: 'Fine Tune LLM with HF Transformers for NLP - KGPTalkie',
        issuedBy: 'Udemy',
        issuedDate: 'Feb 2025',
        credentialId: 'UC-af1b9210-16b9-4f77-af9b-0d975fd95d77',
        certificateImage: './certificates/certificate-1.jpg',
    },
    {
        title: 'DL for Computer Vision',
        issuedBy: 'CampusX',
        issuedDate: 'Dec 2024',
        credentialId: 'BQLQKV40',
        certificateImage: './certificates/certificate-2.jpg',
    },
    {
        title: 'ML Specialization',
        issuedBy: 'Coursera',
        issuedDate: 'Jun 2024',
        credentialId: 'F4CARM85U9L2',
        certificateImage: './certificates/certificate-8.jpg',
    },
    {
        title: 'ML Model in Production with FastAPI and Docker - KGPTalkie',
        issuedBy: 'Udemy',
        issuedDate: 'Jun 2025',
        credentialId: 'UC-d4798c51-bc7e-4843-88ff-006992781e8b',
        certificateImage: './certificates/certificate-11.jpg',
    },
    {
        title: 'NPTEL - Introduction to Machine Learning',
        issuedBy: 'NPTEL',
        issuedDate: 'Apr 2025',
        credentialId: 'NPTEL25CS46S355500068',
        certificateImage: './certificates/certificate-12.jpg',
    },
    {
        title: 'Build Apps with Gemini Pro',
        issuedBy: 'Udemy',
        issuedDate: 'Nov 2024',
        credentialId: 'UC-1e5f0bd4-020e-4e2f-895d-d75d6ba0aaab',
        certificateImage: './certificates/certificate-3.jpg',
    },
    {
        title: 'Complete Generative AI',
        issuedBy: 'Udemy',
        issuedDate: 'Nov 2024',
        credentialId: 'UC-97f6477d-5f17-4383-bb52-3bc092388747',
        certificateImage: './certificates/certificate-4.jpg',
    },
    {
        title: 'Complete ML, DL and NLP Bootcamp',
        issuedBy: 'Udemy',
        issuedDate: 'Nov 2024',
        credentialId: 'UC-f4080a30-7898-4423-9246-e35c4c806fc7',
        certificateImage: './certificates/certificate-5.jpg',
    },
    {
        title: 'Introduction to NoSQL databases',
        issuedBy: 'Infosys Springboard',
        issuedDate: 'Mar 2025',
        credentialId: 'N/A',
        certificateImage: './certificates/certificate-10.jpg',
    },
    {
        title: 'SQL (Basic)',
        issuedBy: 'HackerRank',
        issuedDate: 'Aug 2024',
        credentialId: '863681e10826',
        certificateImage: './certificates/certificate-6.jpg',
    },
    {
        title: 'SQL (Intermediate)',
        issuedBy: 'HackerRank',
        issuedDate: 'Aug 2024',
        credentialId: 'c443910f32e8',
        certificateImage: './certificates/certificate-7.jpg',
    },
    {
        title: 'New India Vibrant Hackathon 2023',
        issuedBy: 'SSIP Gujarat',
        issuedDate: 'Nov 2023',
        credentialId: 'N/A',
        certificateImage: './certificates/certificate-9.jpg',
    },
];

const CertificationsSection = () => {
    return (
        <section id="certifications" className="py-24 px-4 bg-[var(--bg-secondary)]">
            <div className="max-w-6xl mx-auto">
                <SectionTitle
                    title="Certifications"
                    subtitle="Continuous learning and professional development"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="bg-[var(--card-bg)] border border-white/5 overflow-hidden card-hover group"
                        >
                            <div
                                className="relative overflow-hidden"
                                style={{ paddingBottom: '75%' }}
                            >
                                <Image
                                    width={500}
                                    height={375}
                                    src={cert.certificateImage}
                                    alt={cert.title}
                                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-sm font-semibold text-[var(--text-primary)] font-subtitle mb-2 leading-tight">
                                    {cert.title}
                                </h3>
                                <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                                    <span>{cert.issuedBy}</span>
                                    <span>{cert.issuedDate}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationsSection;
