import React from 'react'
import { LegalBlock } from './components/legal-block/legal-block'
import { News } from './components/news/news'
import { Prepaid } from './components/prepaid/prepaid'
import './middleBlock.sass'

export const MiddleBlock = () => {
  return (
    <div className="middle-block">
      <div className="container">
        <News />
        <Prepaid />
        <LegalBlock />
      </div>
    </div>
  )
}