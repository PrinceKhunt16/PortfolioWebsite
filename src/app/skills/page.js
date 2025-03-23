import React from 'react';
import { MdOutlineStarPurple500 } from "react-icons/md";

const SkillsPage = () => {
    const categories = [
        {
            title: "Programming Languages",
            skills: ["C", "C++", "JavaScript", "Python"]
        },
        {
            title: "Databases & Tools",
            skills: ["MongoDB", "SQL", "Github", "Docker"]
        },
        {
            title: "Full-Stack Development",
            skills: ["React", "Node.js", "Express", "RESTful APIs", "Flask", "Next.js"]
        },
        {
            title: "Data Science & AI",
            skills: ["Machine Learning", "Deep Learning", "Generative AI", "Natural Language Processing"]
        },
        {
            title: "Libraries & Frameworks",
            skills: ["Numpy", "Pandas", "Matplotlib / Seaborn", "Scikit-learn", "TensorFlow", "Keras", "PyTorch", "LangChain"]
        },
        {
            title: "Mathematics",
            skills: ["Linear Algebra", "Calculus", "Probability", "Statistics"]
        },
        {
            title: "Computer Vision",
            skills: ["Computer Vision"]
        }
    ];

    return (
        <div className="p-10 text-gray-800">
            <h1 className="text-4xl font-bold text-center">🦾 My Skills</h1>

            {categories.map((category, index) => (
                <div key={index} className="mt-6">
                    <h2 className="text-2xl font-semibold text-gray-700">{category.title}</h2>
                    <ul className="list-none pl-6 mt-2">
                        {category.skills.map((skill, idx) => (
                            <li key={idx} className="text-lg flex gap-2 items-center"><MdOutlineStarPurple500 fontSize={14}/>{skill}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default SkillsPage;