import { Button } from '@/components/ui/button'
import { HlsVideo } from '@/components/HlsVideo'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { scaleUp, fadeUp, stagger, staggerItem } from '@/lib/animations'

const FOOTER_LINKS = {
  Product: ['Features', 'Pricing', 'Integrations', 'Changelog', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Resources: ['Documentation', 'Community', 'Support', 'Status'],
}

export function CTAFooterWrapper() {
  const ctaRef = useRef(null)
  const footerRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 })
  const footerInView = useInView(footerRef, { once: true, amount: 0.2 })

  return (
    <div className="relative overflow-hidden">
      <HlsVideo
        src="https://stream.mux.com/tLkHO1qZoaaQOUupGmtsDR01DPiKbBcl4/low.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, hsl(0 0% 4%) 0%, hsl(260 87% 3% / 0.85) 15%, hsl(260 87% 3% / 0.4) 40%, hsl(260 87% 3% / 0.15) 60%, hsl(260 87% 3% / 0.3) 100%)',
        }}
      />

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-4" ref={ctaRef}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={scaleUp}
            initial="hidden"
            animate={ctaInView ? 'visible' : 'hidden'}
            className="liquid-glass rounded-[2rem] p-12 sm:p-20 text-center"
          >
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={ctaInView ? 'visible' : 'hidden'}
              transition={{ delay: 0.15 }}
              className="text-hero-heading text-3xl sm:text-5xl font-semibold leading-tight mb-5"
            >
              Ready to Outpace
              <br />
              Your Pipeline Targets?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={ctaInView ? 'visible' : 'hidden'}
              transition={{ delay: 0.28 }}
              className="text-hero-sub text-base max-w-sm mx-auto mb-10"
            >
              Join 2,400+ teams already accelerating revenue with APEX. No credit card required.
            </motion.p>
            <motion.div
              variants={stagger(0.1)}
              initial="hidden"
              animate={ctaInView ? 'visible' : 'hidden'}
              transition={{ delayChildren: 0.42 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.div variants={staggerItem}>
                <Button variant="hero">Start Free Today</Button>
              </motion.div>
              <motion.div variants={staggerItem}>
                <Button variant="heroSecondary">Talk to Sales</Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/30 px-4 pb-10" ref={footerRef}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 py-14"
            variants={stagger(0.08)}
            initial="hidden"
            animate={footerInView ? 'visible' : 'hidden'}
          >
            {/* Brand */}
            <motion.div variants={staggerItem} className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-b from-secondary to-muted flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-foreground/80">
                    <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1" />
                    <circle cx="7" cy="7" r="1.5" fill="currentColor" />
                    <line x1="7" y1="1" x2="7" y2="4" stroke="currentColor" strokeWidth="1" />
                    <line x1="7" y1="10" x2="7" y2="13" stroke="currentColor" strokeWidth="1" />
                    <line x1="1" y1="7" x2="4" y2="7" stroke="currentColor" strokeWidth="1" />
                    <line x1="10" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
                <span className="text-xl font-semibold text-foreground">APEX</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                The revenue acceleration platform for teams that refuse to settle. Built for speed,
                designed for scale.
              </p>
            </motion.div>

            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <motion.div key={title} variants={staggerItem}>
                <h4 className="text-hero-heading text-sm font-semibold mb-4">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={footerInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.4 }}
            className="border-t border-border/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <p className="text-muted-foreground text-sm">© 2026 APEX Inc.</p>
            <div className="flex gap-6">
              {['Privacy', 'Terms', 'Cookies'].map((item) => (
                <a key={item} href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
