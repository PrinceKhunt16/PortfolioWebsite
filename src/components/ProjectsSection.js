'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from './SectionTitle';

const projects = [
    {
        title: 'Job Genie - One click job search tool',
        projectImages: [
            './projects/1/ss1.png',
            './projects/1/ss2.png',
            './projects/1/ss3.png',
            './projects/1/ss4.png',
            './projects/1/ss5.png',
            './projects/1/ss6.png',
            './projects/1/ss7.png',
        ],
        descriptionPoints: [
            'Job Genie uses an intelligent job search agent powered by CrewAI to automate finding job listings on company career pages.',
            "Users select a company's URL and specify a list of job roles they are interested in.",
            'The agent crawls the selected career page and extracts relevant job details.',
        ],
        techstack: ['CrewAI', 'FastAPI', 'Next.js', 'MongoDB'],
        links: [
            { title: 'GitHub', url: 'https://github.com/PrinceKhunt16/Job-Genie-AI-Next-FastAPI' },
        ],
    },
    {
        title: 'Gmail AI Assistant - Chrome Extension',
        projectImages: [
            './projects/10/ss1.png',
            './projects/10/ss2.png',
            './projects/10/ss3.png',
            './projects/10/ss4.png',
        ],
        descriptionPoints: [
            'Gmail AI Assistant Extension is a productivity tool designed to enhance your mail writing experience.',
            'It provides AI-generated responses in real-time, helping you craft mails more efficiently.',
        ],
        techstack: ['GroqCloudAPI', 'Next.js'],
        links: [
            {
                title: 'GitHub',
                url: 'https://github.com/PrinceKhunt16/Gmail-AI-Assistant-Chrome-Extension',
            },
            {
                title: 'Download',
                url: 'https://chromewebstore.google.com/detail/gmail-ai-assistant/jibmoeefcmpaaiebbhdfocogbinlmkhg?',
            },
        ],
    },
    {
        title: 'LinkedIn Chat Assistant - Chrome Extension',
        projectImages: [
            './projects/2/ss1.png',
            './projects/2/ss2.jpeg',
            './projects/2/ss3.jpeg',
            './projects/2/ss4.jpeg',
            './projects/2/ss5.jpeg',
            './projects/2/ss6.jpeg',
        ],
        descriptionPoints: [
            'LinkedIn Chat Assistant Extension is a productivity tool designed to enhance your LinkedIn messaging experience.',
            'It provides AI-generated responses in real-time, helping you craft messages more efficiently.',
        ],
        techstack: ['GroqCloudAPI', 'Next.js'],
        links: [
            {
                title: 'GitHub',
                url: 'https://github.com/PrinceKhunt16/Linkedin-Chat-Assistant-Chrome-Extension',
            },
            {
                title: 'Download',
                url: 'https://chromewebstore.google.com/detail/linkedin-chat-assistant/lponolgdemijgndelchhnmnnhmdfblih',
            },
        ],
    },
    {
        title: 'Chat to Order - Order food through chat',
        projectImages: [
            './projects/3/ss1.png',
            './projects/3/ss2.png',
            './projects/3/ss3.png',
            './projects/3/ss4.png',
            './projects/3/ss5.png',
            './projects/3/ss6.png',
            './projects/3/ss7.png',
            './projects/3/ss8.png',
            './projects/3/ss9.png',
            './projects/3/ss10.png',
            './projects/3/ss11.png',
        ],
        descriptionPoints: [
            'Chat to Order is an AI-powered web application that allows users to order food through a conversational interface.',
            'The chatbot leverages BERT for intent detection and spaCy for NER to understand user queries and process orders.',
        ],
        techstack: ['NLP', 'Langchain', 'MERN', 'Huggingface', 'BERT', 'NER', 'Spacy'],
        links: [
            {
                title: 'GitHub',
                url: 'https://github.com/PrinceKhunt16/Chat-to-Order-GenAI-NLP-Flask-React',
            },
        ],
    },
    {
        title: 'Smart Kitchen Helper Chat Assistant',
        projectImages: ['./projects/9/ss1.png', './projects/9/ss2.png', './projects/9/ss3.png'],
        descriptionPoints: [
            'Developed a domain-specific chatbot using Agentic RAG and open-source LLMs to answer recipe-related queries.',
            'Integrated LangGraph, GroqCloud, FastAPI, and Streamlit to build an interactive cooking assistant.',
        ],
        techstack: ['LangGraph', 'RAG', 'GroqCloud'],
        links: [
            {
                title: 'GitHub',
                url: 'https://github.com/PrinceKhunt16/Smart-Kitchen-Helper-AgenticRAG',
            },
        ],
    },
    {
        title: 'NiceNote.ai - AI powered Notes maker',
        projectImages: [
            './projects/8/ss1.png',
            './projects/8/ss2.png',
            './projects/8/ss3.png',
            './projects/8/ss4.png',
            './projects/8/ss5.png',
            './projects/8/ss6.png',
        ],
        descriptionPoints: [
            'Upload PDFs and automatically extract content using PDF parsing.',
            'Generate intelligent notes from extracted text using LLM (Groq integration).',
            'Built using Next.js, Supabase, React Query, and TailwindCSS.',
        ],
        techstack: ['Next.js', 'Supabase', 'Shadcn'],
        links: [{ title: 'NiceNote.ai', url: 'https://nice-note-ai.vercel.app/' }],
    },
    {
        title: 'Self Drive Car - Computer Vision',
        projectImages: ['./projects/5/ss1.png'],
        descriptionPoints: [
            'Built a Self-Drive Car project mastering road detection, lane segmentation, and steering angle prediction.',
            'Merged multiple datasets, trained three models, and developed a UI using OpenCV to simulate real-time driving.',
        ],
        techstack: ['YOLO', 'OpenCV', 'Python', 'Computer Vision', 'Deep Learning'],
        links: [
            {
                title: 'GitHub',
                url: 'https://github.com/PrinceKhunt16/Self-Drive-Car-Computer-Vision-YOLOv11',
            },
            {
                title: 'Steering Angle Model',
                url: 'https://www.kaggle.com/code/princekhunt19/keras-model-steering-angle-prediction',
            },
            {
                title: 'Lane Segmentation',
                url: 'https://www.kaggle.com/code/princekhunt19/yolov11-road-lane-segmentation',
            },
            {
                title: 'Object Detection',
                url: 'https://www.kaggle.com/code/princekhunt19/yolov11-object-detection-road-visualization',
            },
        ],
    },
    {
        title: 'Revise in short - AI powered quiz generator',
        projectImages: ['./projects/6/ss1.png'],
        descriptionPoints: [
            'Developed an AI-powered quiz and summary generator tailored for students and teachers.',
            'Automates the creation of personalized quizzes and concise summaries for effective learning.',
        ],
        techstack: ['Langchain', 'FastAPI', 'Next.js'],
        links: [],
    },
    {
        title: 'Vehicles Insurance Prediction',
        projectImages: ['./projects/7/ss1.png'],
        descriptionPoints: [
            'End-to-end MLOps pipeline for vehicle insurance prediction, automating from data ingestion to deployment.',
            'Used MongoDB, DVC, MLflow, Docker, and AWS with automated CI/CD.',
        ],
        techstack: ['MLOps', 'AWS', 'Docker', 'CICD'],
        links: [
            {
                title: 'GitHub',
                url: 'https://github.com/PrinceKhunt16/Vehicle-Insuerance-MLOps-AWS',
            },
        ],
    },
    {
        title: 'Healthcare AI - AI powered healthcare platform',
        projectImages: [
            './projects/4/ss1.png',
            './projects/4/ss2.png',
            './projects/4/ss3.png',
            './projects/4/ss4.png',
            './projects/4/ss5.png',
            './projects/4/ss6.png',
            './projects/4/ss7.png',
            './projects/4/ss8.png',
            './projects/4/ss9.png',
            './projects/4/ss10.png',
        ],
        descriptionPoints: [
            'Healthcare AI is a web app integrating AI-powered features for patients and doctors.',
            'Features medical report summarization, health chatbot, YouTube recommendations, and appointment management.',
        ],
        techstack: ['RAG', 'Langchain', 'Flask', 'React.js'],
        links: [
            {
                title: 'GitHub',
                url: 'https://github.com/PrinceKhunt16/Healthcare-AI-Langchain-FAISS-Database-Olama-Grok-React.js-Flask',
            },
        ],
    },
];

