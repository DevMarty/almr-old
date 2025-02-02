import { useEffect } from 'react'
import { useSettingsStore } from '@renderer/entities/settings'

export const useAppInit = (): void => {
  const loadSettings = useSettingsStore((state) => state.loadSettings)

  useEffect(() => {
    ;(async (): Promise<void> => {
      try {
        await Promise.all([loadSettings()])
      } catch (error) {
        console.error('Ошибка при инициализации приложения:', error)
      }
    })()
  }, [loadSettings])
}
