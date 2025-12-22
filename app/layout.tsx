import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import StickyEmailButton from "@/components/StickyEmailButton"

export const metadata = {
  title: "Ascent Standard",
  description:
    "A modern marketing services company, providing insights powered by analytics and deep human understanding",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="bg-gray-50 text-gray-900"
        suppressHydrationWarning
      >
        <Navbar />
        <StickyEmailButton />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
