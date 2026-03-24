import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { ChessSection } from '@/components/sections/ChessSection'
import { ReverseChessSection } from '@/components/sections/ReverseChessSection'
import { NumbersSection } from '@/components/sections/NumbersSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CTAFooterWrapper } from '@/components/sections/CTAFooterWrapper'

export default function App() {
  return (
    <main className="bg-background text-foreground">
      <HeroSection />
      <FeaturesSection />
      <ChessSection />
      <ReverseChessSection />
      <NumbersSection />
      <TestimonialsSection />
      <CTAFooterWrapper />
    </main>
  )
}
