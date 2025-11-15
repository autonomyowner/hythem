'use client'

import { useTranslations } from '@/hooks/useTranslations'

export const SiteFooter = (): JSX.Element => {
  const t = useTranslations()

  return (
    <footer
      className="backdrop-blur-md border-t border-green-600/20 text-white py-4"
      style={{
        background: 'linear-gradient(to right, #2E8B57 0%, #9AFE2E 50%, #2E8B57 100%)',
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          {t.footer.signature}{' '}
          <a
            href="https://www.sitedz.store"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition-colors underline"
          >
            {t.footer.madeBy}
          </a>
        </p>
      </div>
    </footer>
  )
}

