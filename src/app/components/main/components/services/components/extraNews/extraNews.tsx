import './extraNews.sass'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

export const ExtraNews = () => {
  return (
    <div className="extra-news">
      <div className="extra-news__slider">
        <div className="extra-news__content">
          <p className="extra-news__title">Укрпошта вводить в обіг перші в історії України марки у жанрі ню</p>
          <p className="extra-news__text">5 березня світ побачать перші українські поштові марки з оголеними тілами у жанрі «ню» із серії «Її величність – жінка»</p>
          <span className="extra-news__additional">Докладніше </span>
          <span><FontAwesomeIcon icon={faAngleRight} /></span>
        </div>
        <div className="extra-news__dots">dots</div>
      </div>
    </div>
  )
}