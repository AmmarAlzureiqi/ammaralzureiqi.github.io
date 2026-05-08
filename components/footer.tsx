"use client"

import { Mail, Linkedin, Github, FileText } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 mt-20">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="mailto:alzureiqi3@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/AmmarAlzureiqi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/AmmarAlzureiqi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="/assets/Alzureiqi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="Resume"
            >
              <FileText className="h-4 w-4" />
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            Ammar Alzureiqi.
          </p>
        </div>
      </div>
    </footer>
  )
}
