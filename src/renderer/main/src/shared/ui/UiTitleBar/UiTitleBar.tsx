import React, { ReactNode } from 'react'
import clsx from 'clsx'
import cls from './UiTitleBar.module.scss'

interface UiTitleBarProps {
  className?: string
  leftBox?: ReactNode
  rightBox?: ReactNode
}

export const UiTitleBar = (props: UiTitleBarProps): React.JSX.Element => {
  const { className, leftBox, rightBox } = props

  return (
    <header className={clsx(cls.titleBar, className)}>
      <div className={cls.leftBox}>{leftBox}</div>
      <div className={cls.rightBox}>{rightBox}</div>
    </header>
  )
}
