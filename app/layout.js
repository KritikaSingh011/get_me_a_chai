import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SessionWrapper from "./components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get Me A Chai- A simple app to get you a chai",
  description: "Get Me A Chai is a simple app that allows you to get funds for the clints",
};

export default function RootLayout({ children }) { 
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-[#2c0000]`}
    >
      <body className="min-h-screen"> 
        <SessionWrapper>
          <Navbar />
          {children}
          <Footer/>
        </SessionWrapper>
      </body>
    </html>   
  );
}
