import type { Variants } from 'framer-motion'

export const ease = [0.25, 0.46, 0.45, 0.94] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
}

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease } },
}

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease } },
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -72 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease } },
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 72 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease } },
}

export const stagger = (delay = 0.12): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay } },
})

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
}
