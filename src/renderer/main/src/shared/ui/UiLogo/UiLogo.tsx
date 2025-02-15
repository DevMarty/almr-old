import React from 'react'
import clsx from 'clsx'
import cls from './UiLogo.module.scss'

interface UiLogoProps {
  className?: string
}

export const UiLogo = (props: UiLogoProps): React.JSX.Element => {
  const { className } = props

  return (
    <div className={clsx(cls.logo, className)}>
      <span className={cls.icon}>Z</span>
    </div>
  )
}
