const phases = [
  {
    name: "Phase 1",
    title: "Foundation",
    duration: "Months 1-3",
    items: [
      "Establish governance structure",
      "Complete agent inventory",
      "Deploy core identity management",
      "Implement basic monitoring",
    ],
  },
  {
    name: "Phase 2",
    title: "Core Protection",
    duration: "Months 4-6",
    items: [
      "Deploy I/O security gateway",
      "Implement policy engine",
      "Enable behavioral analytics",
      "Establish incident response",
    ],
  },
  {
    name: "Phase 3",
    title: "Advanced Security",
    duration: "Months 7-9",
    items: [
      "Multi-agent security controls",
      "Cognitive threat detection",
      "Advanced anomaly detection",
      "Automated response playbooks",
    ],
  },
  {
    name: "Phase 4",
    title: "Optimization",
    duration: "Months 10-12",
    items: ["Continuous improvement", "Compliance certification", "Security automation", "Ecosystem integration"],
  },
]

export function RoadmapSection() {
  return (
    <section className="py-20 md:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-muted-foreground mb-3">Implementation</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            12-Month Implementation Roadmap
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground max-w-2xl">
            A phased approach to implementing comprehensive AI agent security across your organization.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase, index) => (
            <div key={phase.name} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold">{phase.name}</span>
                <span className="text-xs text-muted-foreground">{phase.duration}</span>
              </div>
              <h3 className="text-lg font-semibold mb-4">{phase.title}</h3>
              <ul className="space-y-3">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
