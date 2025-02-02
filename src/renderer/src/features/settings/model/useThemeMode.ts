import { useEffect } from 'react'
import { useSettingsStore } from '@renderer/entities/settings'

const updateThemeMode = (newTheme: 'light' | 'dark'): void => {
  document.documentElement.setAttribute('data-theme', newTheme)
}

const handleSystemTheme = (): (() => void) => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const handleChange = (): void => {
    updateThemeMode(mediaQuery.matches ? 'dark' : 'light')
  }

  updateThemeMode(mediaQuery.matches ? 'dark' : 'light')
  mediaQuery.addEventListener('change', handleChange)

  return () => {
    mediaQuery.removeEventListener('change', handleChange)
  }
}

export function useThemeMode(): void {
  const theme = useSettingsStore((state) => state.settings.themeMode)

  useEffect(() => {
    if (theme === 'system') {
      return handleSystemTheme()
    }

    updateThemeMode(theme)
    return undefined
  }, [theme])
}
