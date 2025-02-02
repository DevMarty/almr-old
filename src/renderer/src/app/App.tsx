import React from 'react'
import { AppLayout } from '@renderer/app/layouts/AppLayout'
import { useAppInit } from '@renderer/app/hooks/useAppInit'
import { useThemeMode } from '@renderer/features/settings'

function App(): React.JSX.Element {
  useAppInit()
  useThemeMode()

  return <AppLayout />
}

export default App
