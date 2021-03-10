import { Form } from './components/form/form'
import './zipcode.sass'

export const Zipcode = () => {
  return (
    <div className="zipcode">
      <div className="container">
        <div className="zipcode__content">
          <h2 className="title zipcode__title">Знайти індекс</h2>
          <p className="zipcode__text">
            Поштовий індекс — це код із 5 цифр, який допомагає пришвидшити сортування та доставку відправлень. Поштовий індекс мають всі відділення Укрпошти та всі населені пункти України.
          </p>
          <Form />
        </div>
      </div>
    </div>
  )
}