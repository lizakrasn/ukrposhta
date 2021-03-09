import './financialService.sass'
import {financialService} from '../../../../../../../data/data'
import { Service } from '../postalServices/service/service'

export const FinancialService = () => {
  return (
    <div className="financial">
      <p className="title">Фінансові послуги</p>
      <div className = "financial__row">
        {financialService.map(item => {
          return(
            <div className="financial__service-wrapper">
              <Service
                imgURL = {item.imgURL}
                modifire = {item.modifire}
                title = {item.title}
                type = {item.type}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}