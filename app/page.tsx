import { AnimatedBackground } from "@/components/animated-background"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">{"© 2025 Shaon Sarwar. All rights reserved."}</p>
        </div>
      </footer>
    </main>
  )
}
