import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { AlertCircle } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EcoRecycle - E-Waste Management",
  description: "Recycle your electronic waste and earn rewards",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <div className="w-full bg-yellow-100 border-b border-yellow-300">
              <div className="container py-2 text-center text-sm text-yellow-800 flex items-center justify-center">
                <AlertCircle className="h-4 w-4 mr-2 animate-pulse" />
                <p>This website contains prototype data for demonstration purposes only. It is not real data.</p>
              </div>
            </div>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'