import React, { ReactNode } from 'react'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import clsx from 'clsx'
import cls from './UiScrollbar.module.scss'

interface UiScrollbarProps {
  className?: string
  children?: ReactNode
}

export const UiScrollbar = (props: UiScrollbarProps): React.JSX.Element => {
  const { className, children } = props
  return (
    <OverlayScrollbarsComponent
      className={clsx(cls.scrollbarBox, className)}
      options={{ scrollbars: { theme: cls.scrollbar } }}
    >
      {children}
    </OverlayScrollbarsComponent>
  )
}
