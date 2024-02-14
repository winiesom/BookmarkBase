import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from '@/components';


export const metadata: Metadata = {
  title: "BookMark Base",
  description: "Save your links easily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
