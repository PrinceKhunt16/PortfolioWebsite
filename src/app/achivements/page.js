import React from 'react';

const certifications = [
    {
        title: "Triumphant Victory at SSIP 2023: First Place in Clean and Green Tech with Gujarat CM's Special Prize! 🏆",
        achivementImage: "/achivements/achivement-1.jpeg", 
        description: "We are thrilled to announce that our team has clinched the top spot in the Clean and Green Technology category at the SSIP 2023 Hackathon! Our innovative project, which embodies sustainability and technological advancement, won us a ₹2 Lakh prize and a special recognition from Gujarat Chief Minister Shri Bhupendrabhai Patel. This success is a testament to the hard work and dedication of our team. We are excited about the future and eager to continue creating impactful solutions for a greener and more sustainable world! 🌍💡"
    }
];

const AchivementsPage = () => {
    return (
        <div className="p-10 text-gray-800">
        <h1 className="text-4xl font-bold text-center">My Achivements</h1>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2">
            {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50/80 to-gray-300/90 p-6 border-b border-r border-gray-300">
                    <div className="flex flex-col gap-2">
                        <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                            <img 
                                src={cert.achivementImage} 
                                alt={cert.title} 
                                className="absolute top-0 left-0 w-full h-full object-cover" 
                            />
                        </div>
                        <h3 className="text-xl font-semibold mt-4">{cert.title}</h3>
                        <p className="text-sm text-gray-600">{cert.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
};

export default AchivementsPage;