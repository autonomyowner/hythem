'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { SupportedLanguage } from '@/i18n/translations'

type Direction = 'ltr' | 'rtl'

interface LanguageContextValue {
  language: SupportedLanguage
  dir: Direction
  setLanguage: (language: SupportedLanguage) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }): JSX.Element {
  const [language, setLanguage] = useState<SupportedLanguage>('fr')

  // initialize from localStorage on the client
  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = window.localStorage.getItem('language') as SupportedLanguage | null
    if (stored === 'fr' || stored === 'ar') {
      setLanguage(stored)
    }
  }, [])

  const dir: Direction = language === 'ar' ? 'rtl' : 'ltr'

  // persist choice + sync <html> attributes
  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem('language', language)
    const htmlEl = document.documentElement
    htmlEl.lang = language
    htmlEl.dir = dir
  }, [language, dir])

  const value = useMemo(
    () => ({
      language,
      dir,
      setLanguage,
      toggleLanguage: () => setLanguage((prev) => (prev === 'fr' ? 'ar' : 'fr')),
    }),
    [language, dir],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

