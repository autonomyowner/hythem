'use client'

export const CTASection = (): JSX.Element => {
  const handleWhatsAppClick = (): void => {
    const phoneNumber = '+213673734578'
    const message =
      'Bonjour! Je souhaite discuter de mon projet de cuisine sur mesure.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`
    window.open(whatsappUrl, '_blank')
  }

  const handlePhoneClick = (): void => {
    window.open('tel:+213673734578', '_self')
  }

  const handleEmailClick = (): void => {
    window.open('mailto:contact@cuisine-alger.com', '_self')
  }

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-kitchen-lux-dark-green-200 bg-white/85 px-6 py-16 shadow-sm sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-kitchen-lux-dark-green-600">
            Pret a concevoir
          </p>
          <h2 className="mt-4 text-4xl font-elegant font-semibold text-kitchen-lux-dark-green-800 sm:text-5xl">
            Imaginons ensemble votre cuisine ideale
          </h2>
          <p className="mt-6 text-base leading-relaxed text-kitchen-lux-dark-green-700">
            Partagez vos envies et contraintes, nous nous chargeons de concevoir
            une cuisine fonctionnelle, esthetique et parfaitement adaptee a vos besoins.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={handleWhatsAppClick}
            className="rounded-full bg-kitchen-lux-dark-green-800 px-10 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition-colors duration-200 hover:bg-kitchen-lux-dark-green-700"
            type="button"
          >
            Demander un devis
          </button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 text-center sm:grid-cols-3">
          <div className="rounded-2xl border border-kitchen-lux-dark-green-200 bg-white/80 px-6 py-8">
            <p className="text-sm uppercase tracking-[0.3em] text-kitchen-lux-dark-green-600">
              WhatsApp
            </p>
            <p className="mt-4 text-lg font-semibold text-kitchen-lux-dark-green-800">
              +213 79 733 94 51
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-kitchen-lux-dark-green-600 hover:text-kitchen-lux-dark-green-800 underline underline-offset-4 transition-colors duration-200"
              type="button"
            >
              Demander un devis
            </button>
          </div>

          <div className="rounded-2xl border border-kitchen-lux-dark-green-200 bg-white/80 px-6 py-8">
            <p className="text-sm uppercase tracking-[0.3em] text-kitchen-lux-dark-green-600">
              Telephone
            </p>
            <p className="mt-4 text-lg font-semibold text-kitchen-lux-dark-green-800">
              +213 79 733 94 51
            </p>
            <button
              onClick={handlePhoneClick}
              className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-kitchen-lux-dark-green-600 hover:text-kitchen-lux-dark-green-800 underline underline-offset-4 transition-colors duration-200"
              type="button"
            >
              Appeler maintenant
            </button>
          </div>

          <div className="rounded-2xl border border-kitchen-lux-dark-green-200 bg-white/80 px-6 py-8">
            <p className="text-sm uppercase tracking-[0.3em] text-kitchen-lux-dark-green-600">
              Email
            </p>
            <p className="mt-4 text-lg font-semibold text-kitchen-lux-dark-green-800">
              contact@cuisine-alger.com
            </p>
            <button
              onClick={handleEmailClick}
              className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-kitchen-lux-dark-green-600 hover:text-kitchen-lux-dark-green-800 underline underline-offset-4 transition-colors duration-200"
              type="button"
            >
              Demander un devis
            </button>
          </div>
        </div>

        <div className="mt-10 border-t border-kitchen-lux-dark-green-200 pt-8 text-center text-xs uppercase tracking-[0.35em] text-kitchen-lux-dark-green-600">
          Disponibles 7j/7 pour vos projets
        </div>
      </div>
    </section>
  )
}
