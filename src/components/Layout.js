'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
    const pathname = usePathname();
    const [ml, setMl] = useState(64);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const isAuthPage = pathname.includes('/auth');

    if (!isClient) {
        return (
            <div className="flex">
                <main className="min-h-screen bg-white w-full ml-64">{children}</main>
            </div>
        );
    }

    return (
        <div className="flex">
            {!isAuthPage && <Sidebar ml={ml} setMl={setMl} />}
            <main
                className={`min-h-screen bg-white w-full ${!isAuthPage && `${ml == 14 && 'ml-14'} ${ml == 64 && 'ml-64'}`}`}
            >
                {children}
            </main>
        </div>
    );
}
