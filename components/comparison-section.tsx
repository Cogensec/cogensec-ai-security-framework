import { Check, Minus } from "lucide-react"

const frameworks = [
  { name: "CAASF", type: "AI Agent Security" },
  { name: "NIST AI RMF", type: "AI Risk Management" },
  { name: "COSAIS", type: "AI Safety" },
  { name: "ISO 42001", type: "AI Management" },
  { name: "SOC 2", type: "General Security" },
]

const capabilities = [
  { name: "Agent Identity Management", caasf: true, nist: false, cosais: false, iso: false, soc: false },
  { name: "Autonomous Action Controls", caasf: true, nist: false, cosais: true, iso: false, soc: false },
  { name: "Tool Access Security", caasf: true, nist: false, cosais: false, iso: false, soc: false },
  { name: "Multi-Agent Security", caasf: true, nist: false, cosais: false, iso: false, soc: false },
  { name: "Cognitive Threat Detection", caasf: true, nist: false, cosais: false, iso: false, soc: false },
  { name: "Behavioral Monitoring", caasf: true, nist: true, cosais: true, iso: false, soc: true },
  { name: "Risk Assessment", caasf: true, nist: true, cosais: true, iso: true, soc: true },
  { name: "Incident Response", caasf: true, nist: true, cosais: false, iso: true, soc: true },
]

export function ComparisonSection() {
  return (
    <section id="comparison" className="py-20 md:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-muted-foreground mb-3">Framework Comparison</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Why Existing Frameworks Fall Short
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground max-w-2xl">
            Traditional frameworks weren&apos;t designed for autonomous AI agents. CAASF fills the critical gaps.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-medium">Capability</th>
                {frameworks.map((fw) => (
                  <th key={fw.name} className="p-4 text-center">
                    <div className="font-semibold">{fw.name}</div>
                    <div className="text-xs font-normal text-muted-foreground">{fw.type}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {capabilities.map((cap, idx) => (
                <tr key={cap.name} className={idx !== capabilities.length - 1 ? "border-b border-border" : ""}>
                  <td className="p-4 font-medium text-sm">{cap.name}</td>
                  <td className="p-4 text-center">
                    {cap.caasf ? (
                      <div className="mx-auto h-6 w-6 rounded-full bg-green flex items-center justify-center">
                        <Check className="h-4 w-4 text-foreground" />
                      </div>
                    ) : (
                      <Minus className="mx-auto h-5 w-5 text-muted-foreground" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {cap.nist ? (
                      <Check className="mx-auto h-5 w-5 text-muted-foreground" />
                    ) : (
                      <Minus className="mx-auto h-5 w-5 text-muted-foreground/50" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {cap.cosais ? (
                      <Check className="mx-auto h-5 w-5 text-muted-foreground" />
                    ) : (
                      <Minus className="mx-auto h-5 w-5 text-muted-foreground/50" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {cap.iso ? (
                      <Check className="mx-auto h-5 w-5 text-muted-foreground" />
                    ) : (
                      <Minus className="mx-auto h-5 w-5 text-muted-foreground/50" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {cap.soc ? (
                      <Check className="mx-auto h-5 w-5 text-muted-foreground" />
                    ) : (
                      <Minus className="mx-auto h-5 w-5 text-muted-foreground/50" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
