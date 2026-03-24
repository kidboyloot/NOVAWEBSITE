import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, stagger, staggerItem, slideLeft, slideRight, scaleUp } from '@/lib/animations'
import {
  Zap, BarChart3, Shield, GitBranch, Users, Globe, Bell, Lock, ArrowRight,
  RefreshCw, Target, TrendingUp, Database, Workflow, Layers
} from 'lucide-react'

const CORE_FEATURES = [
  { icon: Zap, title: 'Lightning Workflows', desc: 'Automate any process in minutes with a no-code builder. Drag, drop, and deploy pipelines that adapt to your team\'s rhythm.', tag: 'Automation' },
  { icon: BarChart3, title: 'Deep Analytics', desc: 'Real-time cohort analysis, conversion funnels, and custom dashboards. See every metric that matters — no setup required.', tag: 'Analytics' },
  { icon: Shield, title: 'Compliance Engine', desc: 'SOC 2, GDPR, and HIPAA baked in from day one. Every interaction is logged, audited, and fully traceable.', tag: 'Security' },
  { icon: Target, title: 'Smart Routing', desc: 'AI-powered lead scoring and rep assignment. Each prospect reaches the right person at exactly the right moment.', tag: 'AI' },
  { icon: GitBranch, title: 'Pipeline Studio', desc: 'Visual funnel builder with live conversion metrics at every stage. Know precisely where deals stall — and why.', tag: 'Pipeline' },
  { icon: Globe, title: 'Multi-Channel', desc: 'Unify email, chat, call, and social into one coherent journey. Every touchpoint tracked and attributed automatically.', tag: 'Channels' },
]

const DETAIL_FEATURES = [
  { icon: Users, title: 'Team Collaboration', desc: 'Real-time co-editing, shared queues, and role-based views. Your team always sees what they need.' },
  { icon: Bell, title: 'Smart Alerts', desc: 'Proactive notifications for deal changes, stage drops, and anomalies. Never miss a critical moment.' },
  { icon: Lock, title: 'Enterprise SSO', desc: 'SAML 2.0, Okta, and Azure AD out of the box. One login for your entire revenue stack.' },
  { icon: RefreshCw, title: 'Two-Way Sync', desc: 'Bi-directional sync with Salesforce, HubSpot, and 60+ tools. Your CRM is always in lockstep.' },
  { icon: Database, title: 'Data Warehouse', desc: 'Push your APEX data to Snowflake, BigQuery, or Redshift in real time. Own your data completely.' },
  { icon: Workflow, title: 'API & Webhooks', desc: 'REST API with 99.97% uptime. Trigger anything from anywhere with granular webhook controls.' },
  { icon: TrendingUp, title: 'Forecasting', desc: '91% forecast accuracy powered by ML models trained on 18M+ deals. Reliable revenue prediction.' },
  { icon: Layers, title: 'Custom Objects', desc: 'Model your business exactly as it is. Create custom objects, fields, and relationships without limits.' },
]


