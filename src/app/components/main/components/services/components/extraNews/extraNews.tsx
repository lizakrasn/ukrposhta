import './extraNews.sass'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

export const ExtraNews = () => {
  return (
    <div className="extra-news">
      <div className="extra-news__slider">

        <div className="extra-news__slide">
          <p className="extra-news__title">Укрпошта вводить в обіг перші в історії України марки у жанрі ню</p>
          <p className="extra-news__text">5 березня світ побачать перші українські поштові марки з оголеними тілами у жанрі «ню» із серії «Її величність – жінка»</p>
          <span className="extra-news__additional">Докладніше </span>
          <span><FontAwesomeIcon icon={faAngleRight} /></span>
        </div>

        {/* <div className="extra-news__slide">
          <p className="extra-news__title">Укрпошта стала логістичним партнером OLX.UA</p>
          <p className="extra-news__text">З 1 березня всі замовлення на онлайн-майданчику OLX можна буде надсилати та отримувати Укрпоштою. Протягом місяця...</p>
          <span className="extra-news__additional">Докладніше </span>
          <span><FontAwesomeIcon icon={faAngleRight} /></span>
        </div>

        <div className="extra-news__slide">
          <p className="extra-news__title">Чи залишиться Укрпошта на Хрещатику?</p>
          <p className="extra-news__text">9 березня на сторінці Укрпошти в YouTube опублікували відео, у якому Ігор Смілянський розповідає про будівлю головного офі...</p>
          <span className="extra-news__additional">Докладніше </span>
          <span><FontAwesomeIcon icon={faAngleRight} /></span>
        </div> */}

        <div className="extra-news__dots">
          <div className="extra-news__dot-item"></div>
          <div className="extra-news__dot-item"></div>
          <div className="extra-news__dot-item"></div>
        </div>

      </div>
    </div>
  )
}