import { HlsVideo } from '@/components/HlsVideo'

export function NumbersSection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background HLS video */}
      <HlsVideo
        src="https://stream.mux.com/Kec29dVyJgiPdtWyisLFGc2hBxvKkgD7/low.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, hsl(260 87% 3%) 0%, hsl(260 87% 3% / 0.85) 15%, hsl(260 87% 3% / 0.4) 40%, hsl(260 87% 3% / 0.15) 60%, hsl(260 87% 3% / 0.3) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Hero metric */}
        <div className="text-center mb-24">
          <div className="text-primary text-7xl sm:text-[8rem] lg:text-[10rem] font-semibold tracking-tighter leading-none">
            $4.7B
          </div>
          <div className="text-hero-heading text-xl font-medium mt-4">Revenue influenced</div>
          <p className="text-muted-foreground text-sm mt-2 max-w-xs mx-auto">
            Across thousands of teams and millions of customer interactions worldwide.
          </p>
        </div>

        {/* Bottom two metrics */}
        <div className="liquid-glass rounded-3xl p-12 grid md:grid-cols-2 gap-12">
          <div className="text-center">
            <div className="text-primary text-5xl sm:text-6xl font-semibold tracking-tight">18M</div>
            <div className="text-hero-heading text-lg font-medium mt-3">Leads processed monthly</div>
            <p className="text-muted-foreground text-sm mt-2">
              Scored, routed, and tracked across every channel your team uses.
            </p>
          </div>
          <div className="text-center md:border-l border-border/50">
            <div className="text-primary text-5xl sm:text-6xl font-semibold tracking-tight">
              99.97%
            </div>
            <div className="text-hero-heading text-lg font-medium mt-3">Platform uptime</div>
            <p className="text-muted-foreground text-sm mt-2">
              Enterprise-grade reliability with redundant infrastructure in every region.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
