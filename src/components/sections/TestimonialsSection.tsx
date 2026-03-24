const TESTIMONIALS = [
  {
    quote:
      "APEX completely transformed how our sales team operates. The intelligent routing alone saved us hundreds of hours — and our conversion rates have never been higher.",
    name: 'Clara Whitfield',
    role: 'VP Revenue, Meridian Health',
    initials: 'CW',
    offset: false,
  },
  {
    quote:
      "We switched from three separate tools to APEX and never looked back. The analytics are genuinely insightful — not just vanity metrics wrapped in a pretty dashboard.",
    name: 'Derek Tanaka',
    role: 'Growth Lead, Baseform',
    initials: 'DT',
    offset: true,
  },
  {
    quote:
      "As a CRO, forecast accuracy is everything. APEX delivers 91% accuracy consistently. Our board finally trusts the numbers we bring to the table.",
    name: 'Simone Reuter',
    role: 'CRO, Alpenhaus Group',
    initials: 'SR',
    offset: false,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-hero-heading text-3xl sm:text-5xl font-semibold leading-tight mb-4">
            Trusted by Revenue
            <br />
            Leaders Everywhere
          </h2>
          <p className="text-hero-sub text-lg max-w-sm mx-auto">
            Hear from the teams that made the switch.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className={`liquid-glass rounded-3xl p-8 ${t.offset ? 'md:-translate-y-6' : ''}`}
            >
              <p className="text-hero-sub text-sm leading-relaxed mb-6">"{t.quote}"</p>
              <div className="border-t border-border/50 pt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-xs font-semibold text-foreground flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-hero-heading text-sm font-medium">{t.name}</div>
                  <div className="text-muted-foreground text-xs mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
