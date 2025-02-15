import React, { useEffect, useState } from 'react'
import { useSettingsStore } from '@main-ui/entities/settings'

export const AppLoader = ({ children }: { children?: React.ReactNode }): React.JSX.Element => {
  const loadSettings = useSettingsStore((s) => s.loadSettings)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)

    const loader = async (): Promise<void> => {
      await Promise.all([loadSettings()])

      setIsLoading(false)
      window.api.app.showMainWindow()
    }

    loader()
  }, [loadSettings])

  return <>{!isLoading && children}</>
}
