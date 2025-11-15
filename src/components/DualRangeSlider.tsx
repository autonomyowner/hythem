'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn } from '@/lib/utils'

interface DualRangeSliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  labelPosition?: 'top' | 'bottom'
  label?: (value: number | undefined, index: number) => React.ReactNode
}

const DualRangeSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  DualRangeSliderProps
>(
  (
    {
      className,
      label,
      labelPosition = 'top',
      min = 0,
      max = 100,
      value,
      defaultValue,
      ...props
    },
    ref,
  ) => {
    const fallbackValue = React.useMemo<number[]>(() => {
      if (Array.isArray(value) && value.length === 2) {
        return value as number[]
      }

      if (Array.isArray(defaultValue) && defaultValue.length === 2) {
        return defaultValue as number[]
      }

      return [Number(min), Number(max)]
    }, [value, defaultValue, min, max])

    const displayValues = (Array.isArray(value) ? value : fallbackValue) as number[]

    return (
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          'relative flex w-full select-none items-center py-3 touch-pan-y',
          className,
        )}
        min={min}
        max={max}
        value={value}
        defaultValue={
          defaultValue ?? (Array.isArray(value) ? undefined : fallbackValue)
        }
        {...props}
      >
        <SliderPrimitive.Track className="relative h-3 w-full grow overflow-hidden rounded-full bg-gradient-to-r from-kitchen-lux-dark-green-50 via-kitchen-lux-dark-green-100 to-kitchen-lux-dark-green-200">
          <SliderPrimitive.Range className="absolute h-full bg-kitchen-lux-dark-green-500 transition-all duration-300 ease-out" />
        </SliderPrimitive.Track>
        {displayValues.map((thumbValue, index) => (
          <SliderPrimitive.Thumb
            key={index}
            aria-label={index === 0 ? 'Valeur minimale' : 'Valeur maximale'}
            className="relative flex h-6 w-6 translate-x-[-50%] items-center justify-center rounded-full border-2 border-kitchen-lux-dark-green-500 bg-white shadow-lg transition-transform duration-200 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-kitchen-lux-dark-green-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 before:absolute before:-inset-3 before:rounded-full before:content-['']"
          >
            {label && (
              <span
                className={cn(
                  'pointer-events-none absolute left-1/2 flex w-max -translate-x-1/2 rounded-full border border-kitchen-lux-dark-green-200 bg-white/95 px-2 py-1 text-[11px] font-semibold text-kitchen-lux-dark-green-700 shadow-sm backdrop-blur-sm',
                  labelPosition === 'top' && '-top-9',
                  labelPosition === 'bottom' && 'top-7',
                )}
              >
                {label(thumbValue, index)}
              </span>
            )}
          </SliderPrimitive.Thumb>
        ))}
      </SliderPrimitive.Root>
    )
  },
)

DualRangeSlider.displayName = 'DualRangeSlider'

export { DualRangeSlider }

