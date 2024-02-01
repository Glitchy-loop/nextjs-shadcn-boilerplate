import type { Metadata } from "next"
import { Electrolize as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/providers/theme-provider"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400"],
})

export const metadata: Metadata = {
  title: "D-NTT",
  description: "Digital audio assets marketplace",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "relative h-full bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow flex-1">{children}</div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
