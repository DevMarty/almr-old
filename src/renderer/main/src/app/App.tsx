import React from 'react'
import { RouterProvider } from 'react-router'
import { useThemeMode } from '@main-ui/features/settings'
import { router } from '@main-ui/app/router'

function App(): React.JSX.Element {
  useThemeMode()

  return <RouterProvider router={router} />
}

export default App
