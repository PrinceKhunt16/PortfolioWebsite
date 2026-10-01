import './globals.css';
import localFont from 'next/font/local';
import { Caprasimo, Merriweather, Young_Serif } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import Providers from './providers';

/* App-wide default body / UI sans (local woff2) */
const averta = localFont({
    src: '../../public/fonts/Averta.woff2',
    variable: '--font-averta-loaded',
    weight: '400',
    display: 'swap',
});

/* Big display headlines — the signature warm rounded serif */
const caprasimo = Caprasimo({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-caprasimo-loaded',
    display: 'swap',
});

/* Geometric sans for sub-headlines, eyebrows, feature titles (Geom loaded locally) */
const geom = localFont({
    src: [
        {
            path: '../../public/fonts/Geom-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Geom-Italic.ttf',
            weight: '400',
            style: 'italic',
        },
    ],
    variable: '--font-geom-loaded',
    display: 'swap',
});

/* Serif for emphasis numerals */
const merriweather = Merriweather({
    subsets: ['latin'],
    weight: ['300', '400', '700', '900'],
    variable: '--font-merriweather-loaded',
    display: 'swap',
});

/* Alternate editorial serif */
const youngSerif = Young_Serif({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-young-serif-loaded',
    display: 'swap',
});

const SITE_URL = 'https://princekhunt16.github.io/PortfolioWebsite/';

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: 'Prince Khunt — AI / ML Engineer & Full-Stack Developer',
        template: '%s | Prince Khunt',
    },
    description:
        'Prince Khunt is an AI / ML Engineer and full-stack developer building GenAI agents, deep learning systems, and MERN applications. Available for remote freelance and contract work with startups in the US and Europe — AI MVPs, prototypes, and small projects shipped fast. B.Sc Data Science, 2x Kaggle Expert, hackathon winner.',
    applicationName: 'Prince Khunt Portfolio',
    authors: [{ name: 'Prince Khunt', url: SITE_URL }],
    creator: 'Prince Khunt',
    publisher: 'Prince Khunt',
    keywords: [
        'Prince Khunt',
        'AI ML Engineer',
        'Machine Learning Engineer',
        'Deep Learning Engineer',
        'GenAI developer',
        'AI agents developer',
        'LangChain developer',
        'Computer Vision engineer',
        'Data Scientist',
        'MERN stack developer',
        'Full-stack developer',
        'Next.js developer',
        'Kaggle Expert',
        'MLOps engineer',
        'AI developer India',
        'freelance AI engineer',
        'hire AI ML engineer',
        // freelance / contract intent — US & Europe
        'hire freelance AI developer',
        'AI MVP development',
        'MVP developer for startups',
        'build AI MVP',
        'AI prototype development',
        'GenAI consultant',
        'LLM app development',
        'AI chatbot development',
        'RAG application developer',
        'remote AI developer for US startups',
        'freelance AI developer Europe',
        'offshore AI development',
        'contract machine learning engineer',
        'small project AI developer',
        'proof of concept AI developer',
        'startup MVP developer remote',
    ],
    category: 'technology',
    alternates: { canonical: SITE_URL },
    openGraph: {
        type: 'profile',
        siteName: 'Prince Khunt — AI / ML Engineer',
        title: 'Prince Khunt — AI / ML Engineer & Full-Stack Developer',
        description:
            'AI / ML Engineer building GenAI agents, deep learning systems, and full-stack MERN products. 2x Kaggle Expert · Hackathon winner · Open to work.',
        url: SITE_URL,
        locale: 'en_US',
        firstName: 'Prince',
        lastName: 'Khunt',
        username: 'princekhunt',
        images: [
            {
                url: `${SITE_URL}og-image.png`,
                width: 1200,
                height: 630,
                alt: 'Prince Khunt — AI / ML Engineer & Full-Stack Developer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Prince Khunt — AI / ML Engineer & Full-Stack Developer',
        description:
            'AI / ML Engineer building GenAI agents, deep learning systems, and full-stack MERN products. 2x Kaggle Expert · Open to work.',
        creator: '@princekhunt19',
        images: [`${SITE_URL}og-image.png`],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export const viewport = {
    colorScheme: 'light dark',
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#f8f3e9' },
        { media: '(prefers-color-scheme: dark)', color: '#09090b' },
    ],
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${averta.variable} ${caprasimo.variable} ${geom.variable} ${merriweather.variable} ${youngSerif.variable} antialiased`}
        >
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
                            '@graph': [
                                {
                                    '@type': 'Person',
                                    '@id': `${SITE_URL}#person`,
                                    name: 'Prince Khunt',
                                    givenName: 'Prince',
                                    familyName: 'Khunt',
                                    url: SITE_URL,
                                    image: `${SITE_URL}prince.png`,
                                    email: 'mailto:princekhunt04@gmail.com',
                                    jobTitle: 'AI / ML Engineer',
                                    description:
                                        'AI / ML Engineer and full-stack developer specializing in machine learning, deep learning, generative AI, AI agents, and the MERN stack.',
                                    nationality: 'Indian',
                                    address: {
                                        '@type': 'PostalAddress',
                                        addressCountry: 'IN',
                                        addressRegion: 'Gujarat',
                                    },
                                    alumniOf: {
                                        '@type': 'CollegeOrUniversity',
                                        name: 'Marwadi University',
                                        url: 'https://www.marwadiuniversity.ac.in/',
                                    },
                                    hasCredential: {
                                        '@type': 'EducationalOccupationalCredential',
                                        credentialCategory: 'degree',
                                        educationalLevel: 'Bachelor of Science',
                                        about: 'Data Science',
                                    },
                                    knowsAbout: [
                                        'Machine Learning',
                                        'Deep Learning',
                                        'Generative AI',
                                        'Natural Language Processing',
                                        'Computer Vision',
                                        'LangChain',
                                        'LangGraph',
                                        'AI Agents',
                                        'MLOps',
                                        'Data Science',
                                        'Python',
                                        'TensorFlow',
                                        'PyTorch',
                                        'React',
                                        'Next.js',
                                        'Node.js',
                                        'MongoDB',
                                        'MERN Stack',
                                        'Docker',
                                        'AWS',
                                    ],
                                    seeks: {
                                        '@type': 'Demand',
                                        name: 'Full-time AI / ML Engineer roles and freelance AI projects',
                                    },
                                    worksFor: { '@id': `${SITE_URL}#service` },
                                    sameAs: [
                                        'https://www.linkedin.com/in/prince-khunt-linked-in/',
                                        'https://github.com/PrinceKhunt16',
                                        'https://www.kaggle.com/princekhunt19',
                                        'https://x.com/princekhunt19',
                                        'https://leetcode.com/u/PRINCEKHUNT/',
                                        'https://www.youtube.com/@princekhuntYT',
                                    ],
                                },
                                {
                                    '@type': 'ProfessionalService',
                                    '@id': `${SITE_URL}#service`,
                                    name: 'Prince Khunt — Freelance AI / ML Development',
                                    url: SITE_URL,
                                    image: `${SITE_URL}og-image.png`,
                                    email: 'mailto:princekhunt04@gmail.com',
                                    priceRange: '$$',
                                    description:
                                        'Remote freelance and contract AI development for startups and small teams: AI MVPs, GenAI and LLM applications, RAG systems, chatbots and agents, computer vision, and full-stack MERN builds. Working with clients across the United States and Europe.',
                                    founder: { '@id': `${SITE_URL}#person` },
                                    employee: { '@id': `${SITE_URL}#person` },
                                    availableLanguage: ['en'],
                                    areaServed: [
                                        { '@type': 'Country', name: 'United States' },
                                        { '@type': 'Country', name: 'United Kingdom' },
                                        { '@type': 'Country', name: 'Germany' },
                                        { '@type': 'Country', name: 'Netherlands' },
                                        { '@type': 'Country', name: 'France' },
                                        { '@type': 'Country', name: 'Switzerland' },
                                        { '@type': 'Country', name: 'Sweden' },
                                        { '@type': 'Country', name: 'Ireland' },
                                        { '@type': 'Country', name: 'Canada' },
                                        { '@type': 'Country', name: 'Australia' },
                                        { '@type': 'Place', name: 'Europe' },
                                        { '@type': 'Place', name: 'Worldwide (remote)' },
                                    ],
                                    serviceType: [
                                        'AI MVP development',
                                        'GenAI application development',
                                        'LLM and RAG system development',
                                        'AI agent development',
                                        'Machine learning consulting',
                                        'Computer vision development',
                                        'Full-stack web development (MERN)',
                                        'Rapid prototyping',
                                    ],
                                    hasOfferCatalog: {
                                        '@type': 'OfferCatalog',
                                        name: 'AI development services',
                                        itemListElement: [
                                            {
                                                '@type': 'Offer',
                                                itemOffered: {
                                                    '@type': 'Service',
                                                    name: 'AI MVP build',
                                                    description:
                                                        'Idea to working AI product in weeks — scoped, built, and shipped for startups validating a concept.',
                                                },
                                            },
                                            {
                                                '@type': 'Offer',
                                                itemOffered: {
                                                    '@type': 'Service',
                                                    name: 'GenAI / LLM application',
                                                    description:
                                                        'RAG pipelines, AI agents, chatbots, and LLM integrations built on LangChain and LangGraph.',
                                                },
                                            },
                                            {
                                                '@type': 'Offer',
                                                itemOffered: {
                                                    '@type': 'Service',
                                                    name: 'Small project / proof of concept',
                                                    description:
                                                        'Short engagements: model prototypes, computer vision demos, automation scripts, and technical spikes.',
                                                },
                                            },
                                            {
                                                '@type': 'Offer',
                                                itemOffered: {
                                                    '@type': 'Service',
                                                    name: 'Full-stack product development',
                                                    description:
                                                        'End-to-end MERN and Next.js applications with AI features built in.',
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    '@type': 'WebSite',
                                    '@id': `${SITE_URL}#website`,
                                    url: SITE_URL,
                                    name: 'Prince Khunt — AI / ML Engineer',
                                    description:
                                        'Portfolio of Prince Khunt, AI / ML Engineer and full-stack developer.',
                                    inLanguage: 'en',
                                    publisher: { '@id': `${SITE_URL}#person` },
                                },
                                {
                                    '@type': 'ProfilePage',
                                    '@id': SITE_URL,
                                    url: SITE_URL,
                                    name: 'Prince Khunt — AI / ML Engineer & Full-Stack Developer',
                                    isPartOf: { '@id': `${SITE_URL}#website` },
                                    about: { '@id': `${SITE_URL}#person` },
                                    inLanguage: 'en',
                                },
                            ],
                        }),
                    }}
                />
            </head>
            <body suppressHydrationWarning={true}>
                <Providers>{children}</Providers>
                <Analytics />
            </body>
        </html>
    );
}
