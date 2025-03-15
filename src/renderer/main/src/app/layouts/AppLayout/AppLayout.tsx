import React, { memo } from 'react'
import { Outlet } from 'react-router'
import { UiTitleBar } from '@main-ui/shared/ui/UiTitleBar'
import { UiSidebar } from '@main-ui/shared/ui/UiSidebar'
import { UiPage } from '@main-ui/shared/ui/UiPage'
import { UiLogo } from '@main-ui/shared/ui/UiLogo'
import { ThemeModeSelector } from '@main-ui/features/settings'
import cls from './AppLayout.module.scss'

export const AppLayout = memo((): React.JSX.Element => {
  return (
    <div className={cls.app}>
      <UiTitleBar className={cls.titleBar} leftBox={<UiLogo />} rightBox={<ThemeModeSelector />} />
      <div className={cls.main}>
        <UiSidebar className={cls.sidebar} />
        <UiPage className={cls.page}>
          <Outlet />
        </UiPage>
      </div>
    </div>
  )
})

AppLayout.displayName = 'AppLayout'
