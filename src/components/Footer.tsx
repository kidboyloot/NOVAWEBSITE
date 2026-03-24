import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { stagger, staggerItem, fadeUp } from '@/lib/animations'

const FOOTER_LINKS = {
  Product: ['Features', 'Pricing', 'Integrations', 'Changelog', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Resources: ['Documentation', 'Community', 'Support', 'Status'],
}

export function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <footer className="border-t border-border/40 px-4 pb-10 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 py-14"
          variants={stagger(0.07)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={staggerItem} className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-b from-white/20 to-white/5 border border-white/10 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-white">
                  <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="7" cy="7" r="1.8" fill="currentColor" />
                  <line x1="7" y1="1" x2="7" y2="4" stroke="currentColor" strokeWidth="1.2" />
                  <line x1="7" y1="10" x2="7" y2="13" stroke="currentColor" strokeWidth="1.2" />
                  <line x1="1" y1="7" x2="4" y2="7" stroke="currentColor" strokeWidth="1.2" />
                  <line x1="10" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>
              <span className="text-xl font-semibold text-foreground">APEX</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              The revenue acceleration platform for teams that refuse to settle. Built for speed, designed for scale.
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
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.35 }}
          className="border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
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
  )
}
