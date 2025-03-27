import Image from 'next/image';
import React from 'react';

const certifications = [
    {
        title: "Fine Tune LLM with HF Transformers for NLP - KGPTalkie",
        issuedBy: "Udemy",
        issuedDate: "Feb 2025",
        credentialId: "UC-af1b9210-16b9-4f77-af9b-0d975fd95d77",
        certificateImage: "./certificates/certificate-1.jpg", 
    },
    {
        title: "DL for Computer Vision",
        issuedBy: "CampusX",
        issuedDate: "Dec 2024",
        credentialId: "BQLQKV40",
        certificateImage: "./certificates/certificate-2.jpg", 
    },
    {
        title: "ML Specialization",
        issuedBy: "Coursera",
        issuedDate: "Jun 2024",
        credentialId: "F4CARM85U9L2",
        certificateImage: "./certificates/certificate-8.jpg", 
    },
    {
        title: "Build Apps with Gemini Pro",
        issuedBy: "Udemy",
        issuedDate: "Nov 2024",
        credentialId: "UC-1e5f0bd4-020e-4e2f-895d-d75d6ba0aaab",
        certificateImage: "./certificates/certificate-3.jpg", 
    },
    {
        title: "Complete Generative AI",
        issuedBy: "Udemy",
        issuedDate: "Nov 2024",
        credentialId: "UC-97f6477d-5f17-4383-bb52-3bc092388747",
        certificateImage: "./certificates/certificate-4.jpg", 
    },
    {
        title: "Complete ML, DL and NLP Bootcamp",
        issuedBy: "Udemy",
        issuedDate: "Nov 2024",
        credentialId: "UC-f4080a30-7898-4423-9246-e35c4c806fc7",
        certificateImage: "./certificates/certificate-5.jpg", 
    },
    {
        title: "Introduction to NoSQL databases",
        issuedBy: "Infosys Springboard",
        issuedDate: "Mar 2025",
        credentialId: "N/A",
        certificateImage: "./certificates/certificate-10.jpg", 
    },
    {
        title: "SQL (Basic)",
        issuedBy: "HackerRank",
        issuedDate: "Aug 2024",
        credentialId: "863681e10826",
        certificateImage: "./certificates/certificate-6.jpg", 
    },
    {
        title: "SQL (Intermediate)",
        issuedBy: "HackerRank",
        issuedDate: "Aug 2024",
        credentialId: "c443910f32e8",
        certificateImage: "./certificates/certificate-7.jpg", 
    },
    {
        title: "New India Vibrant Hackathon 2023",
        issuedBy: "SSIP Gujarat",
        issuedDate: "Nov 2023",
        credentialId: "N/A",
        certificateImage: "./certificates/certificate-9.jpg", 
    }
];

const CertificationsPage = () => {
    return (
        <div className="p-10 text-gray-800">
        <h1 className="text-4xl font-bold text-center">📰 My Certifications</h1>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2">
            {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-100 to-gray-400/50 p-6">
                    <div className="flex flex-col gap-2">
                        <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                            <Image
                                width={500}
                                height={500}
                                src={cert.certificateImage} 
                                alt={cert.title} 
                                className="absolute top-0 left-0 w-full h-full object-cover" 
                            />
                        </div>
                        <h3 className="text-xl font-semibold mt-4">{cert.title}</h3>
                        <p className="text-sm text-gray-600">{cert.issuedBy} - {cert.issuedDate}</p>
                        <p className="text-sm text-gray-600">Credential ID: {cert.credentialId}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
};

export default CertificationsPage;