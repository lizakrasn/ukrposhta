import React from 'react'
import { IconCalculator } from '../../../ui/calculator/calculator'
import { Form } from './components/form/form'
import { Option } from './components/option/option'
import './trecking.sass'

export const Trecking = () => {
  return (
    <div className="trecking">
      <div className="container">
        <div className="trecking__top-line">
          <Form />
        </div>

        <div className="trecking__bottom-line">
          <div className="trecking__option-wrapper">
            <Option title="Розрахувати" icon={<IconCalculator />}/>
          </div>

          <div className="trecking__option-wrapper">
            <Option title="Оформити" icon={<IconCalculator />}/>
          </div>

          <div className="trecking__option-wrapper">
            <Option title="Знайти індекс" icon={<IconCalculator />}/>
          </div>

          <div className="trecking__option-wrapper">
            <Option title="Передплатити" icon={<IconCalculator />}/>
          </div>
        </div>
      </div>
    </div>
  )
}