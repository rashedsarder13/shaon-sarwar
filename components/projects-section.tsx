"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    company: "Buzz Cabs",
    location: "United Kingdom",
    description:
      "UK-based cab rental company. Successfully ranked to position 1 for various important and most searched keywords, resulting in unexpected revenue growth.",
    tags: ["Google Ads", "SEO", "Local SEO"],
    gradient: "from-primary/20 to-secondary/20",
  },
  {
    company: "Z Cars",
    location: "Multiple Locations",
    description:
      "Comprehensive branding strategy to establish strong market presence and recognition in the automotive industry.",
    tags: ["Google Ads", "Branding"],
    gradient: "from-secondary/20 to-accent/20",
  },
  {
    company: "KL Tint Studio",
    location: "Malaysia",
    description:
      "Full-service digital marketing for car tinting company including branding, market reach, Google search ranking, and web app management.",
    tags: ["Google Ads", "Facebook Ads", "SEO", "Web Design"],
    gradient: "from-accent/20 to-primary/20",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            {"FEATURED PROJECTS"}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            {"Delivering measurable results and driving business growth"}
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative bg-card border border-border rounded-2xl p-8 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1 text-card-foreground">{project.company}</h3>
                    <p className="text-sm text-muted-foreground">{project.location}</p>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>

                <p className="text-foreground/80 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
