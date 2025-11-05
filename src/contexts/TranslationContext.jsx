import { useMemo } from 'react'
import esTranslations from '../i18n/es.json'
import enTranslations from '../i18n/en.json'
import { TranslationContext } from './TranslationContext.js'

export function TranslationProvider({ children }) {
  const language = useMemo(() => {
    if (typeof window === 'undefined') return 'es'

    const browserLang = navigator.language || navigator.userLanguage

    const langCode = browserLang.split('-')[0].toLowerCase()

    return langCode === 'en' ? 'en' : 'es'
  }, [])

  const translations = {
    es: esTranslations,
    en: enTranslations
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        return key
      }
    }

    return value || key
  }

  return (
    <TranslationContext.Provider value={{ language, t }}>
      {children}
    </TranslationContext.Provider>
  )
}
