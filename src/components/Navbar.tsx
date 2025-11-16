'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'
import { useTranslations } from '@/hooks/useTranslations'

export const Navbar = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const pathname = usePathname()
  const { language, toggleLanguage } = useLanguage()
  const t = useTranslations()

  const navItems = useMemo(
    () => [],
    [],
  )

  // Split menu items: first on left, rest on right
  const leftNavItem = navItems[0]
  const rightNavItems = navItems.slice(1)

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 12)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // No brand blinking effect

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? 'bg-kitchen-white-clean/92 backdrop-blur border-b border-kitchen-marble-gray-light shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center md:h-20">
          {/* Left menu item - Desktop only */}
          <div className="hidden items-start gap-2 md:flex flex-col flex-1">
            {/* Left utility link removed for clean header */}
            {/* No left CTA */}
          </div>

          {/* Center brand name - Absolutely centered on mobile */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:relative md:left-0 md:top-0 md:translate-x-0 md:translate-y-0 md:flex-1 md:flex md:justify-center">
            <Link
              href="/"
              className="transition-opacity duration-200 hover:opacity-80 text-center"
            >
              <span
                className="text-3xl md:text-4xl lg:text-5xl font-artistic tracking-wide normal-case"
              >
                <span className="text-kitchen-black-deep">TenX</span>
              </span>
            </Link>
          </div>

          {/* Right menu items - Desktop only */}
          <div className="hidden items-end gap-2 md:flex flex-col flex-1 justify-end">
            {/* Social buttons removed for clean header */}
            {/* No right CTAs */}
          </div>

          {/* Mobile menu items */}
          {/* Left side - mobile */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-start gap-1 md:hidden">
            {/* Social button removed */}
            {/* No left CTA mobile */}
          </div>

          {/* Right side - mobile */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-end gap-1 md:hidden">
            {/* Social button removed */}
            {/* No right CTAs mobile */}
          </div>
          {/* Language toggle removed */}
        </div>
      </div>
    </nav>
    </>
  )
}
