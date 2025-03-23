"use client"

import ProjectCard from '@/components/ProjectCard';
import Image from 'next/image';
import React from 'react';

const projects = [
    {
        title: "Job Genie - One click job search tool",
        projectImages: [
            "./projects/1/ss1.png",
            "./projects/1/ss2.png",
            "./projects/1/ss3.png",
            "./projects/1/ss4.png",
            "./projects/1/ss5.png",
            "./projects/1/ss6.png",
            "./projects/1/ss7.png",
        ],
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
        title: "LinkedIn Chat Assistant - Chrome Extension",
        projectImages: [
            "./projects/2/ss1.png",
            "./projects/2/ss2.jpeg",
            "./projects/2/ss3.jpeg",
            "./projects/2/ss4.jpeg",
            "./projects/2/ss5.jpeg",
            "./projects/2/ss6.jpeg",
        ],
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
        projectImages: [
            "./projects/3/ss1.png",
            "./projects/3/ss2.png",
            "./projects/3/ss3.png",
            "./projects/3/ss4.png",
            "./projects/3/ss5.png",
            "./projects/3/ss6.png",
            "./projects/3/ss7.png",
            "./projects/3/ss8.png",
            "./projects/3/ss9.png",
            "./projects/3/ss10.png",
            "./projects/3/ss11.png",
        ],
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
        title: "Healthcare AI - AI powered healthcare platform",
        projectImages: [
            "./projects/4/ss1.png",
            "./projects/4/ss2.png",
            "./projects/4/ss3.png",
            "./projects/4/ss4.png",
            "./projects/4/ss5.png",
            "./projects/4/ss6.png",
            "./projects/4/ss7.png",
            "./projects/4/ss8.png",
            "./projects/4/ss9.png",
            "./projects/4/ss10.png",
        ],
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
        projectImages: [
            "./projects/5/ss1.png",
        ],
        description: "I embarked on my journey into Computer Vision by building a Self-Drive Car project. The challenge involved mastering essential tasks like road detection, lane segmentation, and steering angle prediction. I merged multiple datasets, trained three models, and developed a user interface using OpenCV to simulate real-time driving. The project solidified my understanding of deep learning and computer vision.",
        techstack: ["YOLO", "OpenCV", "Python", "Computer Vision", "Deep Learning"],
        links: [
            {
                title: "GitHub",
                url: "https://github.com/PrinceKhunt16/Self-Drive-Car-Computer-Vision-YOLOv11"
            },
            {
                title: "Steering Angle Prediction Model",
                url: "https://www.kaggle.com/code/princekhunt19/keras-model-steering-angle-prediction"
            },
            {
                title: "YOLOv11 Road Lane Segmentation",
                url: "https://www.kaggle.com/code/princekhunt19/yolov11-road-lane-segmentation"
            },
            {
                title: "YOLOv11 Object Detection for Road Visualization",
                url: "https://www.kaggle.com/code/princekhunt19/yolov11-object-detection-road-visualization"
            }
        ]
    },
    {
        title: "Revise in short - AI powered quiz etc. generator",
        projectImages: [
            "./projects/6/ss1.png",
        ],
        description: "Developed an AI-powered quiz, summary generator tailored for students and teachers. This tool automates the creation of personalized quizzes and concise summaries, making it easier for teachers to assess knowledge and for students to review and learn more effectively. By leveraging AI, it enhances the learning experience, saving time and boosting productivity for both educators and learners. GitHub link is not available because this project is private.",
        techstack: ["Langchain", "FastAPI", "Next.js"],
        links: []
    }
];

const ProjectsPage = () => {
    return (
        <div className="p-10 text-gray-800">
            <h1 className="text-4xl font-bold text-center">🍜 My Projects</h1>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;