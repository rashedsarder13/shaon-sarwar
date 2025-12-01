"use client"

import { motion } from "framer-motion"
import { TrendingUp, Target, Search, BarChart3, Globe, Smartphone } from "lucide-react"

const services = [
  {
    icon: Target,
    title: "Google Ads",
    description: "Strategic campaign management to maximize ROI and reach your ideal customers.",
  },
  {
    icon: Smartphone,
    title: "Facebook Ads",
    description: "Engaging social media campaigns that convert and build brand awareness.",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Boost organic rankings and drive qualified traffic to your website.",
  },
  {
    icon: TrendingUp,
    title: "Keywords Research",
    description: "In-depth analysis to identify high-value keywords for your business.",
  },
  {
    icon: Globe,
    title: "Web Design",
    description: "Modern, conversion-focused websites built with WordPress.",
  },
  {
    icon: BarChart3,
    title: "Local SEO",
    description: "Dominate local search results and attract nearby customers.",
  },
]

const additionalServices = ["Google Analytics", "Conversion Tracking", "Facebook Pixel", "WordPress"]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

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
            {"SERVICES"}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            {"Comprehensive digital marketing solutions tailored to your business needs"}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative bg-card border border-border rounded-2xl p-6 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <div className="mb-4 p-3 bg-primary/10 rounded-xl w-fit">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-card-foreground">{service.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {additionalServices.map((service, index) => (
            <motion.span
              key={service}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="px-6 py-3 bg-muted border border-border rounded-full text-sm font-medium text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all duration-300 cursor-default"
            >
              {service}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
