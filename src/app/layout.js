import "./globals.css";
import Layout from "@/components/Layout";

export const metadata = {
  title: "k_prince",
  description: "Goad is to become a great!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}