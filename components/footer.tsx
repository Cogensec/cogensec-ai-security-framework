import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <span className="text-lg font-semibold">Cogensec</span>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <Link href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              Contact
            </Link>
          </div>

          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Cogensec. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
