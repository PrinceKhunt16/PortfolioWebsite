import React from 'react';

const ExperiencePage = () => {
    return (
        <div className="p-4 md:p-10 text-gray-800">
            <h1 className="text-4xl font-bold text-center">🧗🏻‍♂️ My Experience</h1>
            <div className="mt-6 text-xl">
                <div className="bg-white shadow-md p-6 mb-6">
                    <h2 className="text-2xl font-semibold">Generative AI Intern</h2>
                    <p className="text-gray-700 mt-1 font-medium">
                        <a
                            href="https://www.confedo-ai.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Confedo AI
                        </a> • Pune, Maharastra, India • Remote
                    </p>
                    <p className="text-lg text-gray-500 mt-1">June 2025 – Present (Ongoing)</p>
                    <ul className="text-lg list-disc list-inside mt-4 text-gray-600 space-y-1">
                        <li>I've pursued this internship during my 5th semester to deepen my practical skills.</li>
                    </ul>
                </div>
                <div className="bg-white shadow-md p-6 mb-6">
                    <h2 className="text-2xl font-semibold">Web Developer Intern</h2>
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
                    <p className="text-lg text-gray-500 mt-1">Mar 2023 – June 2023 (3 months)</p>
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