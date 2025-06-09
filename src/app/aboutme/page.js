import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
    return (
        <div className="p-4 md:p-10 text-gray-800">
            <div className="mb-10">
                <h1 className="text-4xl font-bold">👋 Hello, I'm <span className="text-gray-600">Prince Khunt!</span></h1>
                <p className="text-xl font-medium mt-4 leading-relaxed">
                    💡 3rd / Final year engineering student passionate about <strong>Data Science</strong> and <strong>AI</strong>. <br />
                    💻 Skilled in <strong>ML, DL, GenAI, MLOps, and the Full-Stack(MERN) stack</strong>. <br />
                    🚀 Actively seeking a <strong>Data Science internship</strong> to gain industry experience. <br />
                    🔥 Currently building <strong>AI-powered projects</strong> that solve real-world problems. <br />
                    🌟 I enjoy solving real-world problems using <strong>data-driven insights</strong> and building <strong>full-stack applications</strong>. <br />
                </p>
                <div className="mt-6 flex space-x-4">
                    <a href="https://www.linkedin.com/in/prince-khunt-linked-in/" target='_blank' className="text-blue-500 hover:text-blue-700">LinkedIn</a>
                    <a href="https://github.com/PrinceKhunt16/" target='_blank' className="text-gray-500 hover:text-gray-700">GitHub</a>
                </div>
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-4">🎓 Education</h2>
                <div className="flex space-x-4">
                    <Image
                        width={56}
                        height={56} 
                        src="./marwadiuniversity.jpeg" 
                        alt="Marwadi University Logo" 
                        className="w-14 h-14 pt-1 object-cover shadow-lg"
                    />
                    <div>
                        <h3 className="text-xl font-semibold">Marwadi University</h3>
                        <p className="text-lg text-gray-600">Bachelor's of Science in <strong>Data Science</strong></p>
                        <p className="text-lg text-gray-500">📅 July 2023 – March 2026</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;