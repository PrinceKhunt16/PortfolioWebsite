import "./globals.css";
import Layout from "@/components/Layout";

export const metadata = {
  title: "k_prince",
  description: "Goal is to become a great!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}