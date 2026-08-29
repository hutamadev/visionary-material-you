import { useState, useEffect } from 'react'

export type Theme = 'dark' | 'light' | 'system'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme) || 'system'
    }
    return 'system'
  })

  useEffect(() => {
    const root = document.documentElement
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const applyTheme = () => {
      if (theme === 'system') {
        if (mediaQuery.matches) {
          root.classList.add('dark')
        } else {
          root.classList.remove('dark')
        }
      } else {
        root.classList.toggle('dark', theme === 'dark')
      }
    }

    applyTheme()

    const listener = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        root.classList.toggle('dark', e.matches)
      }
    }

    mediaQuery.addEventListener('change', listener)
    localStorage.setItem('theme', theme)

    return () => mediaQuery.removeEventListener('change', listener)
  }, [theme])

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme)
  }

  return {
    theme,
    isDark: theme === 'dark',
    toggleTheme,
    setTheme,
  }
}
