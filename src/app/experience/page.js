import React from 'react';

const ExperiencePage = () => {
    return (
        <div className="p-10 text-gray-800">
            <h1 className="text-4xl font-bold text-center">🧗🏻‍♂️ My Experience</h1>
            <div className="mt-6 text-lg">
                <p>
                    I'm currently in the process of kickstarting my career and am actively looking for internship opportunities in the <strong>AI domain</strong>. 
                    My passion lies in areas such as <strong>Machine Learning, Deep Learning, Natural Language Processing, and Computer Vision</strong>, 
                    and I'm eager to apply my skills to real-world projects.
                </p>
                <p className="mt-4">
                    If you're looking for a driven and enthusiastic individual with a strong foundation in AI, I would love to connect and explore internship opportunities.
                </p>
                <div className="mt-6 flex justify-center">
                    <a 
                        href="mailto:princekhunt4105@gmail.com"
                        className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4"
                    >
                        📩 Get in Touch
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ExperiencePage;