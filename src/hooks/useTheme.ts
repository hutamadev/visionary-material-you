import { useState, useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'

export type Theme = 'dark' | 'light' | 'system'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme) || 'system'
    }
    return 'system'
  })

  // Tracks the ACTUAL resolved theme (accounts for OS preference when in 'system' mode)
  const [resolvedDark, setResolvedDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  useEffect(() => {
    const root = document.documentElement
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const applyTheme = () => {
      let dark: boolean
      if (theme === 'system') {
        dark = mediaQuery.matches
      } else {
        dark = theme === 'dark'
      }
      root.classList.toggle('dark', dark)
      setResolvedDark(dark)
    }

    applyTheme()

    const listener = () => {
      if (theme === 'system') {
        root.classList.toggle('dark', mediaQuery.matches)
        setResolvedDark(mediaQuery.matches)
      }
    }

    mediaQuery.addEventListener('change', listener)
    localStorage.setItem('theme', theme)

    return () => mediaQuery.removeEventListener('change', listener)
  }, [theme])

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    trackEvent('theme_toggle', { theme: newTheme })
  }

  return {
    theme,
    isDark: theme === 'dark' ? true : resolvedDark,
    toggleTheme,
    setTheme,
  }
}
