import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HlsVideo } from '@/components/HlsVideo'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { slideLeft, slideRight, stagger, staggerItem } from '@/lib/animations'

export function ChessSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-32 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Left: Video */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="liquid-glass rounded-3xl aspect-[4/3] overflow-hidden"
        >
          <HlsVideo
            src="https://stream.mux.com/1CCfG6mPC7LbMO01n01pqkBZ8PkpSXuXOo/low.m3u8"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="inline-flex liquid-glass rounded-full px-4 py-2 items-center gap-2 text-sm mb-6">
            <span className="text-foreground/60">Smart Routing</span>
            <span className="liquid-glass rounded-full px-2 py-0.5 flex items-center gap-1 text-xs text-foreground/80 font-medium">
              New <ChevronRight size={11} />
            </span>
          </div>

          <h2 className="text-hero-heading text-3xl sm:text-4xl font-semibold leading-tight mb-5">
            Every Lead Finds
            <br />
            Its Perfect Path
          </h2>

          <p className="text-hero-sub text-base leading-relaxed mb-7">
            Intelligent lead scoring meets adaptive routing. Each prospect is matched to the rep,
            sequence, and cadence most likely to convert — in real time.
          </p>

          <motion.ul
            className="space-y-3 mb-8"
            variants={stagger(0.1)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delayChildren: 0.4 }}
          >
            {['AI-scored lead qualification', 'Dynamic rep assignment', 'Multi-touch attribution'].map((item) => (
              <motion.li
                key={item}
                variants={staggerItem}
                className="flex items-center gap-3 text-hero-sub text-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="flex flex-wrap gap-4"
            variants={stagger(0.1)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delayChildren: 0.6 }}
          >
            <motion.div variants={staggerItem}>
              <Button variant="hero">See It in Action</Button>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Button variant="heroSecondary">Read the Docs</Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
