import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { fadeUp, stagger, staggerItem, scaleUp } from '@/lib/animations'
import { Check, X, ChevronDown, ChevronUp, Zap } from 'lucide-react'

const PLANS = [
  {
    name: 'Starter',
    monthlyPrice: 49,
    annualPrice: 39,
    desc: 'For small teams getting started with revenue automation.',
    cta: 'Start Free Trial',
    featured: false,
    features: [
      'Up to 5 users',
      '2,500 leads/month',
      'Core workflow builder',
      'Standard analytics',
      'Email support',
      'Slack integration',
    ],
  },
  {
    name: 'Growth',
    monthlyPrice: 149,
    annualPrice: 119,
    desc: 'For scaling teams that need more power and automation.',
    cta: 'Start Free Trial',
    featured: true,
    badge: 'Most Popular',
    features: [
      'Up to 25 users',
      '25,000 leads/month',
      'Advanced workflow builder',
      'Deep-dive analytics',
      'Smart routing & AI scoring',
      'Priority support',
      'Salesforce & HubSpot sync',
      'Custom dashboards',
    ],
  },
  {
    name: 'Enterprise',
    monthlyPrice: null,
    annualPrice: null,
    desc: 'For large teams with custom needs, security, and compliance.',
    cta: 'Contact Sales',
    featured: false,
    features: [
      'Unlimited users',
      'Unlimited leads',
      'Everything in Growth',
      'Custom data warehouse sync',
      'SSO / SAML 2.0',
      'Dedicated success manager',
      'SOC 2 + GDPR compliance',
      'Custom SLAs & contracts',
    ],
  },
]

const COMPARE_ROWS = [
  { label: 'Users', starter: '5', growth: '25', enterprise: 'Unlimited' },
  { label: 'Leads / month', starter: '2,500', growth: '25,000', enterprise: 'Unlimited' },
  { label: 'Workflow builder', starter: true, growth: true, enterprise: true },
  { label: 'Smart routing (AI)', starter: false, growth: true, enterprise: true },
  { label: 'Deep analytics', starter: false, growth: true, enterprise: true },
  { label: 'Custom dashboards', starter: false, growth: true, enterprise: true },
  { label: 'CRM sync', starter: false, growth: true, enterprise: true },
  { label: 'Data warehouse export', starter: false, growth: false, enterprise: true },
  { label: 'SSO / SAML', starter: false, growth: false, enterprise: true },
  { label: 'SOC 2 / GDPR', starter: false, growth: false, enterprise: true },
  { label: 'Dedicated CSM', starter: false, growth: false, enterprise: true },
]

const FAQS = [
  { q: 'Can I switch plans later?', a: 'Yes. You can upgrade or downgrade at any time. Upgrades take effect immediately, downgrades at the end of your billing cycle.' },
  { q: 'Is there a free trial?', a: 'Starter and Growth both include a 14-day free trial with no credit card required. You get full access from day one.' },
  { q: 'How does per-user pricing work?', a: 'You\'re billed per seat. Add or remove users anytime — your bill adjusts automatically on a pro-rata basis.' },
  { q: 'What CRMs do you integrate with?', a: 'APEX syncs natively with Salesforce, HubSpot, Pipedrive, and 60+ other tools via our two-way API integrations.' },
  { q: 'Do you offer discounts for non-profits or startups?', a: 'Yes — we offer a 30% discount for eligible non-profits and Y Combinator / accelerator-backed startups. Contact us to apply.' },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border/40 py-5">
      <button className="flex items-center justify-between w-full text-left gap-4" onClick={() => setOpen(!open)}>
        <span className="text-hero-heading text-sm font-medium">{q}</span>
        {open ? <ChevronUp size={16} className="text-muted-foreground flex-shrink-0" /> : <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />}
      </button>
      {open && <p className="text-muted-foreground text-sm leading-relaxed mt-3">{a}</p>}
    </div>
  )
}

