import { Button } from '../../../../../ui/button/button'
import './prepaid.sass'

export const Prepaid = () => {
  return (
    <div className="prepaid">
      <h2 className="title prepaid__title">Передплачуй газети та</h2>
      <h2 className="title prepaid__title">журнали онлайн</h2>
      <Button
        typeButton="button"
        value="Передплачуй"
        additionalClass="prepaid__button"
      />
    </div>
  )
}