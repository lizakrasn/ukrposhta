import React from 'react'
import { Form } from './components/form/form'
import './trecking.sass'

export const Trecking = () => {
  return (
    <div className="trecking">
      <div className="container">
        <div className="trecking__top-line">
          <Form />
        </div>
        <div className="trecking__bottom-line">
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  )
}