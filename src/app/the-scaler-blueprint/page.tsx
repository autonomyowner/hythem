'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

type PillProps = {
  label: string
}

function Pill({ label }: PillProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div className="overflow-hidden rounded-md">
      <button
        onClick={() => setOpen(v => !v)}
        type="button"
        className="w-full rounded-md bg-white/5 px-6 py-4 text-left text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
      >
        {label}
      </button>
      <div
        className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="px-6 py-5 text-sm leading-relaxed text-white/80">
            Coming soon. You will find lessons, exercises, and resources for {label}.
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Blueprint(): JSX.Element {
  const [firstLineDisplayed, setFirstLineDisplayed] = useState<string>('')
  const [secondLineDisplayed, setSecondLineDisplayed] = useState<string>('')
  const [isFirstLineComplete, setIsFirstLineComplete] = useState<boolean>(false)
  const [isSecondLineComplete, setIsSecondLineComplete] = useState<boolean>(false)

  const firstLine = 'The Scaler Blueprint™ - Your'
  const secondLine = 'First $5,000 Online'

  useEffect(() => {
    // Type first line
    let firstIndex = 0
    let secondTimer: NodeJS.Timeout | null = null
    let secondTimeout: NodeJS.Timeout | null = null
    
    const firstTimer = setInterval(() => {
      if (firstIndex < firstLine.length) {
        setFirstLineDisplayed(firstLine.substring(0, firstIndex + 1))
        firstIndex++
      } else {
        clearInterval(firstTimer)
        setIsFirstLineComplete(true)
        // Start second line after a short delay
        secondTimeout = setTimeout(() => {
          let secondIndex = 0
          secondTimer = setInterval(() => {
            if (secondIndex < secondLine.length) {
              setSecondLineDisplayed(secondLine.substring(0, secondIndex + 1))
              secondIndex++
            } else {
              if (secondTimer) clearInterval(secondTimer)
              setIsSecondLineComplete(true)
            }
          }, 50) // Typing speed for second line
        }, 300) // Delay before starting second line
      }
    }, 50) // Typing speed for first line

    return () => {
      clearInterval(firstTimer)
      if (secondTimer) clearInterval(secondTimer)
      if (secondTimeout) clearTimeout(secondTimeout)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Helper function to render first line with proper styling
  const renderFirstLine = (text: string) => {
    if (text.length === 0) return null

    const parts = []
    let i = 0

    // "The Scaler " - dim
    if (text.length >= 11) {
      parts.push(
        <span key="part-0" className="text-white/60">
          {text.substring(0, 11)}
        </span>
      )
      i = 11
    } else {
      return <span className="text-white/60">{text}</span>
    }

    // Find "Blueprint"
    const blueprintStart = text.toLowerCase().indexOf('blueprint', i)
    if (blueprintStart !== -1 && blueprintStart === i) {
      const blueprintEnd = Math.min(blueprintStart + 9, text.length)
      const blueprintText = text.substring(blueprintStart, blueprintEnd)
      parts.push(
        <span key="part-1" className="text-white">
          {blueprintText}
        </span>
      )
      i = blueprintEnd

      // Check for ™ after Blueprint
      if (i < text.length && text[i] === '™') {
        parts.push(
          <sup key="sup-1" className="text-white/70 text-lg sm:text-2xl">
            ™
          </sup>
        )
        i++
      }

      // Rest - dim
      if (i < text.length) {
        parts.push(
          <span key="part-2" className="text-white/60">
            {text.substring(i)}
          </span>
        )
      }
    } else {
      // Rest if no Blueprint found
      if (i < text.length) {
        parts.push(<span key="part-3" className="text-white/60">{text.substring(i)}</span>)
      }
    }

    return <>{parts}</>
  }

  // Helper function to render second line with proper styling
  const renderSecondLine = (text: string) => {
    if (text.length === 0) return null

    const parts = []
    let i = 0

    // "First " - dim
    if (text.length >= 6) {
      parts.push(
        <span key="part-0" className="text-white/60">
          {text.substring(0, 6)}
        </span>
      )
      i = 6
    } else {
      return <span className="text-white/60">{text}</span>
    }

    // Find "$5,000"
    const dollarIndex = text.indexOf('$', i - 1)
    if (dollarIndex !== -1 && dollarIndex >= i - 1) {
      // Add any text between "First " and "$"
      if (dollarIndex > i) {
        parts.push(
          <span key="part-1" className="text-white/60">
            {text.substring(i, dollarIndex)}
          </span>
        )
      }

      // Find end of "$5,000" (numbers and comma)
      let dollarEnd = dollarIndex + 1
      while (dollarEnd < text.length && (text[dollarEnd].match(/\d/) || text[dollarEnd] === ',')) {
        dollarEnd++
      }

      parts.push(
        <span key="part-2" className="text-white">
          {text.substring(dollarIndex, dollarEnd)}
        </span>
      )
      i = dollarEnd

      // Rest - dim
      if (i < text.length) {
        parts.push(
          <span key="part-3" className="text-white/60">
            {text.substring(i)}
          </span>
        )
      }
    } else {
      // Rest if no $ found
      if (i < text.length) {
        parts.push(<span key="part-4" className="text-white/60">{text.substring(i)}</span>)
      }
    }

    return <>{parts}</>
  }

  return (
    <main className="min-h-screen bg-scaler-blueprint text-white">
      {/* Headings */}
      <section className="mx-auto max-w-5xl px-4 pb-10 pt-8 text-center sm:px-6 lg:px-8">
        {/* Main Title - The Scaler Blueprint™ - Your First $5,000 Online */}
        <div className="mb-12 space-y-2">
          <h1 className="text-3xl font-normal leading-tight sm:text-5xl lg:text-6xl">
            {renderFirstLine(firstLineDisplayed)}
            {!isFirstLineComplete && (
              <span className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-white/80 sm:h-8"></span>
            )}
          </h1>
          {isFirstLineComplete && (
            <h2 className="text-3xl font-normal leading-tight sm:text-5xl lg:text-6xl">
              {renderSecondLine(secondLineDisplayed)}
              {!isSecondLineComplete && (
                <span className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-white/80 sm:h-8"></span>
              )}
            </h2>
          )}
        </div>

        {/* Secondary Headings */}
        <div className="space-y-2">
          <h3 className="text-[32px] font-semibold leading-tight text-white/95 sm:text-5xl">
            Wesh Rah Twelli
          </h3>
          <h4 className="text-[28px] font-semibold leading-tight text-white/80 sm:text-4xl">
            T&apos;maitriser Dakhel
          </h4>
          <p className="mt-6 text-[28px] italic text-white/90 sm:text-4xl">
            <span className="opacity-90">The Scaler Blueprint</span>
          </p>
        </div>
      </section>

      {/* Pill sections */}
      <section className="mx-auto max-w-md space-y-3 px-4 pb-16 sm:px-6 lg:px-8">
        {[
          'Mindset and Human Psychology',
          'Marketing',
          'Branding',
          'Advertising (Free+Paid)',
          'A.I.',
          'Content Creation',
          'Scaling',
        ].map(item => (
          <Pill key={item} label={item} />
        ))}
      </section>

      {/* FREE vs PRICE section */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-2xl backdrop-blur-md sm:p-10">
          <div className="mx-auto inline-flex select-none items-center justify-center rounded-full bg-gradient-to-b from-red-600 to-red-800 px-6 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-white shadow-[0_0_20px_rgba(239,68,68,0.65)]">
            FREE
          </div>
          <p className="mt-8 text-[15px] leading-7 text-white/85">
            No offense lik… mais, the conventional way tae troh lel université, djouwez men 3 - 10 ans
            bech ki tekhroudj tekhdem just because you’re trying to live someone else’s dreams… is a bad way to live life.
          </p>
          <p className="mt-6 text-[15px] leading-7 text-white/85">
            Donc cette offre est gratuite pour le moment, mais you’ll pay later.
          </p>
          <p className="mt-6 text-sm font-semibold text-red-400">Don’t make that mistake.</p>
          <div className="mt-8">
            <a
              href="#"
              className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-b from-red-600 to-red-700 px-8 py-3 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(239,68,68,0.45)] outline-none transition [text-shadow:0_1px_0_rgba(0,0,0,0.15)] hover:from-red-500 hover:to-red-600 active:translate-y-[1px]"
            >
              <span className="absolute -inset-0.5 -z-10 rounded-full bg-red-600/30 blur-lg transition-opacity group-hover:opacity-100" />
              Become an Employee
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h3 className="mb-6 text-center text-xl font-semibold text-white/90">Frequently Asked Questions</h3>
          <div className="divide-y divide-white/10 rounded-xl border border-white/10 bg-white/5">
            {[
              'Est‑ce que The Scaler Blueprint yeqedrou yedoukhloulou les hommes berk ?',
              'Est‑ce que le programme mekhdoum l’kamel nass ?',
              'J’arrive pas a comprendre f wesh rah yaaweni ce programme ?',
              'Est‑ce que ki nedkhoul dakhel the program neqder neqra wesh nheb?',
              'Ki nedkhoul fel programme, rah neqra f Telegram wella Google Drive ?',
            ].map(q => (
              <details key={q} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-sm font-medium text-white/90">
                  {q}
                  <span className="ml-4 rounded-md bg-white/10 px-2 py-1 text-xs text-white/70 transition group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <div className="px-5 pb-5 text-sm text-white/70">
                  Réponse bientôt disponible.
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 pb-10 text-center text-xs text-white/60 sm:px-6 lg:px-8">
        All Rights Reserved, Tenx
      </footer>
    </main>
  )
}


