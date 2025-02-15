import { useEffect } from 'react'
import { useSettingsStore } from '@main-ui/entities/settings'
import { setTitleBarColors } from '@main-ui/shared/api/app'
import { addTransparencyToHex } from '@main-ui/shared/lib/colors'

const updateThemeMode = (newTheme: 'light' | 'dark'): void => {
  document.documentElement.setAttribute('data-theme', newTheme)

  const computedStyle = getComputedStyle(document.documentElement)
  const bgColor = computedStyle.getPropertyValue('--bg-color').trim()
  const fontColor = computedStyle.getPropertyValue('--font-base-color').trim()

  setTitleBarColors(addTransparencyToHex(bgColor, 0), addTransparencyToHex(fontColor, 1))
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
