'use client'

import { useMemo } from 'react'
import { uiTranslations, type UITranslation } from '@/i18n/translations'
import { useLanguage } from '@/context/LanguageContext'

export const useTranslations = (): UITranslation => {
  const { language } = useLanguage()

  return useMemo(() => uiTranslations[language], [language])
}

