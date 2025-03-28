import { useState } from 'react';
import Image from 'next/image';

const ProjectCard = ({ project }) => {
    const [mainImage, setMainImage] = useState(project.projectImages[0]);

    return (
        <div className="bg-gradient-to-br from-gray-100 to-gray-400/50 p-6">
            <div className="flex flex-col gap-4">
                <div className="relative w-full bg-gradient-to-br from-gray-300 to-gray-800/50 flex justify-center items-center">
                    <div className="flex items-center justify-center relative w-full max-w-4xl" style={{ aspectRatio: '16 / 10' }}>
                        <Image
                            width={640}
                            height={400}
                            src={mainImage}
                            alt={project.title}
                            className="w-full object-cover shadow-md transition-all duration-300"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-7 gap-2">
                    {project.projectImages.map((img, index) => (
                        <div
                            key={index}
                            className={`cursor-pointer border-4 transition-all duration-300 ${mainImage === img ? 'border-gray-400' : 'border-gray-300'}`}
                            onClick={() => setMainImage(img)}
                        >
                            <Image
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                width={120}
                                height={80}
                                className="hover:opacity-40 w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <div className="flex gap-2 flex-wrap">
                    {project.links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            className="text-blue-500 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link.title}
                        </a>
                    ))}
                </div>
                <p className="text-gray-600 text-[18px]">{project.description}</p>
                <ul className="list-none flex gap-2 text-sm font-semibold text-gray-600">
                    {project.techstack.map((tech, index) => (
                        <li key={index} className='flex gap-2 items-center'>
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProjectCard;