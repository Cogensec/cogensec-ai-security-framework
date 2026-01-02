import { ArrowRight } from "lucide-react"

const layers = [
  {
    number: "01",
    title: "Identity & Credential Authority",
    description: "Unique agent identities, cryptographic credentials, and lifecycle management.",
  },
  {
    number: "02",
    title: "I/O Security Gateway",
    description: "Input validation, prompt injection defense, and output sanitization.",
  },
  {
    number: "03",
    title: "Policy & Decision Engine",
    description: "Real-time authorization, context-aware access control, and policy enforcement.",
  },
  {
    number: "04",
    title: "Agent Security Runtime",
    description: "Isolated execution, resource limits, and behavioral sandboxing.",
  },
  {
    number: "05",
    title: "Agent Discovery & Registration",
    description: "Zero-trust onboarding, capability attestation, and trust scoring.",
  },
  {
    number: "06",
    title: "API Gateway",
    description: "Tool access control, rate limiting, and cross-agent communication security.",
  },
  {
    number: "07",
    title: "Cognitive Threat Detection",
    description: "Behavioral analytics, anomaly detection, and adversarial pattern recognition.",
  },
]

export function ArchitectureSection() {
  return (
    <section id="architecture" className="py-20 md:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-muted-foreground mb-3">The Solution</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">7-Layer Security Architecture</h2>
          <p className="mt-4 text-pretty text-muted-foreground max-w-2xl">
            CAASF provides a comprehensive, defense-in-depth approach with specialized security layers designed
            specifically for AI agent protection.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {layers.map((layer) => (
            <div
              key={layer.title}
              className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-all hover:bg-secondary/50"
            >
              <div className="flex items-center gap-5">
                <span className="font-mono text-sm text-muted-foreground w-8">{layer.number}</span>
                <div>
                  <h3 className="font-semibold">{layer.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{layer.description}</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
