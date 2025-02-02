import React from 'react'
import { AppLayout } from '@renderer/app/layouts/AppLayout'
import { useAppInit } from '@renderer/app/hooks/useAppInit'

function App(): React.JSX.Element {
  useAppInit()

  return <AppLayout />
}

export default App
