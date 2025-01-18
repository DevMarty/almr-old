import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { UiScrollbar } from '@renderer/shared/ui/UiScrollbar'
import cls from './UiPage.module.scss'

interface UiPageProps {
  className?: string
  children?: ReactNode
}

export const UiPage = (props: UiPageProps): React.JSX.Element => {
  const { className, children } = props

  return (
    <UiScrollbar className={clsx(cls.page, className)}>
      <div className={cls.content}>{children}</div>
    </UiScrollbar>
  )
}
