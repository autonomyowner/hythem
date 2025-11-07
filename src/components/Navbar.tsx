'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItem = {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Boutique', href: '/services' },
]

// Split menu items: first on left, rest on right
const leftNavItem = navItems[0]
const rightNavItems = navItems.slice(1)

export const Navbar = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isBrandVisible, setIsBrandVisible] = useState<boolean>(true)
  const pathname = usePathname()

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
    <nav
      className={`fixed inset-x-0 top-10 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-kitchen-white-clean/92 backdrop-blur border-b border-kitchen-marble-gray-light shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center md:h-20">
          {/* Left menu item - Desktop only */}
          <div className="hidden items-center md:flex flex-1">
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
                className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide uppercase transition-opacity duration-1000 ${
                  isBrandVisible ? 'opacity-100' : 'opacity-50'
                }`}
              >
                <span className="text-kitchen-black-deep">Cel</span>
                <span style={{ color: '#9AFE2E' }}>lavie</span>
              </span>
            </Link>
          </div>

          {/* Right menu items - Desktop only */}
          <div className="hidden items-center space-x-7 md:flex flex-1 justify-end">
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
          {/* Accueil - Left side */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 md:hidden">
            {(() => {
              const isActive = pathname === leftNavItem.href
              return (
                <Link
                  href={leftNavItem.href}
                  className={`inline-flex items-center justify-center rounded-full border border-kitchen-lux-dark-green-300 bg-gradient-to-r from-kitchen-lux-dark-green-50 to-kitchen-lux-dark-green-100 px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.3em] text-kitchen-lux-dark-green-800 transition-all duration-200 hover:border-kitchen-lux-dark-green-500 hover:bg-gradient-to-r hover:from-kitchen-lux-dark-green-100 hover:to-kitchen-lux-dark-green-200 hover:text-kitchen-lux-dark-green-900 hover:shadow-md hover:shadow-kitchen-lux-dark-green-200/30 ${
                    isActive
                      ? 'border-kitchen-lux-dark-green-500 bg-gradient-to-r from-kitchen-lux-dark-green-100 to-kitchen-lux-dark-green-200 text-kitchen-lux-dark-green-900 shadow-md shadow-kitchen-lux-dark-green-200/30'
                      : ''
                  }`}
                >
                  {leftNavItem.label}
                </Link>
              )
            })()}
          </div>

          {/* Boutique - Far right */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 md:hidden">
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
        </div>
      </div>
    </nav>
  )
}
