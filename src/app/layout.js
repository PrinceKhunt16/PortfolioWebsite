import './globals.css';
import localFont from 'next/font/local';
import Script from 'next/script';

const averta = localFont({
    src: '../../public/fonts/Averta.woff2',
    variable: '--font-averta-loaded',
    weight: '400',
});

export const metadata = {
    title: 'Prince Khunt | AI Developer Portfolio',
    description:
        'Portfolio website of Prince Khunt - Specializing in ML, DL, GenAI, and MERN stack.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning className={averta.variable}>
            <head>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-7D7YK2Q0GR"
                    strategy="afterInteractive"
                />
                <Script
                    id="google-analytics"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7D7YK2Q0GR');
            `,
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Person',
                            name: 'Prince Khunt',
                            url: 'https://princekhunt16.github.io/PortfolioWebsite/',
                            sameAs: [
                                'https://www.linkedin.com/in/princekhunt/',
                                'https://github.com/PrinceKhunt16',
                            ],
                        }),
                    }}
                />
            </head>
            <body suppressHydrationWarning={true}>{children}</body>
        </html>
    );
}
