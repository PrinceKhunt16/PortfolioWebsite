import React from 'react';

const ContactPage = () => {
    return (
        <div className="p-4 md:p-10 text-gray-800">
            <h1 className="text-4xl font-bold text-center">☎️ Contact Me</h1>
            <div className="mt-6 text-xl">
                <p>
                    Feel free to reach out or connect with me on any of the platforms below. 
                </p>
                <ul className="mt-4 space-y-4">
                    <li>
                        <a 
                            href="https://www.linkedin.com/in/prince-khunt-linked-in/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-600 hover:text-blue-800"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://github.com/PrinceKhunt16/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-600 hover:text-blue-800"
                        >
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://www.kaggle.com/princekhunt19" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-600 hover:text-blue-800"
                        >
                            Kaggle
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://x.com/princekhunt19" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-600 hover:text-blue-800"
                        >
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://leetcode.com/u/PRINCEKHUNT/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-600 hover:text-blue-800"
                        >
                            LeetCode
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://www.youtube.com/@princekhuntYT" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-600 hover:text-blue-800"
                        >
                            YouTube
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ContactPage;