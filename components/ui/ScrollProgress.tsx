'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 28 })

  return (
    <motion.div
      role="progressbar"
      aria-label="Reading progress"
      aria-valuenow={undefined}
      className="fixed top-0 left-0 right-0 h-[2px] z-[300] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #22D3EE, #818CF8)',
      }}
    />
  )
}
