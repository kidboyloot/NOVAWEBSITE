import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HlsVideo } from '@/components/HlsVideo'

export function ChessSection() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Left: Video */}
        <div className="liquid-glass rounded-3xl aspect-[4/3] overflow-hidden">
          <HlsVideo
            src="https://stream.mux.com/1CCfG6mPC7LbMO01n01pqkBZ8PkpSXuXOo/low.m3u8"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Content */}
        <div>
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

          <ul className="space-y-3 mb-8">
            {[
              'AI-scored lead qualification',
              'Dynamic rep assignment',
              'Multi-touch attribution',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-hero-sub text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero">See It in Action</Button>
            <Button variant="heroSecondary">Read the Docs</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
