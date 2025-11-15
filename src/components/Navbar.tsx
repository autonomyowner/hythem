'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'
import { useTranslations } from '@/hooks/useTranslations'

export const Navbar = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isBrandVisible, setIsBrandVisible] = useState<boolean>(true)
  const pathname = usePathname()
  const { language, toggleLanguage } = useLanguage()
  const t = useTranslations()

  const navItems = useMemo(
    () => [
      { label: t.navbar.links.home, href: '/' },
      { label: t.navbar.links.services, href: '/services' },
    ],
    [t.navbar.links.home, t.navbar.links.services],
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBrandVisible((prev) => !prev)
    }, 2000) // Fade in/out every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Top Bar - Scrolling Banner */}
      <div 
        className="fixed inset-x-0 top-0 z-50 w-full text-black py-3 px-4 text-sm font-semibold block overflow-hidden"
        style={{
          background: 'linear-gradient(to right, #1E3F3D 0%, #F5FFF5 50%, #DCCEF2 100%)',
          minHeight: '44px',
        }}
      >
          <div className="relative w-full overflow-hidden h-full flex items-center">
          <div className="animate-scroll-banner whitespace-nowrap inline-flex items-center gap-4">
            {[0, 1, 2].map((index) => (
              <span key={index} className="font-modern tracking-wide">
                {t.navbar.announcement}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed inset-x-0 top-[44px] z-50 transition-colors duration-300 ${
          isScrolled
            ? 'bg-kitchen-white-clean/92 backdrop-blur border-b border-kitchen-marble-gray-light shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center md:h-20">
          {/* Left menu item - Desktop only */}
          <div className="hidden items-start gap-2 md:flex flex-col flex-1">
            {/* Instagram Button with Logo - Left side */}
            <Link
              href="https://www.instagram.com/allouani__parfumerie1/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-kitchen-lux-dark-green-300 bg-gradient-to-r from-kitchen-lux-dark-green-50 to-kitchen-lux-dark-green-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-kitchen-lux-dark-green-800 transition-all duration-200 hover:border-kitchen-lux-dark-green-500 hover:bg-gradient-to-r hover:from-kitchen-lux-dark-green-100 hover:to-kitchen-lux-dark-green-200 hover:text-kitchen-lux-dark-green-900 hover:shadow-md hover:shadow-kitchen-lux-dark-green-200/30"
            >
              <Image
                src="/WINTERDZ.png"
                alt="Allouani Logo"
                width={20}
                height={20}
                className="rounded-full object-cover"
              />
              <span>{t.navbar.social.instagram}</span>
            </Link>
            {(() => {
              const isActive = pathname === leftNavItem.href
              return (
                <Link
                  href={leftNavItem.href}
                  className={`text-sm font-medium uppercase tracking-[0.18em] transition-colors duration-200 ${
                    isActive
                      ? 'text-kitchen-black-deep'
                      : 'text-kitchen-marble-gray hover:text-kitchen-black-deep'
                  }`}
                >
                  {leftNavItem.label}
                </Link>
              )
            })()}
          </div>

          {/* Center brand name - Absolutely centered on mobile */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:relative md:left-0 md:top-0 md:translate-x-0 md:translate-y-0 md:flex-1 md:flex md:justify-center">
            <Link
              href="/"
              className="transition-opacity duration-200 hover:opacity-80 text-center"
            >
              <span
                className={`text-3xl md:text-4xl lg:text-5xl font-artistic tracking-wide normal-case transition-opacity duration-1000 ${
                  isBrandVisible ? 'opacity-100' : 'opacity-50'
                }`}
              >
                <span className="text-kitchen-black-deep">Allouani</span>
              </span>
            </Link>
          </div>

          {/* Right menu items - Desktop only */}
          <div className="hidden items-end gap-2 md:flex flex-col flex-1 justify-end">
            {/* TikTok Button with Logo - Right side */}
            <Link
              href="https://www.tiktok.com/@parfumerie.allouani"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-purple-300 bg-gradient-to-r from-purple-100 to-purple-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-800 transition-all duration-200 hover:border-purple-500 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-300 hover:text-purple-900 hover:shadow-md hover:shadow-purple-200/30"
            >
              <Image
                src="/WINTERDZ.png"
                alt="Allouani Logo"
                width={20}
                height={20}
                className="rounded-full object-cover"
              />
              <span>{t.navbar.social.tiktok}</span>
            </Link>
            {rightNavItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium uppercase tracking-[0.18em] transition-colors duration-200 ${
                    isActive
                      ? 'text-kitchen-black-deep'
                      : 'text-kitchen-marble-gray hover:text-kitchen-black-deep'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* Mobile menu items */}
          {/* Boutique - Left side */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-start gap-1 md:hidden">
            {/* TikTok Button with Logo - Mobile Left */}
            <Link
              href="https://www.tiktok.com/@parfumerie.allouani"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-purple-300 bg-gradient-to-r from-purple-100 to-purple-200 px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.2em] text-purple-800 transition-all duration-200 hover:border-purple-500 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-300 hover:text-purple-900 hover:shadow-md hover:shadow-purple-200/30"
            >
              <Image
                src="/WINTERDZ.png"
                alt="Allouani Logo"
                width={14}
                height={14}
                className="rounded-full object-cover"
              />
              <span>{t.navbar.social.tiktok}</span>
            </Link>
            {(() => {
              const isActive = pathname === leftNavItem.href
              return (
                <Link
                  href={leftNavItem.href}
                  className={`inline-flex items-center justify-center rounded-full border border-purple-300 bg-gradient-to-r from-purple-100 to-purple-200 px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.3em] text-purple-800 transition-all duration-200 hover:border-purple-500 hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-300 hover:text-purple-900 hover:shadow-md hover:shadow-purple-200/30 ${
                    isActive
                      ? 'border-purple-500 bg-gradient-to-r from-purple-200 to-purple-300 text-purple-900 shadow-md shadow-purple-200/30'
                      : ''
                  }`}
                >
                  {leftNavItem.label}
                </Link>
              )
            })()}
          </div>

          {/* Boutique - Far right */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-end gap-1 md:hidden">
            {/* Instagram Button with Logo - Mobile Right */}
            <Link
              href="https://www.instagram.com/allouani__parfumerie1/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-kitchen-lux-dark-green-300 bg-gradient-to-r from-kitchen-lux-dark-green-50 to-kitchen-lux-dark-green-100 px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.2em] text-kitchen-lux-dark-green-800 transition-all duration-200 hover:border-kitchen-lux-dark-green-500 hover:bg-gradient-to-r hover:from-kitchen-lux-dark-green-100 hover:to-kitchen-lux-dark-green-200 hover:text-kitchen-lux-dark-green-900 hover:shadow-md hover:shadow-kitchen-lux-dark-green-200/30"
            >
              <Image
                src="/WINTERDZ.png"
                alt="Allouani Logo"
                width={14}
                height={14}
                className="rounded-full object-cover"
              />
              <span>{t.navbar.social.instagram}</span>
            </Link>
            {rightNavItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex items-center justify-center rounded-full border border-kitchen-lux-dark-green-300 bg-gradient-to-r from-kitchen-lux-dark-green-50 to-kitchen-lux-dark-green-100 px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.3em] text-kitchen-lux-dark-green-800 transition-all duration-200 hover:border-kitchen-lux-dark-green-500 hover:bg-gradient-to-r hover:from-kitchen-lux-dark-green-100 hover:to-kitchen-lux-dark-green-200 hover:text-kitchen-lux-dark-green-900 hover:shadow-md hover:shadow-kitchen-lux-dark-green-200/30 ${
                    isActive
                      ? 'border-kitchen-lux-dark-green-500 bg-gradient-to-r from-kitchen-lux-dark-green-100 to-kitchen-lux-dark-green-200 text-kitchen-lux-dark-green-900 shadow-md shadow-kitchen-lux-dark-green-200/30'
                      : ''
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
          <div className="absolute right-1/2 translate-x-1/2 top-full mt-2 md:static md:translate-x-0 md:mt-0 md:flex md:items-center">
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={t.navbar.languageToggle.ariaLabel}
              className="inline-flex items-center justify-center rounded-full border border-kitchen-lux-dark-green-300 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-kitchen-lux-dark-green-700 transition-colors hover:bg-white"
            >
              {t.navbar.languageToggle.shortLabel}
            </button>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}
