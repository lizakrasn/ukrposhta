import React from 'react';
import './navigation.sass';

export const Navigation = () => {
  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <a href="#" className="nav__link">Трекінг</a>
        </li>
        <li className="nav__list-item">
          <a href="#" className="nav__link">Послуги</a>
        </li>
        <li className="nav__list-item">
          <a href="#" className="nav__link">Тарифи</a>
        </li>
        <li className="nav__list-item">
          <a href="#" className="nav__link">Відділення</a>
        </li>
        <li className="nav__list-item">
          <a href="#" className="nav__link">Філателія</a>
        </li>
        <li className="nav__list-item">
          <a href="#" className="nav__link">Кар'єра</a>
        </li>
        <li className="nav__list-item">
          <a href="#" className="nav__link">Бізнес</a>
        </li>
      </ul>
    </div>
  )
}