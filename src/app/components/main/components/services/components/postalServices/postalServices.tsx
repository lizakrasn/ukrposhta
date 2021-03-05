import './postalServices.sass'
import { Service } from './service/service'

export const PostalServices = () => {
  return (
    <div className="postal">
      <div className="postal__rows">
        <div className="postal__left-column">
          <h2 className="title">Поштові послуги</h2>
          <p className="postal__text">Замовляйте доставку у найвіддаленіші куточки України, відправляйте й отримуйте посилки з усього світу і навпаки.</p>
          <p className="postal__text">Виберіть доставку, яка найкраще підійде вам за термінами пересилання і вартістю.</p>
        </div>
        <div className="postal__right-column">
          <div className="postal__services">
            <div className="postal__service-wrapper">
              <Service
                title="Доставка з інтернет-магазинів"
                modifire=""
                imgURL="./images/postal-service-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}