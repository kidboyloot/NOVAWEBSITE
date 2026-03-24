import { ChevronRight } from 'lucide-react'
import { HlsVideo } from '@/components/HlsVideo'

const FEATURES = [
  {
    title: 'Lightning Workflows',
    description:
      "Automate repetitive tasks with intelligent pipelines that adapt to your team's rhythm and velocity.",
    statValue: '3.2x faster',
    statLabel: 'pipeline throughput',
  },
  {
    title: 'Deep-Dive Analytics',
    description:
      'Uncover patterns hiding in your funnel. Real-time cohort analysis with zero configuration required.',
    statValue: '148%',
    statLabel: 'avg. conversion lift',
  },
  {
    title: 'Compliance Engine',
    description:
      'SOC 2, GDPR, and HIPAA guardrails baked into every interaction. Audit trails generated automatically.',
    statValue: 'Zero',
    statLabel: 'compliance incidents',
  },
]

export function FeaturesSection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background HLS Video */}
      <HlsVideo
        src="https://stream.mux.com/Jwr2RhmsNrd6GExFa22t00RveFd7Vu3wUz/low.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlays */}
      <div
        className="absolute top-0 left-0 right-0 h-[40%] pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(to bottom, hsl(var(--background)) 0%, hsl(260 87% 3% / 0.8) 60%, transparent 100%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[40%] pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(to top, hsl(var(--background)) 0%, hsl(260 87% 3% / 0.8) 60%, transparent 100%)',
        }}
      />
      <div className="absolute inset-0 bg-background/40 z-[5]" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex liquid-glass rounded-full px-4 py-2 items-center gap-2 text-sm mb-6">
            <span className="text-foreground/60">Core Platform</span>
            <span className="liquid-glass rounded-full px-2 py-0.5 flex items-center gap-1 text-xs text-foreground/80 font-medium">
              Overview <ChevronRight size={11} />
            </span>
          </div>
          <h2 className="text-hero-heading text-3xl sm:text-5xl font-semibold leading-tight mb-4">
            Built for Teams That
            <br />
            Ship Relentlessly
          </h2>
          <p className="text-hero-sub text-lg max-w-xl mx-auto">
            Three pillars that keep your revenue engine humming without the operational drag.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="liquid-glass rounded-3xl p-8 hover:bg-white/[0.03] transition-colors"
            >
              <h3 className="text-hero-heading text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
              <div className="border-t border-border/50 mt-6 pt-6">
                <div className="text-primary text-2xl font-semibold">{f.statValue}</div>
                <div className="text-muted-foreground text-sm mt-1">{f.statLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
