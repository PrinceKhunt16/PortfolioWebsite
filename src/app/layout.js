import "./globals.css";
import Layout from "@/components/Layout";

export const metadata = {
  title: "k_prince",
  description: "Goad is to become a great!",
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
      </head>
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}