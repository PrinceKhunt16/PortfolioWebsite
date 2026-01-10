import "./globals.css";
import Layout from "@/components/Layout";
import localFont from 'next/font/local';

const adobeClean = localFont({
  src: "../../public/fonts/AdobeClean.otf",
  variable: "--font-adobe-clean",
  weight: "400",
});

export const metadata = {
  title: "k_prince",
  description: "Portfolio website of Prince Khunt - A passionate AI enthusiast.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={adobeClean.variable}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7D7YK2Q0GR"></script>
        <script
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
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Prince Khunt",
              "url": "https://princekhunt16.github.io/PortfolioWebsite/",
              "sameAs": [
                "https://www.linkedin.com/in/princekhunt/",
                "https://github.com/PrinceKhunt16"
              ]
            })
          }}
        />
      </head>
      <body
        data-gr-ext-installed=""
      >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}