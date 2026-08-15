import Link from 'next/link';
import { PiArrowLeft, PiDownloadSimple } from 'react-icons/pi';
import { ClipButton } from '@/components/ui/buttons';

export const metadata = {
    title: 'Resume',
    description:
        'Resume of Prince Khunt — AI / ML Engineer and full-stack developer. Experience in GenAI, deep learning, computer vision, MLOps, and the MERN stack. View online or download as PDF.',
    alternates: {
        canonical: 'https://princekhunt16.github.io/PortfolioWebsite/resume/',
    },
    openGraph: {
        title: 'Resume — Prince Khunt, AI / ML Engineer',
        description:
            'Resume of Prince Khunt — AI / ML Engineer and full-stack developer. View online or download as PDF.',
        url: 'https://princekhunt16.github.io/PortfolioWebsite/resume/',
        type: 'profile',
    },
};

const ResumePage = () => {
    return (
        <main className="flex min-h-screen flex-col bg-background">
            {/* Top bar: back to portfolio + download */}
            <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur-xl">
                <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                        <PiArrowLeft className="size-4" />
                        Back to portfolio
                    </Link>
                    {/* relative path so it survives the GitHub Pages basePath */}
                    <ClipButton href="./resume.pdf" download innerClassName="px-4 py-2 text-xs">
                        <PiDownloadSimple className="size-4" />
                        Download PDF
                    </ClipButton>
                </div>
            </header>

            {/* Embedded resume */}
            <div className="mx-auto w-full max-w-5xl flex-1 px-4 py-6 sm:px-6">
                <div className="h-[calc(100vh-7rem)] w-full overflow-hidden rounded-none border border-border bg-card shadow-sm">
                    <object
                        data="./resume.pdf"
                        type="application/pdf"
                        className="h-full w-full"
                    >
                        <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                            <p className="text-sm text-muted-foreground">
                                Your browser can’t display the PDF inline.
                            </p>
                            <a
                                href="./resume.pdf"
                                download
                                className="text-sm font-semibold text-primary underline underline-offset-4"
                            >
                                Download the resume instead
                            </a>
                        </div>
                    </object>
                </div>
            </div>
        </main>
    );
};

export default ResumePage;
