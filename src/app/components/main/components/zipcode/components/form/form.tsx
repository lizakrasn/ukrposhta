import React, {FormEvent, useState} from 'react'
import { Button } from '../../../../../ui/button/button'
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
    <form className="zipcode-form" onSubmit={onSubmit}>
      <Input
        placeholder="Введіть назву населеного пункту"
        onChange={onChangeInput}
        value={value}
        additionalClass="zipcode-form__input"
      />
      <Button
        value="Знайти"
        typeButton="submit"
        additionalClass="zipcode-form__button"
      />
    </form>
  )
}