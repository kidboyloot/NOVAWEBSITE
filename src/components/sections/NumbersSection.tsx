import { HlsVideo } from '@/components/HlsVideo'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useCountUp } from '@/hooks/useCountUp'
import { fadeUp, stagger, staggerItem } from '@/lib/animations'

function AnimatedStat({
  prefix = '',
  value,
  suffix = '',
  decimals = 0,
  inView,
  label,
  description,
}: {
  prefix?: string
  value: number
  suffix?: string
  decimals?: number
  inView: boolean
  label: string
  description: string
}) {
  const count = useCountUp(value, 2200, inView, decimals)
  return (
    <div className="text-center">
      <div className="text-primary text-5xl sm:text-6xl font-semibold tracking-tight">
        {prefix}{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}
      </div>
      <div className="text-hero-heading text-lg font-medium mt-3">{label}</div>
      <p className="text-muted-foreground text-sm mt-2 max-w-xs mx-auto">{description}</p>
    </div>
  )
}

export function NumbersSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.25 })

  const heroCount = useCountUp(4.7, 2400, inView, 1)

  return (
    <section className="relative py-32 px-4 overflow-hidden" ref={ref}>
      <HlsVideo
        src="https://stream.mux.com/Kec29dVyJgiPdtWyisLFGc2hBxvKkgD7/low.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, hsl(260 87% 3%) 0%, hsl(260 87% 3% / 0.85) 15%, hsl(260 87% 3% / 0.4) 40%, hsl(260 87% 3% / 0.15) 60%, hsl(260 87% 3% / 0.3) 100%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Hero metric */}
        <motion.div
          className="text-center mb-24"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="text-primary text-7xl sm:text-[8rem] lg:text-[10rem] font-semibold tracking-tighter leading-none">
            ${heroCount.toFixed(1)}B
          </div>
          <div className="text-hero-heading text-xl font-medium mt-4">Revenue influenced</div>
          <p className="text-muted-foreground text-sm mt-2 max-w-xs mx-auto">
            Across thousands of teams and millions of customer interactions worldwide.
          </p>
        </motion.div>

        {/* Bottom two metrics */}
        <motion.div
          className="liquid-glass rounded-3xl p-12 grid md:grid-cols-2 gap-12"
          variants={stagger(0.2)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={staggerItem}>
            <AnimatedStat
              value={18}
              suffix="M"
              inView={inView}
              label="Leads processed monthly"
              description="Scored, routed, and tracked across every channel your team uses."
            />
          </motion.div>
          <motion.div variants={staggerItem} className="md:border-l border-border/50">
            <AnimatedStat
              value={99.97}
              suffix="%"
              decimals={2}
              inView={inView}
              label="Platform uptime"
              description="Enterprise-grade reliability with redundant infrastructure in every region."
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
