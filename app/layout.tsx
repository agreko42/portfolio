"use client"
import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "next-themes"
import {useState} from "react";
import Home from "./page"

export default function RootLayout() {

    let [language, setLanguage] = useState("german");

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="dark:bg-stone-900">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar
              language={language}
              setLanguage={setLanguage}
          />
          <Home language={language}/>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