const ProjectCard = ({ project, index }) => {
    const [mainImage, setMainImage] = useState(project.projectImages[0]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="bg-[var(--card-bg)] border border-white/5 overflow-hidden card-glow tilt-card group"
        >
            {/* Image */}
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="relative w-full" style={{ aspectRatio: '16 / 10' }}>
                    <Image
                        width={640}
                        height={400}
                        src={mainImage}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
                {/* Thumbnail strip */}
                {project.projectImages.length > 1 && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-2 flex gap-1 overflow-x-auto">
                        {project.projectImages.slice(0, 6).map((img, i) => (
                            <button
                                key={i}
                                onClick={() => setMainImage(img)}
                                className={`w-10 h-7 flex-shrink-0 overflow-hidden border transition-all ${
                                    mainImage === img
                                        ? 'border-[var(--accent-blue)]'
                                        : 'border-transparent opacity-60 hover:opacity-100'
                                }`}
                            >
                                <Image
                                    src={img}
                                    alt={`Thumb ${i + 1}`}
                                    width={40}
                                    height={28}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                        {project.projectImages.length > 6 && (
                            <span className="text-xs text-white/50 flex items-center px-1">
                                +{project.projectImages.length - 6}
                            </span>
                        )}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] font-subtitle mb-2">
                    {project.title}
                </h3>

                <ul className="text-sm text-[var(--text-muted)] space-y-1 mb-4">
                    {project.descriptionPoints.map((point, i) => (
                        <li key={i} className="leading-relaxed">
                            - {point}
                        </li>
                    ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techstack.map((tech, i) => (
                        <span
                            key={i}
                            className="text-xs px-2 py-1 bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] border border-[var(--accent-blue)]/20"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                {project.links.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                        {project.links.map((link, i) => (
                            <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-[var(--accent-blue)] hover:text-white transition-colors flex items-center gap-1"
                            >
                                {link.title} <span className="text-xs">↗</span>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <SectionTitle
                    title="Projects"
                    subtitle="A showcase of my work building AI-powered solutions"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
