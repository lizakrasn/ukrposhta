import React from 'react';
import './header.sass';
import { Navigation } from './components/navigation/navigation';

export const Header = () => {
  return (
    <div className="header">
      <div className="header__top">
        <div className="container">
          <div className="header__top-line">
            <a className="header__link" href="https://www.ukrposhta.ua/ua">
              <img
                className="header__logo"
                alt="logo"
                src="./images/logo.svg"
              />
            </a>
            <div className="header__call-center">
              <a className="header__tel" href="tel:0 800 300 545">0 800 300 545</a>
              <p className="header__text">контакт-центр</p>
            </div>
          </div>
        </div>
      </div>
      <div className="header__nav">
        <div className="container">
          <Navigation />
        </div>
      </div>
    </div>
  )
}