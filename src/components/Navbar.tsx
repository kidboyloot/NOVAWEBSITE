import { ChevronDown } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { fadeDown } from '@/lib/animations'

const NAV = [
  { label: 'Features', href: '/features', dropdown: true },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Plans', href: '/plans' },
  { label: 'Learning', href: '/learning', dropdown: true },
]

export function Navbar({ transparent = false }: { transparent?: boolean }) {
  const { pathname } = useLocation()

  return (
    <motion.div
      className="flex justify-center pt-6 px-4"
      variants={fadeDown}
      initial="hidden"
      animate="visible"
    >
      <nav
        className={`liquid-glass rounded-3xl px-5 py-3 flex items-center gap-6 w-full max-w-[850px] ${
          transparent ? 'bg-transparent' : ''
        }`}
      >
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-b from-white/20 to-white/5 border border-white/10 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-white">
              <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="7" cy="7" r="1.8" fill="currentColor" />
              <line x1="7" y1="1" x2="7" y2="4" stroke="currentColor" strokeWidth="1.2" />
              <line x1="7" y1="10" x2="7" y2="13" stroke="currentColor" strokeWidth="1.2" />
              <line x1="1" y1="7" x2="4" y2="7" stroke="currentColor" strokeWidth="1.2" />
              <line x1="10" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
          <span className="text-xl font-semibold text-foreground">APEX</span>
        </Link>

        <div className="hidden md:flex items-center gap-1 flex-1">
          {NAV.map(({ label, href, dropdown }) => (
            <Link
              key={label}
              to={href}
              className={`flex items-center gap-1 px-3 py-1.5 text-sm transition-colors rounded-lg hover:bg-white/5 ${
                pathname === href ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {label}
              {dropdown && <ChevronDown size={13} />}
            </Link>
          ))}
        </div>

        <Button variant="hero" size="sm" className="flex-shrink-0">Sign Up</Button>
      </nav>
    </motion.div>
  )
}
