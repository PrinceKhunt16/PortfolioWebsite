"use client";

import React from 'react';

const ExperiencePage = () => {
    const handleActiveMonth = (startMonth, startYear) => {
        // here we calculate the number of months from startMonth/startYear to current month/year
        const currentDate = new Date();
        const startDate = new Date(startYear, startMonth - 1); // Months are 0-indexed
        
        const yearsDifference = currentDate.getFullYear() - startDate.getFullYear();
        const monthsDifference = currentDate.getMonth() - startDate.getMonth();
        return yearsDifference * 12 + monthsDifference;
    }

    return (
        <div className="p-4 md:p-10 text-gray-800">
            <h1 className="text-4xl font-bold text-center">🧗🏻‍♂️ My Experience</h1>
            <div className="mt-6 text-xl">
                <div className="bg-white mb-8 p-2">
                    <h2 className="text-2xl">Junior AI Developer</h2>
                    <p className="text-gray-700 mt-1 font-medium">
                        <a
                            href="https://www.verticalsystems.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Vertical Systems
                        </a> • Vancouver, British Columbia, Canada • Remote
                    </p>
                    <p className="text-lg text-gray-500 mt-1">Nov 2025 – present ({handleActiveMonth(10, 2025)} months)</p>
                    <ul className="text-lg list-disc list-inside mt-4 text-gray-600 space-y-1">
                        <li>I'm excited to have kicked off my full-time career in my 6th semester.</li>
                    </ul>
                </div> 
                <div className="bg-white mb-8 p-2">
                    <h2 className="text-2xl">Generative AI Intern</h2>
                    <p className="text-gray-700 mt-1 font-medium">
                        <a
                            href="https://evntro.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Evntro
                        </a> • Pune, Maharastra, India • Remote
                    </p>
                    <p className="text-lg text-gray-500 mt-1">June 2025 – July 2025 (2 months)</p>
                    <ul className="text-lg list-disc list-inside mt-4 text-gray-600 space-y-1">
                        <li>I've pursued this internship during my 5th semester to deepen my skills. </li>
                        <li>Contributed to the LLMOps evaluation phase of AI applications by identifying feature gap across competitors.</li>
                    </ul>
                </div> 
                <div className="bg-white mb-8 p-2">
                    <h2 className="text-2xl">Web Developer Intern</h2>
                    <p className="text-gray-700 mt-1 font-medium">
                        <a
                            href="https://www.raininfotech.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Rain Infotech
                        </a> • Surat, Gujarat, India • Offsite
                    </p>
                    <p className="text-lg text-gray-500 mt-1">March 2023 – June 2023 (3 months)</p>
                    <ul className="text-lg list-disc list-inside mt-4 text-gray-600 space-y-1">
                        <li>Developed web applications using Next.js and modern frontend technologies.</li>
                        <li>Learned the fundamentals of web architecture and RESTful API integration.</li>
                        <li>Completed this internship just after finishing 12th grade, gaining early hands-on experience.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ExperiencePage;