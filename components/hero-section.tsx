import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              The Security Framework for AI Agents
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground">
              CAASF is the world&apos;s first comprehensive security framework designed specifically for autonomous AI
              agents. Protect your AI systems with enterprise-grade security.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="rounded-full gap-2">
                Request Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-foreground/20 bg-transparent">
                Read Announcement
              </Button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 rounded-3xl bg-[#e8e4de] flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-3/4 h-3/4">
                  <rect x="40" y="50" width="120" height="100" rx="8" fill="none" stroke="#1a1a1a" strokeWidth="2" />
                  <circle cx="100" cy="35" r="12" fill="#e8e4de" stroke="#1a1a1a" strokeWidth="2" />
                  <rect x="55" y="70" width="90" height="15" rx="4" fill="#c5e8d5" />
                  <rect x="55" y="95" width="90" height="15" rx="4" fill="#fde4d2" />
                  <rect x="55" y="120" width="90" height="15" rx="4" fill="#d4e5ed" />
                  <path d="M85 35 L100 25 L115 35" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="100" cy="165" r="4" fill="#1a1a1a" />
                  <circle cx="85" cy="172" r="3" fill="#1a1a1a" opacity="0.5" />
                  <circle cx="115" cy="172" r="3" fill="#1a1a1a" opacity="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 rounded-2xl border border-border bg-card p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold">ARGUS Platform</h2>
              <p className="mt-3 text-muted-foreground">
                Enterprise-grade AI agent security and governance. Discover, secure, and govern AI agents across your
                organization.
              </p>
              <Button variant="outline" className="mt-6 rounded-full border-foreground/20 bg-transparent">
                Read Announcement
              </Button>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Learn more</p>
              {["Latest Security Research", "View All Products", "Documentation"].map((item) => (
                <div key={item} className="flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm font-medium">{item}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
