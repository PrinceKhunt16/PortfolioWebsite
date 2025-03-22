import React from 'react';

const ResumePage = () => {
    return (
        <div className="p-10 text-gray-800">
            <h1 className="text-4xl font-bold mb-6">📄 My Resume</h1>
            <div className="border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden">
                <iframe 
                    src="/resume.pdf" 
                    title="Resume"
                    className="w-full h-[900px]" 
                    frameBorder="0"
                />
            </div>
        </div>
    );
};

export default ResumePage;