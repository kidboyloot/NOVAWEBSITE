import { ChevronRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const BRANDS = ['Vortex', 'Nimbus', 'Prysma', 'Cirrus', 'Kynder', 'Halcyn']
const BRANDS_DOUBLED = [...BRANDS, ...BRANDS]

function BrandIcon({ name }: { name: string }) {
  return (
    <div className="liquid-glass w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-semibold text-foreground/70">
      {name[0]}
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKVxDfpJrb6LLdYH3h/videos/01JRV6BQK2YBNPEZG7KZF1S1XS/1080/output.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, transparent 30%, hsl(260 87% 3% / 0.1) 45%, hsl(260 87% 3% / 0.4) 60%, hsl(260 87% 3% / 0.75) 75%, hsl(260 87% 3%) 95%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <div className="flex justify-center pt-6 px-4">
          <nav className="liquid-glass rounded-3xl px-5 py-3 flex items-center gap-6 w-full max-w-[850px]">
            {/* Logo */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-b from-secondary to-muted flex items-center justify-center">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="text-foreground/80"
                >
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

            {/* Nav items */}
            <div className="hidden md:flex items-center gap-1 flex-1">
              <button className="flex items-center gap-1 px-3 py-1.5 text-sm text-foreground/70 hover:text-foreground transition-colors rounded-lg hover:bg-white/5">
                Features <ChevronDown size={13} />
              </button>
              <button className="px-3 py-1.5 text-sm text-foreground/70 hover:text-foreground transition-colors rounded-lg hover:bg-white/5">
                Solutions
              </button>
              <button className="px-3 py-1.5 text-sm text-foreground/70 hover:text-foreground transition-colors rounded-lg hover:bg-white/5">
                Plans
              </button>
              <button className="flex items-center gap-1 px-3 py-1.5 text-sm text-foreground/70 hover:text-foreground transition-colors rounded-lg hover:bg-white/5">
                Learning <ChevronDown size={13} />
              </button>
            </div>

            {/* CTA */}
            <Button variant="hero" size="sm" className="flex-shrink-0">
              Sign Up
            </Button>
          </nav>
        </div>

        {/* Hero content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 text-center pt-16 pb-32">
          {/* Announcement Badge */}
          <div className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2 mb-10 text-sm">
            <span className="text-foreground/60">Nova+ Launched!</span>
            <span className="liquid-glass rounded-full px-2 py-0.5 flex items-center gap-1 text-xs text-foreground/80 font-medium">
              Explore <ChevronRight size={11} />
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-hero-heading text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight max-w-5xl">
            Accelerate Your
            <br />
            Revenue Growth Now
          </h1>

          {/* Subheading */}
          <p className="text-hero-sub text-lg max-w-md mt-4 opacity-80">
            Drive your funnel forward with clever workflows, analytics, and seamless lead management.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-8 justify-center">
            <Button variant="hero">Start Free Right Now</Button>
            <Button variant="heroSecondary">Schedule a Consult</Button>
          </div>
        </div>

        {/* Social Proof Bar */}
        <div className="relative z-10 px-4 pb-10 flex items-center gap-8 max-w-6xl mx-auto w-full">
          <div className="flex-shrink-0 text-sm text-foreground/50 leading-snug">
            Relied on by brands
            <br />
            across the globe
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="flex gap-4 animate-marquee whitespace-nowrap">
              {BRANDS_DOUBLED.map((brand, i) => (
                <div key={i} className="flex items-center gap-2 flex-shrink-0">
                  <BrandIcon name={brand} />
                  <span className="text-sm text-foreground/50 font-medium">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
