import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, stagger, staggerItem, slideLeft, slideRight, scaleUp } from '@/lib/animations'
import { TrendingUp, Megaphone, Settings2, ChevronRight, Star } from 'lucide-react'

const SOLUTIONS = [
  {
    icon: TrendingUp,
    tag: 'Sales Teams',
    title: 'Close More Deals, Faster',
    desc: 'Give your reps a single workspace for every lead, deal, and follow-up. APEX eliminates context switching so they can focus on what they do best — selling.',
    bullets: ['Intelligent lead prioritisation', 'Automated outreach sequences', 'Real-time deal coaching', 'Pipeline forecasting with 91% accuracy'],
    stat: { value: '3.2×', label: 'faster pipeline velocity' },
  },
  {
    icon: Megaphone,
    tag: 'Marketing Teams',
    title: 'Campaigns That Convert, Not Just Impress',
    desc: 'Connect every campaign directly to revenue. Track attribution across every channel, optimise spend in real time, and hand off only the hottest leads to sales.',
    bullets: ['Multi-touch attribution', 'Campaign ROI dashboards', 'Lead scoring & segmentation', 'A/B testing at every stage'],
    stat: { value: '148%', label: 'avg. conversion lift' },
  },
  {
    icon: Settings2,
    tag: 'Revenue Operations',
    title: 'One Source of Truth for the Whole Funnel',
    desc: 'Unify your tech stack, enforce process, and surface insights that drive strategic decisions. RevOps teams run tighter, cleaner, and with full confidence.',
    bullets: ['CRM + warehouse bi-directional sync', 'Process enforcement & guardrails', 'Cross-team visibility & reporting', 'SOC 2 & GDPR compliance built-in'],
    stat: { value: '99.97%', label: 'platform uptime SLA' },
  },
]

const CASE_STUDIES = [
  {
    company: 'Meridian Health',
    role: 'VP Revenue',
    name: 'Clara Whitfield',
    quote: 'APEX cut our sales cycle by 12 days and our win rate jumped 47%. The ROI was visible in the first month.',
    metric: '+47%',
    metricLabel: 'win rate',
  },
  {
    company: 'Baseform',
    role: 'Growth Lead',
    name: 'Derek Tanaka',
    quote: 'We replaced three tools with one. The analytics alone are worth the switch — finally seeing the full funnel in real time.',
    metric: '3×',
    metricLabel: 'pipeline output',
  },
  {
    company: 'Alpenhaus Group',
    role: 'CRO',
    name: 'Simone Reuter',
    quote: 'Board-level forecast accuracy for the first time. 91% is not a number we ever saw with our old stack.',
    metric: '91%',
    metricLabel: 'forecast accuracy',
  },
]