export function FeaturesPage() {
  const heroRef = useRef(null)
  const coreRef = useRef(null)
  const detailRef = useRef(null)
  const ctaRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const coreInView = useInView(coreRef, { once: true, amount: 0.1 })
  const detailInView = useInView(detailRef, { once: true, amount: 0.1 })
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 })

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-32 px-4 text-center" ref={heroRef}>
        <motion.div variants={scaleUp} initial="hidden" animate={heroInView ? 'visible' : 'hidden'}
          className="inline-flex liquid-glass rounded-full px-4 py-1.5 items-center gap-2 text-xs text-muted-foreground mb-8">
          Platform Overview
          <span className="liquid-glass rounded-full px-2 py-0.5 text-foreground/70">All Features</span>
        </motion.div>

        <motion.h1 variants={fadeUp} initial="hidden" animate={heroInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.1 }}
          className="text-hero-heading text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight max-w-4xl mx-auto mb-6">
          Every Tool Your Revenue
          <br />
          <span className="text-gradient">Team Will Ever Need</span>
        </motion.h1>

        <motion.p variants={fadeUp} initial="hidden" animate={heroInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.22 }}
          className="text-hero-sub text-lg max-w-xl mx-auto mb-10">
          One platform replacing five tools. No duct tape, no data silos, no switching tabs. Just revenue.
        </motion.p>

        <motion.div variants={stagger(0.1)} initial="hidden" animate={heroInView ? 'visible' : 'hidden'}
          transition={{ delayChildren: 0.34 }} className="flex flex-wrap gap-4 justify-center">
          <motion.div variants={staggerItem}><Button variant="hero">Start Free — No Card Needed</Button></motion.div>
          <motion.div variants={staggerItem}><Button variant="heroSecondary">View Pricing</Button></motion.div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="border-t border-border/40" />

      {/* Core features grid */}
      <section className="py-28 px-4" ref={coreRef}>
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" animate={coreInView ? 'visible' : 'hidden'}
            className="text-center mb-16">
            <h2 className="text-hero-heading text-3xl sm:text-5xl font-semibold leading-tight mb-4">
              Core Platform Capabilities
            </h2>
            <p className="text-hero-sub text-base max-w-lg mx-auto">
              Six foundational modules that power your entire revenue motion.
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={stagger(0.1)} initial="hidden" animate={coreInView ? 'visible' : 'hidden'}>
            {CORE_FEATURES.map((f) => (
              <motion.div key={f.title} variants={staggerItem}
                className="liquid-glass rounded-3xl p-8 hover:bg-white/[0.03] transition-all duration-300 group cursor-pointer">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors">
                    <f.icon size={18} className="text-foreground/80" />
                  </div>
                  <span className="text-xs text-muted-foreground liquid-glass rounded-full px-2.5 py-1">{f.tag}</span>
                </div>
                <h3 className="text-hero-heading text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                <div className="flex items-center gap-1 mt-5 text-xs text-foreground/40 group-hover:text-foreground/70 transition-colors">
                  Learn more <ArrowRight size={12} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Chess-style highlight: Workflow builder */}
      <section className="py-24 px-4 border-t border-border/30">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div variants={slideLeft} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <div className="liquid-glass rounded-3xl aspect-[4/3] overflow-hidden bg-gradient-to-br from-white/[0.04] to-white/[0.01] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className={`h-12 rounded-xl liquid-glass ${i === 4 ? 'border border-white/20' : ''}`} />
                  ))}
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-white/40 to-white/20 rounded-full" style={{ width: '68%' }} />
                </div>
                <p className="text-muted-foreground text-xs mt-3">Pipeline progress: 68%</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={slideRight} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <span className="liquid-glass rounded-full px-3 py-1 text-xs text-muted-foreground inline-block mb-5">Workflow Builder</span>
            <h2 className="text-hero-heading text-3xl sm:text-4xl font-semibold leading-tight mb-5">
              Build Any Workflow
              <br />
              Without Engineering
            </h2>
            <p className="text-hero-sub text-base leading-relaxed mb-7">
              Drag-and-drop logic blocks, conditional branches, and parallel paths. Deploy complex revenue workflows in minutes — not sprints.
            </p>
            <ul className="space-y-3 mb-8">
              {['100+ pre-built workflow templates', 'Conditional logic & A/B branching', 'Slack, email & CRM integrations built-in', 'Full audit trail on every execution'].map(item => (
                <li key={item} className="flex items-center gap-3 text-hero-sub text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="hero">Explore Workflows</Button>
          </motion.div>
        </div>
      </section>

      {/* Chess-style: Analytics */}
      <section className="py-24 px-4 border-t border-border/30">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div variants={slideLeft} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="order-2 lg:order-1">
            <span className="liquid-glass rounded-full px-3 py-1 text-xs text-muted-foreground inline-block mb-5">Analytics Engine</span>
            <h2 className="text-hero-heading text-3xl sm:text-4xl font-semibold leading-tight mb-5">
              Insights That Actually
              <br />
              Change Decisions
            </h2>
            <p className="text-hero-sub text-base leading-relaxed mb-7">
              Forget vanity metrics. APEX surfaces the signals that predict deal outcomes — before your competitors even notice the trend.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { v: '148%', l: 'avg. conversion lift' },
                { v: '<2s', l: 'report load time' },
                { v: '50+', l: 'pre-built dashboards' },
                { v: 'Real-time', l: 'data refresh' },
              ].map(s => (
                <div key={s.l} className="liquid-glass rounded-2xl p-4">
                  <div className="text-foreground text-xl font-semibold">{s.v}</div>
                  <div className="text-muted-foreground text-xs mt-1">{s.l}</div>
                </div>
              ))}
            </div>
            <Button variant="hero">See Analytics Demo</Button>
          </motion.div>

          <motion.div variants={slideRight} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="order-1 lg:order-2">
            <div className="liquid-glass rounded-3xl aspect-[4/3] overflow-hidden bg-gradient-to-br from-white/[0.04] to-white/[0.01] flex flex-col p-6 gap-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-foreground/60 text-xs">Revenue Trend — Last 90 days</span>
                <span className="text-foreground/40 text-xs">+23.4%</span>
              </div>
              <div className="flex-1 flex items-end gap-1.5">
                {[40, 55, 48, 62, 58, 70, 65, 80, 75, 88, 82, 95].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-sm"
                    style={{ height: `${h}%`, background: `rgba(255,255,255,${0.05 + (h / 100) * 0.15})` }} />
                ))}
              </div>
              <div className="flex justify-between mt-2">
                {['Jan', 'Feb', 'Mar', 'Apr'].map(m => (
                  <span key={m} className="text-muted-foreground text-[10px]">{m}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional features grid */}
      <section className="py-28 px-4 border-t border-border/30" ref={detailRef}>
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" animate={detailInView ? 'visible' : 'hidden'}
            className="text-center mb-16">
            <h2 className="text-hero-heading text-3xl sm:text-5xl font-semibold mb-4">
              Everything Else You Need
            </h2>
            <p className="text-hero-sub text-base max-w-md mx-auto">
              The details that separate good software from great software.
            </p>
          </motion.div>

          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={stagger(0.07)} initial="hidden" animate={detailInView ? 'visible' : 'hidden'}>
            {DETAIL_FEATURES.map((f) => (
              <motion.div key={f.title} variants={staggerItem}
                className="liquid-glass rounded-2xl p-6 hover:bg-white/[0.03] transition-colors">
                <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.07] flex items-center justify-center mb-4">
                  <f.icon size={16} className="text-foreground/70" />
                </div>
                <h3 className="text-hero-heading text-sm font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
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
              Ready to See It All<br />in Action?
            </h2>
            <p className="text-hero-sub text-sm mb-8 max-w-xs mx-auto">
              Book a 20-minute demo. We'll walk through every feature relevant to your team.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero">Book a Demo</Button>
              <Button variant="heroSecondary">Start Free Trial</Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
