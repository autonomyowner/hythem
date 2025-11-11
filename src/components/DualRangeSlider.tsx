'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface DualRangeSliderProps {
  min: number
  max: number
  value: [number, number]
  onChange: (value: [number, number]) => void
  step?: number
  className?: string
  labelPosition?: 'top' | 'bottom'
  formatLabel?: (value: number) => string
}

const DualRangeSlider = React.forwardRef<HTMLDivElement, DualRangeSliderProps>(
  (
    {
      className,
      min,
      max,
      value,
      onChange,
      step = 1,
      labelPosition = 'top',
      formatLabel = (val) => `${val} DA`,
      ...props
    },
    ref,
  ) => {
    const [minVal, maxVal] = value
    const minValRef = React.useRef<HTMLInputElement>(null)
    const maxValRef = React.useRef<HTMLInputElement>(null)
    const range = React.useRef<HTMLDivElement>(null)

    const getPercent = React.useCallback(
      (val: number) => Math.round(((val - min) / (max - min)) * 100),
      [min, max],
    )

    React.useEffect(() => {
      if (maxValRef.current) {
        const minPercent = getPercent(minVal)
        const maxPercent = getPercent(maxVal)

        if (range.current) {
          range.current.style.left = `${minPercent}%`
          range.current.style.width = `${maxPercent - minPercent}%`
        }
      }
    }, [minVal, maxVal, getPercent])

    return (
      <div ref={ref} className={cn('relative w-full', className)} {...props}>
        <div className="relative h-2 w-full rounded-full bg-kitchen-lux-dark-green-200">
          <div
            ref={range}
            className="absolute h-2 rounded-full bg-kitchen-lux-dark-green-600"
          />
        </div>
        <div className="relative">
          <input
            type="range"
            min={min}
            max={max}
            value={minVal}
            step={step}
            onChange={(e) => {
              const value = Math.min(Number(e.target.value), maxVal - step)
              onChange([value, maxVal])
            }}
            className="absolute h-0 w-full appearance-none bg-transparent z-10"
            style={{ zIndex: minVal > max - 100 ? 20 : 10 }}
          />
          <input
            type="range"
            min={min}
            max={max}
            value={maxVal}
            step={step}
            onChange={(e) => {
              const value = Math.max(Number(e.target.value), minVal + step)
              onChange([minVal, value])
            }}
            className="absolute h-0 w-full appearance-none bg-transparent z-10"
            style={{ zIndex: 10 }}
          />
        </div>
        <div className="relative mt-4">
          <div
            className={cn(
              'absolute flex w-full justify-between',
              labelPosition === 'top' && '-top-7',
              labelPosition === 'bottom' && 'top-4',
            )}
          >
            <span className="text-xs font-medium text-kitchen-lux-dark-green-700 bg-white px-2 py-1 rounded border border-kitchen-lux-dark-green-200">
              {formatLabel(minVal)}
            </span>
            <span className="text-xs font-medium text-kitchen-lux-dark-green-700 bg-white px-2 py-1 rounded border border-kitchen-lux-dark-green-200">
              {formatLabel(maxVal)}
            </span>
          </div>
        </div>
      </div>
    )
  },
)

DualRangeSlider.displayName = 'DualRangeSlider'

export { DualRangeSlider }

