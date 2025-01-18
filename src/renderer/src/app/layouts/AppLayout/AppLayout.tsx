import React, { memo } from 'react'
import { UiTitleBar } from '@renderer/shared/ui/UiTitleBar'
import { UiSidebar } from '@renderer/shared/ui/UiSidebar'
import { UiPage } from '@renderer/shared/ui/UiPage'
import cls from './AppLayout.module.scss'
import { UiLogo } from '@renderer/shared/ui/UiLogo'

export const AppLayout = memo((): React.JSX.Element => {
  return (
    <div className={cls.app}>
      <UiTitleBar className={cls.titleBar} leftBox={<UiLogo />} />
      <div className={cls.main}>
        <UiSidebar className={cls.sidebar} />
        <UiPage className={cls.page}>ALMR</UiPage>
      </div>
    </div>
  )
})

AppLayout.displayName = 'AppLayout'
