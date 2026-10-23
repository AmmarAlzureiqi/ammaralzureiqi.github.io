import type { Metadata } from "next"
import { RedirectToSection } from "@/components/redirect-to-section"

export const metadata: Metadata = {
  title: "Projects",
  alternates: { canonical: "/" },
  robots: { index: false, follow: true },
}

export default function Page() {
  return <RedirectToSection hash="projects" label="Projects" />
}
