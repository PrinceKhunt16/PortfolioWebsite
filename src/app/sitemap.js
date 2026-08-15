const SITE_URL = 'https://princekhunt16.github.io/PortfolioWebsite/';

export const dynamic = 'force-static';

export default function sitemap() {
    const lastModified = new Date();

    return [
        {
            url: SITE_URL,
            lastModified,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${SITE_URL}resume/`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];
}
