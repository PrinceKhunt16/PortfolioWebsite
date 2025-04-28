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
        descriptionPoints: [
            "Job Genie uses an intelligent job search agent powered by CrewAI to automate finding job listings on company career pages.",
            "Users select a company's URL and specify a list of job roles they are interested in.",
            "The agent crawls the selected career page and extracts relevant job details.",
            "It matches the extracted jobs with the user's preferences.",
            "The matched results are returned via a FastAPI endpoint.",
            "This helps users quickly discover and apply to relevant job openings."
        ],
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
        "descriptionPoints": [
            "LinkedIn Chat Assistant Extension is a productivity tool designed to enhance your LinkedIn messaging experience.",
            "It provides AI-generated responses in real-time, helping you craft messages more efficiently while interacting with your LinkedIn contacts.",
            "The extension simplifies your communication and saves time."
        ],
        techstack: ["GroqCloudAPI", "Next.js"],
        links: [
            {
                title: "GitHub",
                url: "https://github.com/PrinceKhunt16/Linkedin-Chat-Assistant-Chrome-Extension"
            },
            {
                title: "Download",
                url: "https://chromewebstore.google.com/detail/linkedin-chat-assistant/lponolgdemijgndelchhnmnnhmdfblih"
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
        "descriptionPoints": [
            "Chat to Order is an AI-powered web application that allows users to order food through a conversational interface.",
            "The chatbot leverages BERT for intent detection and spaCy for Named Entity Recognition (NER) to intelligently understand user queries, extract food items, and process orders.",
            "Built with React, Flask, and MongoDB, this project offers a seamless and interactive food ordering experience."
        ],
        techstack: ["NLP", "Langchain", "MERN", "Huggingface", "BERT", "NER", "Spacy"],
        links: [
            {
                title: "GitHub",
                url: "https://github.com/PrinceKhunt16/Chat-to-Order-GenAI-NLP-Flask-React"
            }
        ]
    },
    {
        title: "NiceNote.ai - AI powered Notes maker",
        projectImages: [
            "./projects/8/ss1.png",
            "./projects/8/ss2.png",
            "./projects/8/ss3.png",
            "./projects/8/ss4.png",
            "./projects/8/ss5.png",
            "./projects/8/ss6.png",
        ],
        "descriptionPoints": [
            "Upload PDFs and automatically extract content using PDF parsing.",
            "Generate intelligent notes from extracted text using LLM (Groq integration).",
            "Add custom titles and tags to your notes for better organization.",
            "View and manage all your notes with edit and delete functionality.",
            "Built using Next.js, Supabase, React Query, and TailwindCSS.",
            "Authenticated with Supabase to securely link notes to users.",
            "Hosted live at: https://nice-note-ai.vercel.app/",
        ],
        techstack: ["Next.js", "Supabase", "Shadcn"],
        links: [
            {
                title: "NiceNote.ai",
                url: "https://nice-note-ai.vercel.app/"
            }
        ]
    },
    {
        title: "Self Drive Car - Computer Vision",
        projectImages: [
            "./projects/5/ss1.png",
        ],
        "descriptionPoints": [
            "I embarked on my journey into Computer Vision by building a Self-Drive Car project.",
            "The challenge involved mastering essential tasks like road detection, lane segmentation, and steering angle prediction.",
            "I merged multiple datasets, trained three models, and developed a user interface using OpenCV to simulate real-time driving.",
            "The project solidified my understanding of deep learning and computer vision."
        ],
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
        "descriptionPoints": [
            "Developed an AI-powered quiz and summary generator tailored for students and teachers.",
            "This tool automates the creation of personalized quizzes and concise summaries, making it easier for teachers to assess knowledge and for students to review and learn more effectively.",
            "By leveraging AI, it enhances the learning experience, saving time and boosting productivity for both educators and learners.",
            "GitHub link is not available because this project is private."
        ],
        techstack: ["Langchain", "FastAPI", "Next.js"],
        links: []
    },
    {
        title: "Vehicles Insurance Prediction",
        projectImages: [
            "./projects/7/ss1.png",
        ],
        "descriptionPoints": [
            "Developed an end-to-end MLOps pipeline for vehicle insurance prediction, automating the workflow from data ingestion and preprocessing to model deployment.",
            "Leveraged MongoDB for efficient data handling and DVC for version control to ensure reproducibility and scalability.",
            "Integrated MLflow for experiment tracking and used Docker containers to package the model for consistent deployment.",
            "Deployed the solution on AWS infrastructure with automated CI/CD workflows for seamless updates.",
            "Enabled scalable, low-latency insurance risk predictions while significantly reducing manual intervention and improving model traceability."
        ],
        techstack: ["MLOps", "AWS", "Docker", "CICD"],
        links: [
            {
                title: "GitHub",
                url: "https://github.com/PrinceKhunt16/Vehicle-Insuerance-MLOps-AWS"
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
        "descriptionPoints": [
            "Healthcare AI is a web application designed to improve healthcare interactions by integrating AI-powered features.",
            "It offers role-based interfaces for patients and doctors, enabling tailored experiences for each user group.",
            "The application provides medical report summarization, helping users quickly understand complex health information.",
            "A chatbot is available for health-related queries, offering instant support and guidance using AI-driven responses.",
            "Users receive personalized YouTube video recommendations and real-time medical news to stay informed and engaged.",
            "An appointment management system streamlines scheduling and enhances the overall patient and doctor experience."
        ],
        techstack: ["RAG", "Langchain", "Flask", "React.js"],
        links: [
            {
                title: "GitHub",
                url: "https://github.com/PrinceKhunt16/Healthcare-AI-Langchain-FAISS-Database-Olama-Grok-React.js-Flask"
            }
        ]
    },
];

const ProjectsPage = () => {
    return (
        <div className="p-4 md:p-10 text-gray-800">
            <h1 className="text-4xl font-bold text-center">💻 My Projects</h1>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;