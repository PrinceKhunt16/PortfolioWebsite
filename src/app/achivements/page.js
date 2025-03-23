import Image from 'next/image';
import React from 'react';

const certifications = [
    {
        title: "Triumphant Victory at SSIP 2023: First Place in Clean and Green Tech with Gujarat CM's Special Prize! 🏆",
        achivementImage: "./achivements/achivement-1.jpeg"
    }
];

const AchivementsPage = () => {
    return (
        <div className="p-10 text-gray-800">
        <h1 className="text-4xl font-bold text-center">🎊 My Achivements</h1>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2">
            {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-100 to-gray-400/60 p-6 border-b border-r border-gray-300">
                    <div className="flex flex-col gap-2">
                        <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                            <Image 
                                width={500}
                                height={500}
                                src={cert.achivementImage} 
                                alt={cert.title} 
                                className="absolute top-0 left-0 w-full h-full object-cover" 
                            />
                        </div>
                        <h3 className="text-xl font-semibold mt-4">{cert.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
};

export default AchivementsPage;