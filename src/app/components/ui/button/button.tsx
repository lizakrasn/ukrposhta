import React from 'react'
import './button.sass'

interface ButtonProps {
  value: string
  typeButton: "button" | "submit"
  additionalClass? : string
}

export const Button = ({value, typeButton, additionalClass}: ButtonProps) => {
  return (
    <button className={`button ${additionalClass}`} type={typeButton}>
      {value}
    </button>
  )
}