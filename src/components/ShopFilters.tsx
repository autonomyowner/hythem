'use client'

import { useState } from 'react'
import type { ProductType, ProductNeed, FilterState } from '@/data/products'

type ShopFiltersProps = {
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
  productCounts: {
    inStock: number
    outOfStock: number
  }
}

const productTypes: ProductType[] = [
  'Parfum Femme',
  'Parfum Homme',
  'Eau de Parfum',
  'Eau de Toilette',
]

const needs: ProductNeed[] = [
  'Journée',
  'Soirée',
  'Quotidien',
  'Spécial',
]

const priceRanges = [
  { label: 'Moins de 5000 DA', min: 0, max: 5000 },
  { label: '5000 DA - 10000 DA', min: 5000, max: 10000 },
  { label: 'Plus de 10000 DA', min: 10000, max: 100000 },
]

export const ShopFilters = ({
  filters,
  onFiltersChange,
  productCounts,
}: ShopFiltersProps): JSX.Element => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const updateFilter = <K extends keyof FilterState>(
    key: K,
    value: FilterState[K],
  ): void => {
    onFiltersChange({ ...filters, [key]: value })
  }

  const toggleProductType = (type: ProductType): void => {
    const newTypes = filters.productTypes.includes(type)
      ? filters.productTypes.filter((t) => t !== type)
      : [...filters.productTypes, type]
    updateFilter('productTypes', newTypes)
  }

  const toggleNeed = (need: ProductNeed): void => {
    const newNeeds = filters.needs.includes(need)
      ? filters.needs.filter((n) => n !== need)
      : [...filters.needs, need]
    updateFilter('needs', newNeeds)
  }

  const toggleBrand = (brand: string): void => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand]
    updateFilter('brands', newBrands)
  }

  const setPriceRange = (min: number, max: number): void => {
    updateFilter('priceRange', { min, max })
  }

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Disponibilité */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-kitchen-lux-dark-green-800 mb-3">
          Disponibilité
        </h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="availability"
              checked={filters.availability === 'all'}
              onChange={() => updateFilter('availability', 'all')}
              className="w-4 h-4 text-kitchen-lux-dark-green-600 focus:ring-kitchen-lux-dark-green-500"
            />
            <span className="text-sm text-kitchen-lux-dark-green-700">Tous</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="availability"
              checked={filters.availability === 'in-stock'}
              onChange={() => updateFilter('availability', 'in-stock')}
              className="w-4 h-4 text-kitchen-lux-dark-green-600 focus:ring-kitchen-lux-dark-green-500"
            />
            <span className="text-sm text-kitchen-lux-dark-green-700">
              En stock ({productCounts.inStock})
            </span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="availability"
              checked={filters.availability === 'out-of-stock'}
              onChange={() => updateFilter('availability', 'out-of-stock')}
              className="w-4 h-4 text-kitchen-lux-dark-green-600 focus:ring-kitchen-lux-dark-green-500"
            />
            <span className="text-sm text-kitchen-lux-dark-green-700">
              Épuisé ({productCounts.outOfStock})
            </span>
          </label>
        </div>
      </div>

      {/* Marque */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-kitchen-lux-dark-green-800 mb-3">
          Marque
        </h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.brands.includes('Brahim Perfum')}
              onChange={() => toggleBrand('Brahim Perfum')}
              className="w-4 h-4 text-kitchen-lux-dark-green-600 focus:ring-kitchen-lux-dark-green-500 rounded"
            />
            <span className="text-sm text-kitchen-lux-dark-green-700">Brahim Perfum</span>
          </label>
        </div>
      </div>

      {/* Prix */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-kitchen-lux-dark-green-800 mb-3">
          Prix
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range.label} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="priceRange"
                checked={
                  filters.priceRange.min === range.min &&
                  filters.priceRange.max === range.max
                }
                onChange={() => setPriceRange(range.min, range.max)}
                className="w-4 h-4 text-kitchen-lux-dark-green-600 focus:ring-kitchen-lux-dark-green-500"
              />
              <span className="text-sm text-kitchen-lux-dark-green-700">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Type de Produit */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-kitchen-lux-dark-green-800 mb-3">
          Type de Produit
        </h3>
        <div className="space-y-2">
          {productTypes.map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.productTypes.includes(type)}
                onChange={() => toggleProductType(type)}
                className="w-4 h-4 text-kitchen-lux-dark-green-600 focus:ring-kitchen-lux-dark-green-500 rounded"
              />
              <span className="text-sm text-kitchen-lux-dark-green-700">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Besoin */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-kitchen-lux-dark-green-800 mb-3">
          Besoin
        </h3>
        <div className="space-y-2">
          {needs.map((need) => (
            <label key={need} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.needs.includes(need)}
                onChange={() => toggleNeed(need)}
                className="w-4 h-4 text-kitchen-lux-dark-green-600 focus:ring-kitchen-lux-dark-green-500 rounded"
              />
              <span className="text-sm text-kitchen-lux-dark-green-700">{need}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Filter Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden flex items-center justify-between w-full px-4 py-3 border border-kitchen-lux-dark-green-200 rounded-lg bg-white text-kitchen-lux-dark-green-800 font-medium mb-4"
        type="button"
      >
        <span className="text-sm uppercase tracking-[0.2em]">Filtres</span>
        <svg
          className={`w-5 h-5 transition-transform ${isMobileOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Mobile Filter Panel */}
      {isMobileOpen && (
        <div className="lg:hidden mb-6 p-4 border border-kitchen-lux-dark-green-200 rounded-lg bg-white">
          <FilterContent />
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-24">
          <h2 className="text-lg font-elegant font-semibold text-kitchen-lux-dark-green-800 mb-6">
            Filtres
          </h2>
          <div className="p-6 border border-kitchen-lux-dark-green-200 rounded-lg bg-white">
            <FilterContent />
          </div>
        </div>
      </aside>
    </>
  )
}


