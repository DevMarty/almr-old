import React, { ReactNode } from 'react'
import clsx from 'clsx'
import cls from './UiSidebar.module.scss'

interface UiSidebarProps {
  className?: string
  top?: ReactNode
  bottom?: ReactNode
}

export const UiSidebar = (props: UiSidebarProps): React.JSX.Element => {
  const { className, top, bottom } = props

  return (
    <div className={clsx(cls.sidebar, className)}>
      <div className={cls.top}>{top}</div>
      <div className={cls.bottom}>{bottom}</div>
    </div>
  )
}
