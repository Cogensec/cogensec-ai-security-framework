import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { ArchitectureSection } from "@/components/architecture-section"
import { FrameworkSection } from "@/components/framework-section"
import { ComparisonSection } from "@/components/comparison-section"
import { ROISection } from "@/components/roi-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <ArchitectureSection />
      <FrameworkSection />
      <ComparisonSection />
      <ROISection />
      <RoadmapSection />
      <CTASection />
      <Footer />
    </main>
  )
}
