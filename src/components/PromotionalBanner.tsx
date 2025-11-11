'use client'

export const PromotionalBanner = (): JSX.Element => {
  const handleBannerClick = (): void => {
    // You can customize this to navigate to a specific page or open a modal
    // For example: window.location.href = '/promotions'
  }

  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleBannerClick()
    }
  }

  const bannerContent = (
    <>
      <span className="font-modern tracking-wide">
        Livraison 58 willayas - Paiement à la livraison
      </span>
    </>
  )

  return (
    <div
      onClick={handleBannerClick}
      onKeyDown={handleKeyDown}
      className="fixed top-0 left-0 right-0 z-[60] w-full text-white py-3 px-4 text-sm font-semibold block overflow-hidden cursor-pointer touch-manipulation active:opacity-90 transition-opacity"
      style={{
        background: 'linear-gradient(to right, #2E8B57 0%, #9AFE2E 50%, #2E8B57 100%)',
        minHeight: '44px', // Touch-friendly minimum height
      }}
      aria-label="Promotional banner: Livraison 58 willayas - Paiement à la livraison"
      tabIndex={0}
    >
      <div className="relative w-full overflow-hidden h-full flex items-center">
        <div className="animate-scroll-banner whitespace-nowrap inline-flex items-center gap-4">
          {bannerContent}
          {bannerContent}
          {bannerContent}
        </div>
      </div>
    </div>
  )
}

