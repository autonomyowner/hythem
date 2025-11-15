'use client'

import { useState } from 'react'
import type { Product } from '@/data/products'
import { CountdownTimer } from './CountdownTimer'
import { QuantitySelector } from './QuantitySelector'
import { Accordion } from './Accordion'
import { CheckoutModal } from './CheckoutModal'
import { useLanguage } from '@/context/LanguageContext'
import { useTranslations } from '@/hooks/useTranslations'

type ProductDetailsProps = {
  product: Product
}

export const ProductDetails = ({ product }: ProductDetailsProps): JSX.Element => {
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false)
  const { language } = useLanguage()
  const t = useTranslations()

  const localizedName = product.name[language]
  const localizedCategory = product.category[language]
  const localizedNeed = product.need ? t.product.needs[product.need] ?? product.need : null

  const getSummaryMessage = (): string => {
    const totalPrice = product.price * quantity
    const lines = [
      `${t.checkout.recap.product}: ${localizedName}`,
      `${t.checkout.recap.quantity}: ${quantity}`,
      `${t.checkout.recap.total}: ${totalPrice.toLocaleString()} DA`,
      `${t.checkout.recap.category}: ${localizedCategory}`,
      product.need ? `${t.shopFilters.usage}: ${localizedNeed}` : null,
    ].filter(Boolean) as string[]

    const summary = lines.join('\n')

    if (language === 'fr') {
      return `Bonjour ! Je souhaite ajouter au panier :\n\n${summary}\n\nMerci !`
    }

    return `مرحباً! أود إضافة المنتج التالي إلى السلة:\n\n${summary}\n\nشكراً لكم!`
  }

  const handleAddToCart = (): void => {
    const phoneNumber = '+213671389113'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(getSummaryMessage())}`
    window.open(whatsappUrl, '_blank')
  }

  const handleBuyNow = (): void => {
    setIsCheckoutModalOpen(true)
  }

  const handleWishlist = (): void => {
    setIsWishlisted(!isWishlisted)
    // TODO: Implement wishlist functionality
  }

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-elegant font-semibold text-kitchen-lux-dark-green-800 mb-4">
          {localizedName}
        </h1>

        {/* Price */}
        <div className="flex items-center gap-3 mb-4">
          {product.originalPrice && product.originalPrice > product.price ? (
            <>
              <span className="text-3xl font-bold text-kitchen-lux-dark-green-800">
                {product.price.toLocaleString()} DA
              </span>
              <span className="text-lg text-kitchen-lux-dark-green-600 line-through">
                {product.originalPrice.toLocaleString()} DA
              </span>
            </>
          ) : (
            <span className="text-3xl font-bold text-kitchen-lux-dark-green-800">
              {product.price.toLocaleString()} DA
            </span>
          )}
        </div>

        {/* Social Proof */}
        <p className="text-sm text-kitchen-lux-dark-green-600 mb-4">
          {t.product.viewersLabel(product.viewersCount)}
        </p>

        {/* Stock Status */}
        <div className="mb-4">
          {product.inStock ? (
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
              {t.product.stock.inStock}
            </span>
          ) : (
            <span className="inline-block px-3 py-1 bg-red-100 text-red-800 text-sm font-semibold rounded-full">
              {t.product.stock.outOfStock}
            </span>
          )}
        </div>

        {/* Delivery Estimate */}
        <p className="text-sm text-kitchen-lux-dark-green-700 mb-4">
          {product.deliveryEstimate[language]}
        </p>
      </div>

      {/* Countdown Timer */}
      {product.countdownEndDate && (
        <div className="mb-6">
          <CountdownTimer endDate={product.countdownEndDate} />
        </div>
      )}

      {/* Actions Section */}
      <div className="space-y-4">
        {/* Wishlist */}
        <button
          onClick={handleWishlist}
          className="flex items-center gap-2 text-sm text-kitchen-lux-dark-green-700 hover:text-kitchen-lux-dark-green-800 transition-colors duration-200"
          type="button"
        >
          <svg
            className={`w-5 h-5 ${isWishlisted ? 'fill-red-500' : 'fill-none'}`}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <span>{t.product.wishlist}</span>
        </button>

        {/* Quantity Selector */}
        <div>
          <label className="block text-sm font-semibold text-kitchen-lux-dark-green-800 mb-2">
            {t.product.quantity}
          </label>
          <QuantitySelector
            defaultValue={1}
            min={1}
            max={10}
            onQuantityChange={setQuantity}
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="w-full bg-black text-white px-8 py-4 rounded-lg font-semibold uppercase tracking-[0.2em] text-sm hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            type="button"
          >
            {t.product.addToCart}
          </button>
          <button
            onClick={handleBuyNow}
            disabled={!product.inStock}
            className="w-full bg-[#9AFE2E] text-black px-8 py-4 rounded-lg font-semibold uppercase tracking-[0.2em] text-sm hover:bg-[#8AEE1E] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            type="button"
          >
            {t.product.buyNow}
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="pt-6 border-t border-kitchen-lux-dark-green-200">
        <p className="text-base text-kitchen-lux-dark-green-700 leading-relaxed">
          {product.description[language]}
        </p>
      </div>

      {/* Accordion Sections */}
      <div className="space-y-0 pt-6 border-t border-kitchen-lux-dark-green-200">
        <Accordion title={t.product.accordion.info}>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-kitchen-lux-dark-green-800 mb-2">
                {t.product.accordion.ingredients}
              </h4>
              <p className="text-kitchen-lux-dark-green-700">{product.ingredients[language]}</p>
            </div>
            <div>
              <h4 className="font-semibold text-kitchen-lux-dark-green-800 mb-2">
                {t.product.accordion.usage}
              </h4>
              <p className="text-kitchen-lux-dark-green-700">
                {product.usageInstructions[language]}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-kitchen-lux-dark-green-800 mb-2">
                {t.product.accordion.benefits}
              </h4>
              <ul className="list-disc list-inside space-y-1 text-kitchen-lux-dark-green-700">
                {product.benefits.map((benefit, index) => (
                  <li key={index}>{benefit[language]}</li>
                ))}
              </ul>
            </div>
          </div>
        </Accordion>

        <Accordion title={`${t.product.accordion.delivery} & ${t.product.accordion.returns}`}>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-kitchen-lux-dark-green-800 mb-1">
                {t.product.accordion.delivery}
              </h4>
              <p className="text-kitchen-lux-dark-green-700">
                {product.additionalInfo.shipping[language]}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-kitchen-lux-dark-green-800 mb-1">
                {t.product.accordion.returns}
              </h4>
              <p className="text-kitchen-lux-dark-green-700">
                {product.additionalInfo.returns[language]}
              </p>
            </div>
          </div>
        </Accordion>

        {product.additionalInfo.exclusiveOffers && (
          <Accordion title={t.product.accordion.exclusive}>
            <p className="text-kitchen-lux-dark-green-700">
              {product.additionalInfo.exclusiveOffers[language]}
            </p>
          </Accordion>
        )}

        <Accordion title={t.product.accordion.payment}>
          <p className="text-kitchen-lux-dark-green-700">
            {product.additionalInfo.payment[language]}
          </p>
        </Accordion>
      </div>

      {/* Trust Badges */}
      <div className="pt-6 border-t border-kitchen-lux-dark-green-200">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {t.product.trustBadges.map((badge, index) => (
            <div key={badge} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-kitchen-lux-dark-green-100 rounded-full flex items-center justify-center mb-2">
                <svg
                  className="w-6 h-6 text-kitchen-lux-dark-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      index === 0
                        ? 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                        : index === 1
                          ? 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                          : 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7'
                    }
                  />
                </svg>
              </div>
              <p className="text-xs font-semibold text-kitchen-lux-dark-green-800">{badge}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        product={product}
        quantity={quantity}
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
      />
    </div>
  )
}
