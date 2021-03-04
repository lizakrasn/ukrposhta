import React, {FormEvent, useState} from 'react'
import { Input } from '../../../../../ui/input/input'
import './form.sass'

export const Form = () => {
  const [value, setValue] = useState("")

  const onChangeInput = (value: string) => {
    setValue(value)
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()

    alert(`We started searching your parcel by tracking number - ${value}`)
    setValue('')
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <Input
        placeholder="Введіть номер відправлення"
        additionalClass="form__input"
        value={value}
        onChange={onChangeInput}
      />
      <button className="form__button" type="submit">Відстежити</button>
    </form>
  )
}