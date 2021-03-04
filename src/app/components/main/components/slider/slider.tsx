import React from 'react';
import './slider.sass'

export const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__content container">
        <div className="slider__text-block">
          <h2 className="slider__title">Запитати у неї - нормально</h2>
          <p className="slider__subtitle">Замовляйте подарунки, доставляйте Укрпоштою та вигравайте призи</p>
        </div>
        <div className="slider__banners">
          <img
            className="slider__img-desktop"
            alt="banner"
            src="./images/slider/img1-desktop.png"
          />
          {/* <img className="slider__img-tablet"></img>
          <img className="slider__img-mobile"></img> */}
        </div>
      </div>
      <div className="slider__dots container">dots</div>
    </div>
  )
}