export function PlansPage() {
  const [annual, setAnnual] = useState(true)
  const heroRef = useRef(null)
  const plansRef = useRef(null)
  const compareRef = useRef(null)
  const faqRef = useRef(null)
  const ctaRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const plansInView = useInView(plansRef, { once: true, amount: 0.1 })
  const compareInView = useInView(compareRef, { once: true, amount: 0.1 })
  const faqInView = useInView(faqRef, { once: true, amount: 0.1 })
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 })

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-20 px-4 text-center" ref={heroRef}>
        <motion.div variants={scaleUp} initial="hidden" animate={heroInView ? 'visible' : 'hidden'}
          className="inline-flex liquid-glass rounded-full px-3 py-1.5 items-center gap-2 text-xs text-muted-foreground mb-8">
          <Zap size={12} /> Simple Pricing
        </motion.div>
        <motion.h1 variants={fadeUp} initial="hidden" animate={heroInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.1 }}
          className="text-hero-heading text-4xl sm:text-6xl font-semibold leading-[1.05] tracking-tight max-w-3xl mx-auto mb-5">
          Transparent Pricing.
          <br />
          <span className="text-gradient">No Hidden Fees.</span>
        </motion.h1>
        <motion.p variants={fadeUp} initial="hidden" animate={heroInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.22 }}
          className="text-hero-sub text-lg max-w-lg mx-auto mb-8">
          Start free, scale as you grow. Every plan includes a 14-day trial with full feature access.
        </motion.p>

        {/* Toggle */}
        <motion.div variants={scaleUp} initial="hidden" animate={heroInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.34 }}
          className="inline-flex items-center gap-3 liquid-glass rounded-full px-2 py-2">
          <button onClick={() => setAnnual(false)}
            className={`px-4 py-1.5 rounded-full text-sm transition-all ${!annual ? 'bg-white/10 text-foreground' : 'text-muted-foreground'}`}>
            Monthly
          </button>
          <button onClick={() => setAnnual(true)}
            className={`px-4 py-1.5 rounded-full text-sm transition-all flex items-center gap-2 ${annual ? 'bg-white/10 text-foreground' : 'text-muted-foreground'}`}>
            Annual
            <span className="text-[10px] text-foreground/50 liquid-glass rounded-full px-2 py-0.5">Save 20%</span>
          </button>
        </motion.div>
      </section>

      {/* Plans */}
      <section className="pb-24 px-4" ref={plansRef}>
        <div className="max-w-5xl mx-auto">
          <motion.div className="grid md:grid-cols-3 gap-5"
            variants={stagger(0.12)} initial="hidden" animate={plansInView ? 'visible' : 'hidden'}>
            {PLANS.map((p) => (
              <motion.div key={p.name} variants={staggerItem}
                className={`liquid-glass rounded-3xl p-8 flex flex-col ${p.featured ? 'ring-1 ring-white/20 relative' : ''}`}>
                {p.featured && p.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="btn-gradient rounded-full px-3 py-1 text-xs font-semibold text-zinc-900 whitespace-nowrap">
                      {p.badge}
                    </div>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-hero-heading text-lg font-semibold mb-2">{p.name}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{p.desc}</p>
                </div>

                <div className="mb-6">
                  {p.monthlyPrice ? (
                    <div className="flex items-end gap-1">
                      <span className="text-foreground text-4xl font-bold">
                        ${annual ? p.annualPrice : p.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground text-sm mb-1">/mo</span>
                    </div>
                  ) : (
                    <div className="text-foreground text-3xl font-bold">Custom</div>
                  )}
                  {annual && p.monthlyPrice && (
                    <p className="text-muted-foreground text-xs mt-1">
                      Billed ${(p.annualPrice! * 12)} annually
                    </p>
                  )}
                </div>

                <Button variant={p.featured ? 'hero' : 'heroSecondary'} className="mb-8">{p.cta}</Button>

                <ul className="space-y-3 flex-1">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-3 text-hero-sub text-sm">
                      <Check size={14} className="text-foreground/60 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Compare table */}
      <section className="py-24 px-4 border-t border-border/40" ref={compareRef}>
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" animate={compareInView ? 'visible' : 'hidden'}
            className="text-center mb-12">
            <h2 className="text-hero-heading text-3xl sm:text-4xl font-semibold mb-3">Compare Plans</h2>
            <p className="text-hero-sub text-sm max-w-sm mx-auto">See exactly what's included at each tier.</p>
          </motion.div>

          <motion.div variants={scaleUp} initial="hidden" animate={compareInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.2 }} className="liquid-glass rounded-3xl overflow-hidden">
            <div className="grid grid-cols-4 border-b border-border/40 px-6 py-4">
              <div className="text-muted-foreground text-xs font-medium">Feature</div>
              {['Starter', 'Growth', 'Enterprise'].map(n => (
                <div key={n} className="text-center text-hero-heading text-xs font-semibold">{n}</div>
              ))}
            </div>
            {COMPARE_ROWS.map((row, i) => (
              <div key={row.label} className={`grid grid-cols-4 px-6 py-4 ${i < COMPARE_ROWS.length - 1 ? 'border-b border-border/20' : ''} hover:bg-white/[0.02] transition-colors`}>
                <div className="text-hero-sub text-sm">{row.label}</div>
                {(['starter', 'growth', 'enterprise'] as const).map(plan => (
                  <div key={plan} className="flex justify-center items-center">
                    {typeof row[plan] === 'boolean' ? (
                      row[plan]
                        ? <Check size={15} className="text-foreground/70" />
                        : <X size={15} className="text-muted-foreground/30" />
                    ) : (
                      <span className="text-hero-heading text-xs font-medium">{row[plan] as string}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 border-t border-border/40" ref={faqRef}>
        <div className="max-w-2xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" animate={faqInView ? 'visible' : 'hidden'}
            className="text-center mb-12">
            <h2 className="text-hero-heading text-3xl sm:text-4xl font-semibold mb-3">Frequently Asked</h2>
            <p className="text-hero-sub text-sm">Everything you need to know before you buy.</p>
          </motion.div>
          <motion.div variants={stagger(0.08)} initial="hidden" animate={faqInView ? 'visible' : 'hidden'}>
            {FAQS.map((faq) => (
              <motion.div key={faq.q} variants={staggerItem}>
                <FaqItem {...faq} />
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
              Still Have Questions?
            </h2>
            <p className="text-hero-sub text-sm mb-8 max-w-xs mx-auto">
              Our team is happy to walk you through pricing and find the right plan for your business.
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
