import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HlsVideo } from '@/components/HlsVideo'

const STATS = [
  { value: '47.2%', label: 'win-rate increase' },
  { value: '12 days', label: 'shorter sales cycle' },
  { value: '2.8x', label: 'deal velocity' },
  { value: '91%', label: 'forecast accuracy' },
]

export function ReverseChessSection() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Left: Content */}
        <div className="order-2 lg:order-1">
          <div className="inline-flex liquid-glass rounded-full px-4 py-2 items-center gap-2 text-sm mb-6">
            <span className="text-foreground/60">Pipeline Studio</span>
            <span className="liquid-glass rounded-full px-2 py-0.5 flex items-center gap-1 text-xs text-foreground/80 font-medium">
              Beta <ChevronRight size={11} />
            </span>
          </div>

          <h2 className="text-hero-heading text-3xl sm:text-4xl font-semibold leading-tight mb-5">
            Design Funnels
            <br />
            That Actually Close
          </h2>

          <p className="text-hero-sub text-base leading-relaxed mb-8">
            Drag-and-drop pipeline builder with live conversion metrics at every stage. See exactly
            where deals stall and why.
          </p>

          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {STATS.map((s) => (
              <div key={s.label} className="liquid-glass rounded-2xl p-4">
                <div className="text-primary text-2xl font-semibold">{s.value}</div>
                <div className="text-muted-foreground text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <Button variant="hero">Try Pipeline Studio</Button>
        </div>

        {/* Right: Video */}
        <div className="order-1 lg:order-2 liquid-glass rounded-3xl aspect-[4/3] overflow-hidden">
          <HlsVideo
            src="https://stream.mux.com/f0001qPDy00mvqkfTRE5OPfAj01VO6wVXj/low.m3u8"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
