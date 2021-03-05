import React from 'react'
import './service.sass'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

interface ServiceProps {
  title: string,
  imgURL: string,
  modifire: string
}

export const Service = ({ title, imgURL, modifire }: ServiceProps) => {
  return (
    <div className={`service service-${modifire}`}>
      <img className="service__img" src={imgURL} alt="" />
      <a className="service__link" href="#">
        <p className="service__title">{title}</p>
        <span>Докладніше </span>
        <span><FontAwesomeIcon icon={faAngleRight} /></span>
      </a>
    </div >
  )
}
