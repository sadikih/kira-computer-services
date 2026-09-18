import { motion } from 'framer-motion'
import { ArrowUpRight, ShieldCheck, Zap } from 'lucide-react'
import Container from '../ui/Container'
import { heroStats } from '../../data/content'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pb-24 pt-36 sm:pb-32 sm:pt-44"
    >
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[50rem] -translate-x-1/2 rounded-full bg-electric-600/10 blur-[140px]" />

      <Container className="relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-xs font-medium text-ink-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-electric-400" />
            Software, web &amp; AI engineering for ambitious businesses
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            We build the technology
            <br className="hidden sm:block" />{' '}
            behind <span className="text-electric-400">bold companies</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-ink-300 sm:text-lg"
          >
            Kira Computer Services designs and engineers software, websites, digital
            platforms, and custom technology solutions — built to launch fast and
            scale without compromise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="focus-ring group inline-flex items-center gap-2 rounded-full bg-electric-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-electric-600/25 transition-colors hover:bg-electric-600"
            >
              Start Your Project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#work"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/[0.03]"
            >
              View Our Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink-500"
          >
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-electric-400" /> Security-first delivery
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-electric-400" /> Shipped in weeks, not quarters
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mt-20 flex max-w-3xl flex-wrap items-center justify-center gap-x-12 gap-y-6 border-t border-white/10 pt-10"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl font-semibold text-white sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-ink-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
