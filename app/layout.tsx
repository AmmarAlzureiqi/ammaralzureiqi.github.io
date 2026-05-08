import { DM_Sans } from 'next/font/google'
import './globals.css'
import { TopNavigation } from "../components/top-navigation"
import { ThemeProvider } from "../components/theme-provider"
import { Footer } from "../components/footer"
import { EasterEggProvider } from "../components/easter-egg-provider"
import { CommandPalette } from "../components/command-palette"
import { KeyboardShortcuts } from "../components/keyboard-shortcuts"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata = {
  title: "Ammar Alzureiqi",
  description: "Software Developer building ML infrastructure. MLOps/AIOps @ Carfax.",
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* If you're reading the source, there are a few secrets hidden on this site. Try ⌘K. */}
      <body className={`${dmSans.className} bg-background text-foreground antialiased`}>
        <ThemeProvider defaultTheme="light">
          <EasterEggProvider>
            <div className="flex flex-col min-h-screen">
              <TopNavigation />
              <main className="flex-1 px-6 md:px-8">{children}</main>
              <Footer />
            </div>
            <CommandPalette />
            <KeyboardShortcuts />
          </EasterEggProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
