"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
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
            {"LET'S CONNECT"}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            {"Ready to elevate your digital marketing? Get in touch today."}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: Mail,
              label: "Email",
              value: "fastrankonline@gmail.com",
              href: "mailto:fastrankonline@gmail.com",
            },
            {
              icon: Phone,
              label: "Phone",
              value: "+880 1405 816758",
              href: "tel:+8801405816758",
            },
            {
              icon: MapPin,
              label: "Location",
              value: "Narayanganj, Bangladesh",
              href: null,
            },
          ].map((contact, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: contact.href ? 1.05 : 1 }}
              className="group"
            >
              {contact.href ? (
                <a
                  href={contact.href}
                  className="block relative bg-card border border-border rounded-2xl p-6 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative">
                    <div className="mb-4 p-3 bg-primary/10 rounded-xl w-fit mx-auto">
                      <contact.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">{contact.label}</p>
                    <p className="text-sm font-medium text-card-foreground text-center">{contact.value}</p>
                  </div>
                </a>
              ) : (
                <div className="relative bg-card border border-border rounded-2xl p-6 backdrop-blur-sm">
                  <div className="mb-4 p-3 bg-primary/10 rounded-xl w-fit mx-auto">
                    <contact.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">{contact.label}</p>
                  <p className="text-sm font-medium text-card-foreground text-center">{contact.value}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="mailto:fastrankonline@gmail.com"
            className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
          >
            {"Send a Message"}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