export function SolutionsPage() {
  const heroRef = useRef(null)
  const solRef = useRef(null)
  const caseRef = useRef(null)
  const ctaRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const caseInView = useInView(caseRef, { once: true, amount: 0.1 })
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 })

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-28 px-4 text-center" ref={heroRef}>
        <motion.div variants={scaleUp} initial="hidden" animate={heroInView ? 'visible' : 'hidden'}
          className="inline-flex liquid-glass rounded-full px-4 py-1.5 items-center gap-2 text-xs text-muted-foreground mb-8">
          Built for Every Team <ChevronRight size={11} />
        </motion.div>
        <motion.h1 variants={fadeUp} initial="hidden" animate={heroInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.1 }}
          className="text-hero-heading text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight max-w-4xl mx-auto mb-6">
          Revenue Solutions
          <br />
          <span className="text-gradient">Tailored to Your Role</span>
        </motion.h1>
        <motion.p variants={fadeUp} initial="hidden" animate={heroInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.22 }}
          className="text-hero-sub text-lg max-w-xl mx-auto mb-10">
          Whether you're closing deals, running campaigns, or managing the full funnel — APEX is built specifically for how your team works.
        </motion.p>
        <motion.div variants={stagger(0.1)} initial="hidden" animate={heroInView ? 'visible' : 'hidden'}
          transition={{ delayChildren: 0.34 }} className="flex flex-wrap gap-4 justify-center">
          <motion.div variants={staggerItem}><Button variant="hero">Find Your Solution</Button></motion.div>
          <motion.div variants={staggerItem}><Button variant="heroSecondary">Talk to an Expert</Button></motion.div>
        </motion.div>
      </section>

      <div className="border-t border-border/40" />

      {/* Solutions */}
      <section className="py-6" ref={solRef}>
        {SOLUTIONS.map((s, i) => (
          <div key={s.tag} className={`py-24 px-4 ${i > 0 ? 'border-t border-border/30' : ''}`}>
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
              {/* Content */}
              <motion.div
                variants={i % 2 === 0 ? slideLeft : slideRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className={i % 2 === 0 ? '' : 'order-2 lg:order-1'}
              >
                <div className="inline-flex items-center gap-2 liquid-glass rounded-full px-3 py-1.5 mb-6">
                  <s.icon size={13} className="text-foreground/60" />
                  <span className="text-xs text-muted-foreground">{s.tag}</span>
                </div>
                <h2 className="text-hero-heading text-3xl sm:text-4xl font-semibold leading-tight mb-5">{s.title}</h2>
                <p className="text-hero-sub text-base leading-relaxed mb-7">{s.desc}</p>
                <ul className="space-y-3 mb-8">
                  {s.bullets.map(b => (
                    <li key={b} className="flex items-center gap-3 text-hero-sub text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/50 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Button variant="hero">Explore {s.tag} <ChevronRight size={14} /></Button>
              </motion.div>

              {/* Visual card */}
              <motion.div
                variants={i % 2 === 0 ? slideRight : slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className={i % 2 === 0 ? '' : 'order-1 lg:order-2'}
              >
                <div className="liquid-glass rounded-3xl aspect-[4/3] flex flex-col items-center justify-center gap-6 p-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center">
                    <s.icon size={28} className="text-foreground/60" />
                  </div>
                  <div className="text-center">
                    <div className="text-gradient text-5xl font-semibold tracking-tight">{s.stat.value}</div>
                    <div className="text-muted-foreground text-sm mt-2">{s.stat.label}</div>
                  </div>
                  <div className="w-full h-px bg-border/50" />
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={13} className="text-foreground/30 fill-foreground/30" />)}
                    <span className="text-muted-foreground text-xs ml-2">Rated #1 in G2 2026</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </section>

      {/* Case studies */}
      <section className="py-28 px-4 border-t border-border/40" ref={caseRef}>
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" animate={caseInView ? 'visible' : 'hidden'}
            className="text-center mb-16">
            <h2 className="text-hero-heading text-3xl sm:text-5xl font-semibold mb-4">Real Teams, Real Results</h2>
            <p className="text-hero-sub text-base max-w-md mx-auto">The numbers speak for themselves.</p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-6"
            variants={stagger(0.15)} initial="hidden" animate={caseInView ? 'visible' : 'hidden'}>
            {CASE_STUDIES.map((c, i) => (
              <motion.div key={c.name} variants={staggerItem}
                className={`liquid-glass rounded-3xl p-8 hover:bg-white/[0.03] transition-colors ${i === 1 ? 'md:-translate-y-4' : ''}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-gradient text-3xl font-bold">{c.metric}</div>
                  <div className="text-muted-foreground text-sm">{c.metricLabel}</div>
                </div>
                <p className="text-hero-sub text-sm leading-relaxed mb-6">"{c.quote}"</p>
                <div className="border-t border-border/50 pt-5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-xs font-semibold text-foreground/70">
                    {c.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-hero-heading text-sm font-medium">{c.name}</div>
                    <div className="text-muted-foreground text-xs">{c.role}, {c.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 border-t border-border/30" ref={ctaRef}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div variants={scaleUp} initial="hidden" animate={ctaInView ? 'visible' : 'hidden'}
            className="liquid-glass rounded-[2rem] p-12 sm:p-16">
            <h2 className="text-hero-heading text-3xl sm:text-4xl font-semibold mb-4">
              Find Your Perfect<br />Solution Today
            </h2>
            <p className="text-hero-sub text-sm mb-8 max-w-xs mx-auto">
              Talk to a solutions expert. We'll map APEX to your exact team and workflow.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero">Talk to Sales</Button>
              <Button variant="heroSecondary">Start Free Trial</Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
