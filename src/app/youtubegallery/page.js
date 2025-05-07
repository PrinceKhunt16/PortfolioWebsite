"use client";
import React, { useState } from 'react';

const YouTubeGalleryPage = () => {
    const [videos] = useState([
        {
            name: "LinkedIn Chat Assistant Extension / Demo / Features Explained / prince khunt",
            url: "https://www.youtube.com/embed/k2ERRWbyfc8",
        }
    ]);

    return (
        <div className="p-4 md:p-10 text-gray-800 min-h-screen">
            <h1 className="text-4xl font-bold mb-6 text-center">📹 YouTube Gallery</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video, index) => (
                    <div key={index} className="w-full">
                        <div className="w-full" style={{ aspectRatio: '16 / 9' }}>
                            <iframe
                                src={video.url}
                                title={`YouTube video ${index + 1}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </div>
                        <p className='p-2 text-xl bg-gray-100'>{video.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YouTubeGalleryPage;