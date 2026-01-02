import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-foreground text-background p-12 md:p-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Secure Your AI Agents?
            </h2>
            <p className="mt-4 text-background/70">
              Join the organizations building the future of AI security. Get started with CAASF today.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" className="rounded-full gap-2">
                Request ARGUS Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-background/30 text-background hover:bg-background/10 hover:text-background bg-transparent"
              >
                Download Framework
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-background/60">
              <span>Free Framework Documentation</span>
              <span>Quick Start Guide</span>
              <span>Executive Summary</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
