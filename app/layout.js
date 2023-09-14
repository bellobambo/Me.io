"use client";

import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import "./globals.css";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Head from "next/head";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

const PDF_FILE_URL = "https://bellobambo.github.io/Bambo/Resume.pdf";

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const downloadFile = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  useEffect(() => {
    toast("Thanks For Coming 💜", {
      style: {
        borderRadius: "10px",
        background: "#D8BFD8",
        color: "#fff",
      },
      duration: 4000,
    });
  }, []);

  return (
    <html lang="en">
      <body className={darkMode ? "dark" : ""}>
        <Toaster position="top-center" reverseOrder={false} />

        <main className="bg-white px-10 dark:bg-gray-900">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl  dark:text-indigo-400">Bambo</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className={`cursor-pointer text-2xl dark:text-indigo-400 ${
                    darkMode
                      ? "transition-transform duration-300 rotate-180"
                      : ""
                  }`}
                />
              </li>

              <li>
                <button
                  className=" bg-gradient-to-r from-indigo-400 to-indigo-500 text-white px-4 py-2 rounded-md ml-8 hover:scale-110"
                  onClick={() => downloadFile(PDF_FILE_URL)}
                >
                  Resume
                </button>
              </li>
            </ul>
          </nav>
        </main>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
