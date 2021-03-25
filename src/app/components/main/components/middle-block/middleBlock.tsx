import React from 'react'
import { News } from './components/news/news'
import { Prepaid } from './components/prepaid/prepaid'
import './middleBlock.sass'

export const MiddleBlock = () => {
  return (
    <div className="middle-block">
      <div className="container">
        <News />
        <Prepaid />
      </div>
    </div>
  )
}