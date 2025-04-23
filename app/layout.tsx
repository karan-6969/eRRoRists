import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { AnimationProvider } from "@/components/animation-provider"

export const metadata: Metadata = {
  title: "Errorists - Build ideas with people who give a damn",
  description: "A collaborative platform to turn ideas into real products",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-boulder text-white min-h-screen flex flex-col">
        <AnimationProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  )
}
