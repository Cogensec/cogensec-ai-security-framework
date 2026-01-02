"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ArrowRight } from "lucide-react"
import Link from "next/link"

const navigation = [
  { name: "Framework", href: "#framework" },
  { name: "Architecture", href: "#architecture" },
  { name: "Comparison", href: "#comparison" },
  { name: "ROI", href: "#roi" },
  { name: "Documentation", href: "#docs" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-tight">Cogensec</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Button variant="outline" size="sm" className="rounded-full border-foreground/20 bg-transparent">
            Contact Sales
          </Button>
          <Button size="sm" className="rounded-full gap-2">
            Request Demo
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-background">
            <div className="flex flex-col gap-6 pt-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <Button variant="outline" className="rounded-full bg-transparent">
                  Contact Sales
                </Button>
                <Button className="rounded-full">Request Demo</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
