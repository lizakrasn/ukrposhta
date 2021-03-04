import React from 'react'
import './user.sass'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export const User = () => {
  return (
    <div className="user">
      <a href="#" className="user__account-link">Вхід /</a>
      <a href="#" className="user__account-link">Реєстрація </a>
      <img className="user__icon" src="./images/user.svg" alt="user icon"/>
      <button className="user__switch-lang">
        UA
        <span className="user__mark"><FontAwesomeIcon icon={faChevronDown}/></span>
      </button>
    </div>
  )
}