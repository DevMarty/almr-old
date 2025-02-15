import React from 'react'
import { useThemeMode } from '@main-ui/features/settings'
import { AppLoader } from './loaders/AppLoader'
import { AppLayout } from './layouts/AppLayout'

function App(): React.JSX.Element {
  useThemeMode()

  return (
    <AppLoader>
      <AppLayout />
    </AppLoader>
  )
}

export default App
