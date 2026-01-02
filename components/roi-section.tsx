const industries = [
  {
    name: "Financial Services",
    roi: "12:1",
    description: "Prevent autonomous trading anomalies and protect customer financial data.",
    metrics: ["$4.2M avg. prevented losses", "99.9% compliance rate", "60% faster threat response"],
    color: "bg-green",
  },
  {
    name: "Healthcare",
    roi: "8:1",
    description: "Secure AI agents handling patient data and clinical decision support.",
    metrics: ["HIPAA compliance assured", "Zero patient data breaches", "40% reduced audit time"],
    color: "bg-teal",
  },
  {
    name: "E-Commerce",
    roi: "6:1",
    description: "Protect customer interactions and prevent fraudulent agent behaviors.",
    metrics: ["85% fraud reduction", "$2.1M saved annually", "Customer trust maintained"],
    color: "bg-peach",
  },
  {
    name: "Manufacturing",
    roi: "10:1",
    description: "Secure industrial AI agents controlling critical infrastructure.",
    metrics: ["Zero safety incidents", "100% uptime maintained", "Full audit trail"],
    color: "bg-salmon",
  },
]

export function ROISection() {
  return (
    <section id="roi" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-muted-foreground mb-3">Business Impact</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">Proven ROI Across Industries</h2>
          <p className="mt-4 text-pretty text-muted-foreground max-w-2xl">
            Organizations implementing CAASF see measurable security improvements and significant cost savings.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {industries.map((industry) => (
            <div key={industry.name} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`h-14 w-14 rounded-xl ${industry.color} flex items-center justify-center`}>
                  <svg viewBox="0 0 40 40" className="w-7 h-7">
                    <rect x="10" y="15" width="20" height="15" rx="2" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
                    <path d="M15 15 L15 10 L25 10 L25 15" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
                    <line x1="10" y1="22" x2="30" y2="22" stroke="#1a1a1a" strokeWidth="1.5" />
                  </svg>
                </div>
                <span className="text-3xl font-bold">{industry.roi}</span>
              </div>
              <h3 className="text-xl font-semibold">{industry.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{industry.description}</p>
              <ul className="mt-4 space-y-2">
                {industry.metrics.map((metric) => (
                  <li key={metric} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground" />
                    {metric}
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
