import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, stagger, staggerItem, scaleUp, slideLeft, slideRight } from '@/lib/animations'
import {
  BookOpen, Play, Code2, MessageSquare, FileText, Video,
  Lightbulb, Rocket, ChevronRight, Clock, Users2, ArrowRight
} from 'lucide-react'

const QUICK_START = [
  { step: '01', title: 'Create your account', desc: 'Sign up free and invite your team in under 2 minutes.' },
  { step: '02', title: 'Connect your CRM', desc: 'One-click sync with Salesforce, HubSpot, or any CRM.' },
  { step: '03', title: 'Build your first workflow', desc: 'Use a template or start from scratch in the visual builder.' },
  { step: '04', title: 'Go live', desc: 'Publish and start routing leads automatically from day one.' },
]

const DOCS_CATEGORIES = [
  { icon: Rocket, title: 'Getting Started', desc: 'Onboarding guides, account setup, and first workflow walkthroughs.', count: 24 },
  { icon: Lightbulb, title: 'How-To Guides', desc: 'Step-by-step instructions for common tasks and use cases.', count: 87 },
  { icon: Code2, title: 'API Reference', desc: 'Full REST API docs with examples in cURL, Python, and Node.', count: 142 },
  { icon: FileText, title: 'Changelog', desc: 'Weekly releases, new features, and what\'s coming next.', count: 38 },
  { icon: MessageSquare, title: 'Community', desc: 'Ask questions, share workflows, and learn from 2,400+ teams.', count: '12k+' },
  { icon: BookOpen, title: 'Best Practices', desc: 'Proven playbooks from the top-performing revenue teams.', count: 31 },
]

const VIDEOS = [
  { title: 'APEX in 5 Minutes', duration: '5:12', tag: 'Overview', level: 'Beginner' },
  { title: 'Building Your First Pipeline', duration: '12:40', tag: 'Workflows', level: 'Beginner' },
  { title: 'AI Lead Scoring Deep Dive', duration: '18:05', tag: 'AI Features', level: 'Intermediate' },
  { title: 'CRM Sync Setup (Salesforce)', duration: '9:33', tag: 'Integrations', level: 'Beginner' },
  { title: 'Advanced Analytics Walkthrough', duration: '22:15', tag: 'Analytics', level: 'Advanced' },
  { title: 'Building a RevOps Dashboard', duration: '15:48', tag: 'Analytics', level: 'Intermediate' },
]

const POPULAR_ARTICLES = [
  'How to set up smart routing in 10 minutes',
  'The complete guide to lead scoring in APEX',
  'Connecting APEX to Salesforce (step-by-step)',
  'Building a multi-stage outreach sequence',
  'Understanding attribution models in APEX',
  'Setting up SOC 2 compliance workflows',
]

