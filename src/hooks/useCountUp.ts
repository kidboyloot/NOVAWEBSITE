import { useEffect, useRef, useState } from 'react'

export function useCountUp(
  target: number,
  duration = 2000,
  inView = false,
  decimals = 0
) {
  const [value, setValue] = useState(0)
  const frameRef = useRef<number>(0)
  const startRef = useRef<number | null>(null)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!inView || startedRef.current) return
    startedRef.current = true

    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts
      const progress = Math.min((ts - startRef.current) / duration, 1)
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setValue(parseFloat((eased * target).toFixed(decimals)))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      } else {
        setValue(target)
      }
    }

    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [inView, target, duration, decimals])

  return value
}
