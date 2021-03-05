import React, { ReactNode } from 'react'
import './option.sass'

interface OptionProps {
  title: string
  icon: ReactNode
}

export const Option = ({title, icon}: OptionProps) => {
  return (
    <div className="option">
      <div className="option__item">
        {icon}
        <span style={{display: "block"}}>{title}</span>
      </div>
    </div>
  )
}