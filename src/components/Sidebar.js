import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoMdHome } from "react-icons/io";
import { MdOutlineSegment } from "react-icons/md";
import { LiaFilePdf } from "react-icons/lia";
import { LiaCertificateSolid } from "react-icons/lia";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { AiOutlineContacts } from "react-icons/ai";
import { MdLaptopChromebook } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoGitNetworkSharp } from "react-icons/io5";
import { RiStairsFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";

const Sidebar = ({ ml, setMl }) => {
    const location = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isText, setIsText] = useState(false);
    const [isSmallDisplay, setIsSmallDisplay] = useState(false);

    console.log("--------------------")
    console.log("isOpen", isOpen);
    console.log("isText", isText);
    console.log("isSmallDisplay", isSmallDisplay);

    const isActive = (path) => location === path ? 'active-link text-white bg-gradient-to-r from-gray-400 to-gray-900/90' : '';

    const toggleMenu = () => {
        setIsOpen(!isOpen);

        if (isOpen) {
            setTimeout(() => {
                setIsText(!isText);
            }, 200);
        } else {
            setIsText(!isText);
        }

        setMl(!isOpen ? 14 : 64);
    };

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth <= 800) {
                setIsSmallDisplay(true);
                setIsOpen(true);
                setIsText(true);
                setMl(14);
            } else {
                setIsSmallDisplay(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setMl(isOpen ? 14 : 64);
    }, [isOpen, setMl]);

    return (
        <div className={`z-50 min-w-14 h-screen bg-gradient-to-b from-gray-900 to-gray-600 text-white fixed top-0 flex flex-col transition-all duration-300 ${isSmallDisplay ? (!isOpen ? 'w-full' : 'w-14') : (isOpen ? 'w-14' : 'w-64')}`}>
            <div className="h-[70px] p-4 pb-2 text-white flex items-center gap-3 relative">
                <button onClick={toggleMenu} className="text-white cursor-pointer">
                    <MdOutlineSegment className='w-[22px]' size={22} />
                </button>
                <h1
                    className={`text-[24px] transition-all duration-300 transform absolute ${!isText ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-10px]'} ease-in-out`}
                    style={{ visibility: !isText ? 'visible' : 'hidden', left: '50px' }}
                >
                    Prince Khunt
                </h1>
            </div>
            <ul className="list-none flex-1">
                <li className={`h-[52px] flex items-center mb-2 px-4 ${isActive('/')}`}>
                    <Link
                        href="/"
                        className={`flex items-center gap-3 w-full text-lg cursor-pointer py-3 font-normal relative`}
                        onClick={() => {
                            if (isSmallDisplay && !isOpen) {
                                toggleMenu();
                            }
                        }}
                    >
                        <IoMdHome size={22} color={`${isActive('/') && "white"}`} />
                        <span
                            className={`transition-text duration-300 transform absolute ${!isText ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-5px]'} ease-in-out`}
                            style={{ visibility: !isText ? 'visible' : 'hidden', left: '35px' }}
                        >
                            Home
                        </span>
                    </Link>
                </li>
                <li className={`h-[52px] flex items-center mb-2 px-4 ${isActive('/aboutme')}`}>
                    <Link
                        href="/aboutme"
                        className={`flex items-center gap-3 w-full text-lg cursor-pointer py-3 font-normal relative`}
                        onClick={() => {
                            if (isSmallDisplay && !isOpen) {
                                toggleMenu();
                            }
                        }}
                    >
                        <IoIosInformationCircleOutline size={22} color={`${isActive('/aboutme') && "white"}`} />
                        <span
                            className={`transition-text duration-300 transform absolute ${!isText ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-5px]'} ease-in-out`}
                            style={{ visibility: !isText ? 'visible' : 'hidden', left: '35px' }}
                        >
                            About Me
                        </span>
                    </Link>
                </li>
                <li className={`h-[52px] flex items-center mb-2 px-4 ${isActive('/resume')}`}>
                    <Link
                        href="/resume"
                        className={`flex items-center gap-3 w-full text-lg cursor-pointer py-3 font-normal relative`}
                        onClick={() => {
                            if (isSmallDisplay && !isOpen) {
                                toggleMenu();
                            }
                        }}
                    >
                        <LiaFilePdf size={22} color={`${isActive('/resume') && "white"}`} />
                        <span
                            className={`transition-text duration-300 transform absolute ${!isText ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-5px]'} ease-in-out`}
                            style={{ visibility: !isText ? 'visible' : 'hidden', left: '35px' }}
                        >
                            Resume
                        </span>
                    </Link>
                </li>
                <li className={`h-[52px] flex items-center mb-2 px-4 ${isActive('/skills')}`}>
                    <Link
                        href="/skills"
                        className={`flex items-center gap-3 w-full text-lg cursor-pointer py-3 font-normal relative`}
                        onClick={() => {
                            if (isSmallDisplay && !isOpen) {
                                toggleMenu();
                            }
                        }}
                    >
                        <IoGitNetworkSharp size={22} color={`${isActive('/skills') && "white"}`} />
                        <span
                            className={`transition-text duration-300 transform absolute ${!isText ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-5px]'} ease-in-out`}
                            style={{ visibility: !isText ? 'visible' : 'hidden', left: '35px' }}
                        >
                            Skills
                        </span>
                    </Link>
                </li>
                <li className={`h-[52px] flex items-center mb-2 px-4 ${isActive('/projects')}`}>
                    <Link
                        href="/projects"
                        className={`flex items-center gap-3 w-full text-lg cursor-pointer py-3 font-normal relative`}
                        onClick={() => {
                            if (isSmallDisplay && !isOpen) {
                                toggleMenu();
                            }
                        }}
                    >
                        <MdLaptopChromebook size={22} color={`${isActive('/projects') && "white"}`} />
                        <span
                            className={`transition-text duration-300 transform absolute ${!isText ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-5px]'} ease-in-out`}
                            style={{ visibility: !isText ? 'visible' : 'hidden', left: '35px' }}
                        >
                            Projects
                        </span>
                    </Link>
                </li>
                <li className={`h-[52px] flex items-center mb-2 px-4 ${isActive('/experience')}`}>
                    <Link
                        href="/experience"
                        className={`flex items-center gap-3 w-full text-lg cursor-pointer py-3 font-normal relative`}
                        onClick={() => {
                            if (isSmallDisplay && !isOpen) {
                                toggleMenu();
                            }
                        }}
                    >
                        <RiStairsFill size={22} color={`${isActive('/experience') && "white"}`} />
                        <span
                            className={`transition-text duration-300 transform absolute ${!isText ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-5px]'} ease-in-out`}
                            style={{ visibility: !isText ? 'visible' : 'hidden', left: '35px' }}
                        >
                            Experience
                        </span>
                    </Link>
                </li>
                <li className={`h-[52px] flex items-center mb-2 px-4 ${isActive('/certifications')}`}>
                    <Link
                        href="/certifications"
                        className={`flex items-center gap-3 w-full text-lg cursor-pointer py-3 font-normal relative`}
                        onClick={() => {
                            if (isSmallDisplay && !isOpen) {
                                toggleMenu();
                            }
                        }}
                    >
                        <PiNewspaperClippingLight size={22} color={`${isActive('/certifications') && "white"}`} />
                        <span
                            className={`transition-text duration-300 transform absolute ${!isText ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-5px]'} ease-in-out`}
                            style={{ visibility: !isText ? 'visible' : 'hidden', left: '35px' }}
                        >
                            Certifications
                        </span>
                    </Link>
                </li>
                <li className={`h-[52px] flex items-center mb-2 px-4 ${isActive('/achivements')}`}>
                    <Link
                        href="/achivements"
                        className={`flex items-center gap-3 w-full text-lg cursor-pointer py-3 font-normal relative`}
                        onClick={() => {
                            if (isSmallDisplay && !isOpen) {
                                toggleMenu();
                            }
                        }}
                    >
                        <LiaCertificateSolid size={22} color={`${isActive('/achivements') && "white"}`} />
                        <span
                            className={`transition-text duration-300 transform absolute ${!isText ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-5px]'} ease-in-out`}
                            style={{ visibility: !isText ? 'visible' : 'hidden', left: '35px' }}
                        >
                            Achievements
                        </span>
                    </Link>
                </li>
                <li className={`h-[52px] flex items-center mb-2 px-4 ${isActive('/youtubegallery')}`}>
                    <Link
                        href="/youtubegallery"
                        className={`flex items-center gap-3 w-full text-lg cursor-pointer py-3 font-normal relative`}
                        onClick={() => {
                            if (isSmallDisplay && !isOpen) {
                                toggleMenu();
                            }
                        }}
                    >
                        <FaYoutube size={22} color={`${isActive('/youtubegallery') && "white"}`} />
                        <span
                            className={`transition-text duration-300 transform absolute ${!isText ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-5px]'} ease-in-out`}
                            style={{ visibility: !isText ? 'visible' : 'hidden', left: '35px' }}
                        >
                            YouTube Gallery
                        </span>
                    </Link>
                </li>
                <li className={`h-[52px] flex items-center mb-2 px-4 ${isActive('/contact')}`}>
                    <Link
                        href="/contact"
                        className={`flex items-center gap-3 w-full text-lg cursor-pointer py-3 font-normal relative`}
                        onClick={() => {
                            if (isSmallDisplay && !isOpen) {
                                toggleMenu();
                            }
                        }}
                    >
                        <AiOutlineContacts size={22} color={`${isActive('/contact') && "white"}`} />
                        <span
                            className={`transition-text duration-300 transform absolute ${!isText ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-5px]'} ease-in-out`}
                            style={{ visibility: !isText ? 'visible' : 'hidden', left: '35px' }}
                        >
                            Contact
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;