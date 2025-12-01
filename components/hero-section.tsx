"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8a2b2b] via-[#ff5959] to-[#ff7733] opacity-20 animate-gradient" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block"
          >
            <span className="text-primary font-mono text-sm tracking-wider uppercase bg-primary/10 px-4 py-2 rounded-full border border-primary/30">
              {"Digital Marketing Specialist"}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            {"SHAON"}
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {"SARWAR"}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl text-foreground/80 leading-relaxed text-pretty max-w-xl"
          >
            {
              "Maximize your online presence and reach your target audience with expertly crafted Google Ads, Facebook Ads, and Search Engine Optimization strategies. Proven track record of delivering results."
            }
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              {"Get Started"}
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-card border border-border text-card-foreground rounded-lg font-semibold hover:bg-card/80 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              {"View Projects"}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-full max-w-md mx-auto">
            {/* Glowing effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-30 blur-3xl animate-glow" />

            {/* Image container */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20 animate-float">
              <Image
                src="/images/image.png"
                alt="Shaon Sarwar"
                width={500}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse delay-1000" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
