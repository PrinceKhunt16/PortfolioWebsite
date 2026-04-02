'use client';

import { motion } from 'framer-motion';
import ContentTitle from './content-title';
import { FaPython, FaReact, FaNodeJs, FaDocker, FaGithub, FaDatabase } from 'react-icons/fa';
import {
    SiTensorflow,
    SiPytorch,
    SiMongodb,
    SiNextdotjs,
    SiFlask,
    SiKeras,
    SiScikitlearn,
    SiNumpy,
    SiPandas,
    SiLangchain,
    SiOpencv,
} from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';
import { DiJavascript1 } from 'react-icons/di';
import { BsBraces } from 'react-icons/bs';
import { MdOutlineScience } from 'react-icons/md';

const skillCategories = [
    {
        title: 'AI / ML',
        color: 'var(--accent-blue)',
        skills: [
            { name: 'Machine Learning', icon: <MdOutlineScience /> },
            { name: 'Deep Learning', icon: <SiTensorflow /> },
            { name: 'Generative AI', icon: <BsBraces /> },
            { name: 'NLP', icon: <BsBraces /> },
            { name: 'Computer Vision', icon: <SiOpencv /> },
            { name: 'LangChain', icon: <SiLangchain /> },
            { name: 'LangGraph', icon: <BsBraces /> },
            { name: 'AI Agents / MCP Server', icon: <BsBraces /> },
        ],
    },
    {
        title: 'Libraries / Frameworks',
        color: 'var(--gradient-end)',
        skills: [
            { name: 'TensorFlow', icon: <SiTensorflow /> },
            { name: 'Keras', icon: <SiKeras /> },
            { name: 'PyTorch', icon: <SiPytorch /> },
            { name: 'Scikit-learn', icon: <SiScikitlearn /> },
            { name: 'NumPy', icon: <SiNumpy /> },
            { name: 'Pandas', icon: <SiPandas /> },
            { name: 'Matplotlib / Seaborn', icon: <MdOutlineScience /> },
        ],
    },
    {
        title: 'Full-Stack Development',
        color: '#10B981',
        skills: [
            { name: 'React', icon: <FaReact /> },
            { name: 'Next.js', icon: <SiNextdotjs /> },
            { name: 'Node.js', icon: <FaNodeJs /> },
            { name: 'Express', icon: <FaNodeJs /> },
            { name: 'Flask', icon: <SiFlask /> },
            { name: 'RESTful APIs', icon: <BsBraces /> },
        ],
    },
    {
        title: 'Programming & Tools',
        color: 'var(--accent-yellow)',
        skills: [
            { name: 'Python', icon: <FaPython /> },
            { name: 'JavaScript', icon: <DiJavascript1 /> },
            { name: 'C / C++', icon: <TbBrandCpp /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'SQL', icon: <FaDatabase /> },
            { name: 'Docker', icon: <FaDocker /> },
            { name: 'GitHub', icon: <FaGithub /> },
        ],
    },
    {
        title: 'Mathematics',
        color: '#F472B6',
        skills: [
            { name: 'Linear Algebra', icon: <MdOutlineScience /> },
            { name: 'Calculus', icon: <MdOutlineScience /> },
            { name: 'Probability', icon: <MdOutlineScience /> },
            { name: 'Statistics', icon: <MdOutlineScience /> },
        ],
    },
];

const SkillsContent = () => {
    return (
        <section id="skills" className="py-24 px-4 bg-[var(--bg-secondary)]">
            <div className="max-w-6xl mx-auto">
                <ContentTitle title="Skills" subtitle="Technologies and tools I work with" />

                <div className="space-y-12">
                    {skillCategories.map((category, catIdx) => (
                        <motion.div
                            key={catIdx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                        >
                            <h3
                                className="text-xl font-semibold mb-6 font-subtitle"
                                style={{ color: category.color }}
                            >
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                                {category.skills.map((skill, skillIdx) => (
                                    <motion.div
                                        key={skillIdx}
                                        whileHover={{ y: -4, scale: 1.02 }}
                                        className="bg-[var(--card-bg)] border border-white/5 p-4 flex items-center gap-3 card-hover group cursor-default"
                                    >
                                        <span
                                            className="text-xl opacity-60 group-hover:opacity-100 transition-opacity"
                                            style={{ color: category.color }}
                                        >
                                            {skill.icon}
                                        </span>
                                        <span className="text-sm text-[var(--text-primary)]">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsContent;
