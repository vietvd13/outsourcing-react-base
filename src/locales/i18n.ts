/**
 * @file Internationalization (i18n) configuration for the application.
 * Sets up multi-language support using react-i18next.
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import vi from './vi.json';

/**
 * Initialize i18n with language resources and configuration.
 * Supports English (en) and Vietnamese (vi) languages.
 * Default language is English with fallback to English if translation is missing.
 */
void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    vi: { translation: vi }
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language when translation is missing
  interpolation: {
    escapeValue: false // React already escapes values to prevent XSS
  }
});

export default i18n;
