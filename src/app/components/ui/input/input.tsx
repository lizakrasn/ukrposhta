import { placeholder } from '@babel/types'
import './input.sass'

interface InputProps {
  placeholder: string
  additionalClass?: string 
  value: string
  onChange: (value: string) => void
}

export const Input = ({placeholder, additionalClass, value, onChange}: InputProps) => {
  return (
    <input
      className={`input ${additionalClass}`}
      id="trackcode"
      type="text"
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
      value={value}
    />
  )
}