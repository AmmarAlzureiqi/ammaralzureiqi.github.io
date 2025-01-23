import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="bg-background border-b py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Ammar Alzureiqi</Link>
        <div className="space-x-4">
          {['Experience', 'Education', 'Projects', 'Skills'].map((item) => (
            <Button key={item} variant="ghost" asChild>
              <Link href={`#${item.toLowerCase()}`}>{item}</Link>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  )
}

