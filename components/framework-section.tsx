"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const functions = [
  {
    id: "identify",
    title: "Identify",
    description: "Establish comprehensive visibility into AI agent assets, risks, and governance requirements.",
    controls: ["Agent Inventory Management", "Risk Assessment", "Governance Framework", "Supply Chain Security"],
  },
  {
    id: "protect",
    title: "Protect",
    description: "Implement safeguards to ensure secure AI agent operations and data protection.",
    controls: ["Identity Management", "Access Control", "Data Security", "Secure Development"],
  },
  {
    id: "detect",
    title: "Detect",
    description: "Deploy continuous monitoring to identify security events and anomalies in real-time.",
    controls: ["Continuous Monitoring", "Behavioral Analytics", "Anomaly Detection", "Threat Intelligence"],
  },
  {
    id: "respond",
    title: "Respond",
    description: "Execute coordinated response actions when security incidents are detected.",
    controls: ["Response Planning", "Communication", "Analysis", "Mitigation"],
  },
  {
    id: "recover",
    title: "Recover",
    description: "Restore AI agent operations and implement improvements after security incidents.",
    controls: ["Recovery Planning", "System Restoration", "Lessons Learned", "Continuous Improvement"],
  },
]

const domains = [
  "Identity & Access Management",
  "Intent & Reasoning Security",
  "Tool & Resource Access",
  "Behavioral Monitoring",
  "Multi-Agent Security",
  "Data & Privacy Protection",
  "Adversarial Robustness",
  "Compliance & Governance",
  "Incident Response",
]

export function FrameworkSection() {
  const [activeFunction, setActiveFunction] = useState("identify")
  const currentFunction = functions.find((f) => f.id === activeFunction)

  return (
    <section id="framework" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-muted-foreground mb-3">Core Framework</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            5 Functions. 9 Domains. 26 Categories.
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground max-w-2xl">
            Built on proven cybersecurity principles and extended for the unique requirements of autonomous AI systems.
          </p>
        </div>

        <div className="mt-12">
          <div className="flex flex-wrap gap-2 mb-8">
            {functions.map((fn) => (
              <button
                key={fn.id}
                onClick={() => setActiveFunction(fn.id)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-medium transition-all",
                  activeFunction === fn.id
                    ? "bg-foreground text-background"
                    : "bg-card border border-border hover:bg-secondary",
                )}
              >
                {fn.title}
              </button>
            ))}
          </div>

          {currentFunction && (
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-2xl font-semibold">{currentFunction.title}</h3>
              <p className="mt-2 text-muted-foreground">{currentFunction.description}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {currentFunction.controls.map((control) => (
                  <div key={control} className="flex items-center gap-3 rounded-lg bg-secondary/50 px-4 py-3">
                    <div className="h-2 w-2 rounded-full bg-foreground" />
                    <span className="text-sm">{control}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6">9 Security Domains</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {domains.map((domain, index) => (
              <div key={domain} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary font-mono text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium">{domain}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
