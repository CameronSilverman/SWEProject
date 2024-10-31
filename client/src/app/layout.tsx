import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CollabraGator",
  description: "Welcome!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >

    {/* Global Gradient Background */}
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-purple-500 to-orange-400 opacity-90" />

    <Header/>

    <div className="relative z-10 flex-grow">
        {children}
    </div>

    <Footer/>
    </body>
    </html>
  );
}
