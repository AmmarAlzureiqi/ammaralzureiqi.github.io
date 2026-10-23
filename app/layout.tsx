import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import { SiteHeader } from "../components/site-header"
import { ThemeProvider } from "../components/theme-provider"
import { SiteFooter } from "../components/site-footer"
import { site } from "@/lib/site"

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
})

const mono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  weight: "100 900",
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Software Engineer, MLOps / AIOps`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "ML platform engineer",
    "MLOps",
    "AIOps",
    "AI infrastructure",
    "model serving",
    "LLM inference",
    "Kubernetes",
    "agentic AI",
    "MCP",
    "LangGraph",
    "Toronto",
  ],
  authors: [{ name: site.name, url: site.url }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Software Engineer, MLOps / AIOps`,
    description: site.description,
    locale: "en_CA",
    images: [site.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Software Engineer, MLOps / AIOps`,
    description: site.description,
    images: [site.ogImage.url],
  },
  icons: {
    icon: "/favicon.png",
  },
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: "Software Engineer",
  worksFor: { "@type": "Organization", name: "Mobility Global" },
  address: { "@type": "PostalAddress", addressLocality: "Toronto", addressRegion: "ON", addressCountry: "CA" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of Illinois Urbana-Champaign" },
    { "@type": "CollegeOrUniversity", name: "Western University" },
  ],
  knowsAbout: ["MLOps", "AIOps", "Model serving", "LLM inference", "Kubernetes", "Agentic AI", "MCP"],
  sameAs: [site.links.linkedin, site.links.github],
}

// Sets the theme class before first paint so there's no flash. Light by default;
// a saved choice from the toggle wins.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");document.documentElement.classList.add(t==="dark"?"dark":"light")}catch(e){document.documentElement.classList.add("light")}})()`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${sans.variable} ${mono.variable} font-sans bg-background text-foreground antialiased`}>
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-card focus:px-3 focus:py-2 focus:text-sm focus:border focus:border-border"
          >
            Skip to content
          </a>
          <div className="flex flex-col min-h-screen">
            <SiteHeader />
            <main id="main" className="flex-1 px-4 sm:px-6">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
