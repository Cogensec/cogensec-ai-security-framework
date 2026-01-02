const risks = [
  {
    title: "Reasoning Manipulation",
    description: "Attackers can influence agent decision-making through adversarial prompts and context poisoning.",
    color: "bg-green",
  },
  {
    title: "Autonomous Action Risks",
    description: "Agents can execute high-impact actions without real-time human oversight or approval.",
    color: "bg-peach",
  },
  {
    title: "Tool Chain Vulnerabilities",
    description: "Each integrated tool expands the attack surface with potential for privilege escalation.",
    color: "bg-teal",
  },
  {
    title: "Multi-Agent Collusion",
    description: "Compromised agents can influence other agents in orchestrated swarms.",
    color: "bg-salmon",
  },
  {
    title: "Emergent Behaviors",
    description: "AI systems can develop unexpected behaviors that bypass traditional security controls.",
    color: "bg-green",
  },
  {
    title: "Regulatory Uncertainty",
    description: "Existing frameworks lack guidance for AI agent-specific compliance requirements.",
    color: "bg-peach",
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            AI Agents Introduce Novel Security Risks
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground max-w-2xl">
            Traditional cybersecurity frameworks were designed for static software. AI agents operate with autonomy,
            reasoning, and tool access that create entirely new attack vectors.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {risks.map((risk) => (
            <div key={risk.title} className="rounded-xl border border-border bg-card p-6">
              <div className={`h-16 w-16 rounded-xl ${risk.color} mb-5 flex items-center justify-center`}>
                <svg viewBox="0 0 40 40" className="w-8 h-8">
                  <circle cx="20" cy="20" r="8" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
                  <path
                    d="M20 12 L20 8 M20 28 L20 32 M12 20 L8 20 M28 20 L32 20"
                    stroke="#1a1a1a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">{risk.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{risk.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
