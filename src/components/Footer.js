const Footer = () => {
    return (
        <footer className="py-8 px-4 border-t border-white/5">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-[var(--text-muted)]">
                    &copy; {new Date().getFullYear()} Prince Khunt. All rights reserved.
                </p>
                <p className="text-sm text-[var(--text-muted)]">
                    Hope you enjoyed! feel free to connect with me.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
