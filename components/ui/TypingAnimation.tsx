'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface TypingAnimationProps {
  words: string[]
  className?: string
  cursorClassName?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export function TypingAnimation({
  words,
  className,
  cursorClassName,
  typingSpeed = 85,
  deletingSpeed = 55,
  pauseDuration = 2200,
}: TypingAnimationProps) {
  const [displayed, setDisplayed] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPausing, setIsPausing] = useState(false)

  useEffect(() => {
    if (isPausing) return
    const current = words[wordIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = current.substring(0, charIndex + 1)
        setDisplayed(next)
        setCharIndex(c => c + 1)
        if (charIndex + 1 === current.length) {
          setIsPausing(true)
          setTimeout(() => {
            setIsPausing(false)
            setIsDeleting(true)
          }, pauseDuration)
        }
      } else {
        const next = current.substring(0, charIndex - 1)
        setDisplayed(next)
        setCharIndex(c => c - 1)
        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setWordIndex(i => (i + 1) % words.length)
          setTimeout(() => {}, 300)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, isPausing, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span aria-label={words[wordIndex]}>
      <span className={className}>{displayed}</span>
      <span
        className={cn(
          'inline-block w-0.5 h-[1em] bg-[#22D3EE] ml-0.5 align-middle animate-blink',
          cursorClassName
        )}
        aria-hidden="true"
      />
    </span>
  )
}
