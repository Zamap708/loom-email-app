import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Loom Email App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen w-full relative flex flex-col justify-center items-center">
        <Navbar />
        <main
          className="w-full h-[calc(100vh-80px)] flex items-center justify-center bg-cover"
          style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}
        >
          <Sidebar />
          <div className="w-11/12 h-full bg-white/80 p-4 flex justify-center items-center">
            {children}
          </div>
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