export function LearningPage() {
  const heroRef = useRef(null)
  const stepsRef = useRef(null)
  const docsRef = useRef(null)
  const videosRef = useRef(null)
  const articlesRef = useRef(null)
  const ctaRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const stepsInView = useInView(stepsRef, { once: true, amount: 0.2 })
  const docsInView = useInView(docsRef, { once: true, amount: 0.1 })
  const videosInView = useInView(videosRef, { once: true, amount: 0.1 })
  const articlesInView = useInView(articlesRef, { once: true, amount: 0.2 })
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 })

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-28 px-4 text-center" ref={heroRef}>
        <motion.div variants={scaleUp} initial="hidden" animate={heroInView ? 'visible' : 'hidden'}
          className="inline-flex liquid-glass rounded-full px-4 py-1.5 items-center gap-2 text-xs text-muted-foreground mb-8">
          <BookOpen size={12} /> Learning Hub
        </motion.div>
        <motion.h1 variants={fadeUp} initial="hidden" animate={heroInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.1 }}
          className="text-hero-heading text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight max-w-4xl mx-auto mb-6">
          Everything You Need
          <br />
          <span className="text-gradient">to Master APEX</span>
        </motion.h1>
        <motion.p variants={fadeUp} initial="hidden" animate={heroInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.22 }}
          className="text-hero-sub text-lg max-w-xl mx-auto mb-10">
          From first login to advanced automation — guides, videos, API docs, and a community of 12,000+ revenue operators.
        </motion.p>

        {/* Search bar */}
        <motion.div variants={scaleUp} initial="hidden" animate={heroInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.34 }}
          className="max-w-lg mx-auto">
          <div className="liquid-glass rounded-2xl flex items-center gap-3 px-5 py-3">
            <BookOpen size={16} className="text-muted-foreground flex-shrink-0" />
            <input
              type="text"
              placeholder="Search docs, guides, and tutorials..."
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
            />
            <kbd className="text-muted-foreground text-xs liquid-glass rounded px-2 py-0.5">⌘K</kbd>
          </div>
        </motion.div>

        <motion.div variants={stagger(0.08)} initial="hidden" animate={heroInView ? 'visible' : 'hidden'}
          transition={{ delayChildren: 0.48 }} className="flex flex-wrap gap-2 justify-center mt-6">
          {['Getting Started', 'API Reference', 'Workflows', 'Analytics', 'Integrations'].map(tag => (
            <motion.button key={tag} variants={staggerItem}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors">
              {tag}
            </motion.button>
          ))}
        </motion.div>
      </section>

      <div className="border-t border-border/40" />

      {/* Quick start steps */}
      <section className="py-28 px-4" ref={stepsRef}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div variants={slideLeft} initial="hidden" animate={stepsInView ? 'visible' : 'hidden'}>
            <span className="liquid-glass rounded-full px-3 py-1 text-xs text-muted-foreground inline-block mb-6">Quick Start</span>
            <h2 className="text-hero-heading text-3xl sm:text-4xl font-semibold leading-tight mb-5">
              From Sign Up to Live
              <br />
              in Under 30 Minutes
            </h2>
            <p className="text-hero-sub text-base leading-relaxed mb-8">
              Our onboarding is built to get you generating value fast. No complicated setup, no professional services required.
            </p>
            <Button variant="hero">Start the Guide <ChevronRight size={14} /></Button>
          </motion.div>

          <motion.div variants={slideRight} initial="hidden" animate={stepsInView ? 'visible' : 'hidden'}
            className="space-y-4">
            {QUICK_START.map((s, i) => (
              <motion.div key={s.step}
                initial={{ opacity: 0, x: 40 }}
                animate={stepsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="liquid-glass rounded-2xl p-5 flex items-start gap-4 hover:bg-white/[0.03] transition-colors group">
                <div className="text-gradient text-2xl font-bold tabular-nums flex-shrink-0 w-10">{s.step}</div>
                <div>
                  <div className="text-hero-heading text-sm font-semibold mb-1 group-hover:text-white transition-colors">{s.title}</div>
                  <div className="text-muted-foreground text-xs leading-relaxed">{s.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Docs categories */}
      <section className="py-24 px-4 border-t border-border/40" ref={docsRef}>
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" animate={docsInView ? 'visible' : 'hidden'}
            className="text-center mb-14">
            <h2 className="text-hero-heading text-3xl sm:text-4xl font-semibold mb-4">Browse Documentation</h2>
            <p className="text-hero-sub text-base max-w-md mx-auto">
              Comprehensive docs for every feature, integration, and API endpoint.
            </p>
          </motion.div>

          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={stagger(0.1)} initial="hidden" animate={docsInView ? 'visible' : 'hidden'}>
            {DOCS_CATEGORIES.map((d) => (
              <motion.div key={d.title} variants={staggerItem}
                className="liquid-glass rounded-3xl p-7 hover:bg-white/[0.03] transition-all group cursor-pointer">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.07] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors">
                    <d.icon size={17} className="text-foreground/70" />
                  </div>
                  <span className="text-muted-foreground text-xs">{d.count} articles</span>
                </div>
                <h3 className="text-hero-heading text-base font-semibold mb-2">{d.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">{d.desc}</p>
                <div className="flex items-center gap-1 text-xs text-foreground/30 group-hover:text-foreground/60 transition-colors">
                  Browse <ArrowRight size={11} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video tutorials */}
      <section className="py-24 px-4 border-t border-border/40" ref={videosRef}>
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" animate={videosInView ? 'visible' : 'hidden'}
            className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-hero-heading text-3xl sm:text-4xl font-semibold mb-2">Video Tutorials</h2>
              <p className="text-hero-sub text-sm">Visual walkthroughs for every skill level.</p>
            </div>
            <Button variant="heroSecondary" className="hidden sm:flex items-center gap-2">
              View All <ChevronRight size={14} />
            </Button>
          </motion.div>

          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={stagger(0.1)} initial="hidden" animate={videosInView ? 'visible' : 'hidden'}>
            {VIDEOS.map((v) => (
              <motion.div key={v.title} variants={staggerItem}
                className="liquid-glass rounded-2xl overflow-hidden group cursor-pointer hover:bg-white/[0.03] transition-colors">
                {/* Thumbnail */}
                <div className="aspect-video bg-gradient-to-br from-white/[0.04] to-white/[0.01] flex items-center justify-center border-b border-border/30 relative overflow-hidden">
                  <div className="w-12 h-12 rounded-full liquid-glass flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play size={18} className="text-foreground/70 ml-0.5" fill="currentColor" />
                  </div>
                  <span className="absolute bottom-2 right-3 text-muted-foreground text-xs liquid-glass rounded px-1.5 py-0.5">
                    {v.duration}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="liquid-glass rounded-full px-2 py-0.5 text-[10px] text-muted-foreground">{v.tag}</span>
                    <span className="text-muted-foreground text-[10px]">· {v.level}</span>
                  </div>
                  <h3 className="text-hero-heading text-sm font-medium">{v.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Popular articles + Community */}
      <section className="py-24 px-4 border-t border-border/40" ref={articlesRef}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <motion.div variants={slideLeft} initial="hidden" animate={articlesInView ? 'visible' : 'hidden'}>
            <h2 className="text-hero-heading text-2xl font-semibold mb-8">Most Read Articles</h2>
            <ul className="space-y-1">
              {POPULAR_ARTICLES.map((a, i) => (
                <motion.li key={a}
                  initial={{ opacity: 0, x: -20 }}
                  animate={articlesInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex items-center gap-4 py-4 border-b border-border/30 group cursor-pointer hover:bg-white/[0.02] -mx-4 px-4 rounded-xl transition-colors">
                  <span className="text-muted-foreground/40 text-sm tabular-nums w-5 flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-hero-sub text-sm group-hover:text-foreground transition-colors flex-1">{a}</span>
                  <ArrowRight size={13} className="text-muted-foreground/30 group-hover:text-muted-foreground transition-colors flex-shrink-0" />
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={slideRight} initial="hidden" animate={articlesInView ? 'visible' : 'hidden'}>
            <h2 className="text-hero-heading text-2xl font-semibold mb-8">Join the Community</h2>
            <div className="liquid-glass rounded-3xl p-8 h-full flex flex-col justify-between gap-8">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {['A', 'B', 'C', 'D', 'E'].map((l, i) => (
                    <div key={l} className="w-9 h-9 rounded-full bg-white/[0.06] border-2 border-background flex items-center justify-center text-xs font-medium text-foreground/60"
                      style={{ zIndex: 5 - i }}>{l}</div>
                  ))}
                </div>
                <div>
                  <div className="text-hero-heading text-sm font-semibold">12,000+ members</div>
                  <div className="text-muted-foreground text-xs">active revenue operators</div>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { icon: MessageSquare, label: 'Slack Community', desc: 'Real-time help & discussion' },
                  { icon: Users2, label: 'Office Hours', desc: 'Weekly live sessions with APEX team' },
                  { icon: Video, label: 'Webinars', desc: 'Monthly deep-dives on new features' },
                  { icon: Clock, label: 'Response Time', desc: 'Avg. 2h in community, 24h via email' },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-3 py-3 border-b border-border/30 last:border-0">
                    <item.icon size={15} className="text-muted-foreground flex-shrink-0" />
                    <div>
                      <div className="text-hero-heading text-xs font-medium">{item.label}</div>
                      <div className="text-muted-foreground text-xs">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="hero" className="w-full">Join the Community</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 border-t border-border/30" ref={ctaRef}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div variants={scaleUp} initial="hidden" animate={ctaInView ? 'visible' : 'hidden'}
            className="liquid-glass rounded-[2rem] p-12 sm:p-16">
            <h2 className="text-hero-heading text-3xl sm:text-4xl font-semibold mb-4">
              Can't Find What<br />You're Looking For?
            </h2>
            <p className="text-hero-sub text-sm mb-8 max-w-xs mx-auto">
              Our support team is standing by. Average first response time is under 2 hours.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero">Contact Support</Button>
              <Button variant="heroSecondary">Join Community</Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
