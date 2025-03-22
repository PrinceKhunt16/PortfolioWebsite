import Image from 'next/image';
import React from 'react';

const projects = [
    {
        title: "Job Genie - One click job search tool",
        projectImage: "./projects/project-1.png",
        description: "Job Genie use an intelligent job search agent using CrewAI to automate the process of finding job listings on company career pages. Users select a interested companies URL and a list of job roles they're interested in. The agent crawls the page, extracts relevant job details, and matches them with the user's preferences. The results are returned via a FastAPI endpoint, helping users quickly discover and apply to relevant job openings.",
        techstack: ["CrewAI", "FastAPI", "Next.js", "MongoDB"],
        links: [
            {
                title: "GitHub",
                url: "https://github.com/PrinceKhunt16/Job-Genie-AI-Next-FastAPI"
            }
        ]
    },
    {
        title: "Linkedin Chat Assistant - Chrome Extension",
        projectImage: "./projects/project-2.png",
        description: "LinkedIn Chat Assistant Extension is a productivity tool designed to enhance your LinkedIn messaging experience. It provides AI-generated responses in real-time, helping you craft messages more efficiently while you interact with your LinkedIn contacts. The extension simplifies your communication and saves time.",
        techstack: ["GroqCloudAPI", "Next.js"],
        links: [
            {
                title: "GitHub",
                url: "https://github.com/PrinceKhunt16/Linkedin-Chat-Assistant-Chrome-Extension"
            }
        ]
    },
    {
        title: "Chat to Order - Order food through chat",
        projectImage: "./projects/project-3.png",
        description: "Chat to Order is an AI-powered web application that allows users to order food through a conversational interface. Leveraging BERT for intent detection and spaCy for Named Entity Recognition (NER), the chatbot intelligently understands user queries, extracts food items, and processes orders. Built with React, Flask, and MongoDB, this project offers a seamless and interactive food ordering experience.",
        techstack: ["NLP", "Langchain", "MERN", "Huggingface", "BERT", "NER", "Spacy"],
        links: [
            {
                title: "GitHub",
                url: "https://github.com/PrinceKhunt16/Chat-to-Order-GenAI-NLP-Flask-React"
            }
        ]
    },
    {
        title: "Healthcare AI - One click job search tool",
        projectImage: "./projects/project-4.png",
        description: "Healthcare AI is a web application designed to improve healthcare interactions by integrating AI-powered features. It offers role-based interfaces for patients and doctors, medical report summarization, a chatbot for health-related queries, personalized YouTube video recommendations, real-time medical news, and an appointment management system.",
        techstack: ["RAG", "Langchain", "Flask", "React.js"],
        links: [
            {
                title: "GitHub",
                url: "https://github.com/PrinceKhunt16/Healthcare-AI-Langchain-FAISS-Database-Olama-Grok-React.js-Flask"
            }
        ]
    },
    {
        title: "Self Drive Car - Computer Vision",
        projectImage: "./projects/project-5.png",
        description: "I embarked on my journey into Computer Vision by building a Self-Drive Car project. The challenge involved mastering essential tasks like road detection, lane segmentation, and steering angle prediction. I merged multiple datasets, trained three models, and developed a user interface using OpenCV to simulate real-time driving. The project solidified my understanding of deep learning and computer vision.",
        techstack: ["YOLO", "OpenCV", "Python", "Computer Vision", "Deep Learning"],
        links: [
            {
                title: "GitHub",
                url: "https://github.com/PrinceKhunt16/Self-Drive-Car-Computer-Vision-YOLOv11"
            }
        ]
    },
    {
        title: "Revise in short - AI powered quiz etc. generator",
        projectImage: "./projects/project-6.png",
        description: "Developed an AI-powered quiz, summary generator tailored for students and teachers. This tool automates the creation of personalized quizzes and concise summaries, making it easier for teachers to assess knowledge and for students to review and learn more effectively. By leveraging AI, it enhances the learning experience, saving time and boosting productivity for both educators and learners.",
        techstack: ["Langchain", "FastAPI", "Next.js"],
        links: []
    }
];

const ProjectsPage = () => {
    return (
        <div className="p-10 text-gray-800">
            <h1 className="text-4xl font-bold text-center">My Projects</h1>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-100 to-gray-400/50 p-6 border-b border-r border-gray-300">
                        <div className="flex flex-col gap-2">
                            <div className="relative w-full">
                                <Image
                                    width={500}
                                    height={500}
                                    src={project.projectImage}
                                    alt={project.title}
                                    className="top-0 left-0 w-full"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                            <div>
                                {project.links.map((link, index) => (
                                    <a key={index} href={link.url} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                                        {link.title}
                                    </a>
                                ))}
                            </div>
                            <p className="text-gray-600">{project.description}</p>
                            <div>
                                <h4 className="font-semibold text-lg">Tech Stack:</h4>
                                <ul className="list-none flex gap-2 text-sm font-semibold text-gray-600">
                                    {project.techstack.map((tech, index) => (
                                        <li key={index} className='flex gap-2 items-center'>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default ProjectsPage;