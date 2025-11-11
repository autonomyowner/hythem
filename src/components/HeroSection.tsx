'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const HeroSection = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [elementsVisible, setElementsVisible] = useState<{
    logo: boolean
    subtitle: boolean
    title: boolean
    buttons: boolean
    footer: boolean
  }>({
    logo: false,
    subtitle: false,
    title: false,
    buttons: false,
    footer: false
  })

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsVisible(true), 100)
    return () => window.clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (isVisible) {
      const delays = {
        logo: 100,
        subtitle: 200,
        title: 400,
        buttons: 600,
        footer: 800
      }

      Object.entries(delays).forEach(([key, delay]) => {
        setTimeout(() => {
          setElementsVisible(prev => ({ ...prev, [key]: true }))
        }, delay)
      })
    }
  }, [isVisible])

  const handleContactClick = (): void => {
    const phoneNumber = '+213673734578'
    const message =
      'Bonjour! Je suis interesse(e) par vos vêtements WinterDZ.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        >
          <source
            src="/sectionhgero.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-4 py-28 sm:px-6 lg:px-8 lg:py-36">
        <div className="max-w-3xl space-y-8">
          {/* Logo */}
          <div 
            className={`flex justify-center transition-all duration-700 ease-out ${
              elementsVisible.logo
                ? 'translate-y-0 opacity-100 scale-100'
                : 'translate-y-8 opacity-0 scale-95'
            }`}
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
              <Image
                src="/WINTERDZ.png"
                alt="WinterDZ Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          <p 
            className={`text-xs uppercase tracking-[0.4em] text-white/80 transition-all duration-700 ease-out ${
              elementsVisible.subtitle
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            Des vêtements de qualité pour Algériens, conçus avec passion pour votre style et votre confort.
          </p>

          <h1 
            className={`text-4xl font-elegant font-semibold text-white sm:text-5xl lg:text-6xl transition-all duration-800 ease-out ${
              elementsVisible.title
                ? 'translate-y-0 opacity-100'
                : 'translate-y-12 opacity-0'
            }`}
          >
            WinterDZ : Vêtements pour Algériens, Style et Élégance à Votre Image.
          </h1>

          <p 
            className={`text-base text-white/90 transition-all duration-700 ease-out ${
              elementsVisible.title
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Découvrez notre collection de vêtements spécialement conçus pour les Algériens.
          </p>


          <div 
            className={`flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 transition-all duration-700 ease-out ${
              elementsVisible.buttons
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            <button
              onClick={handleContactClick}
              className="inline-flex items-center justify-center rounded-full border border-kitchen-lux-dark-green-300 bg-gradient-to-r from-kitchen-lux-dark-green-50 to-kitchen-lux-dark-green-100 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-kitchen-lux-dark-green-800 transition-all duration-200 hover:border-kitchen-lux-dark-green-500 hover:bg-gradient-to-r hover:from-kitchen-lux-dark-green-100 hover:to-kitchen-lux-dark-green-200 hover:text-kitchen-lux-dark-green-900 hover:shadow-md hover:shadow-kitchen-lux-dark-green-200/30"
              type="button"
            >
              DÉCOUVRIR NOS COMPLÉMENTS
            </button>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/50 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
            >
              En savoir plus
            </Link>
          </div>

          <div 
            className={`flex flex-col gap-4 border-t border-white/20 pt-6 sm:flex-row sm:items-center sm:justify-between transition-all duration-700 ease-out ${
              elementsVisible.footer
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="text-sm uppercase tracking-[0.3em] text-white/70">
              Formulé en France
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
              <span className="whitespace-nowrap">Ingrédients actifs purs</span>
              <span className="whitespace-nowrap">Sans OGM ni gluten</span>
              <span className="whitespace-nowrap">Facile à assimiler</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
