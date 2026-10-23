import Link from "next/link"

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto py-24 text-center animate-fade-in-up">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-primary mb-3">404</p>
      <h1 className="text-4xl font-semibold tracking-tight mb-3">Page not found</h1>
      <p className="text-sm text-muted-foreground mb-8">That page doesn&apos;t exist or has moved.</p>
      <div className="flex flex-wrap justify-center gap-4 text-sm">
        <Link href="/" className="link">Home</Link>
        <Link href="/#experience" className="link">Consulting</Link>
        <Link href="/#projects" className="link">Projects</Link>
        <Link href="/#about" className="link">About</Link>
      </div>
    </div>
  )
}
