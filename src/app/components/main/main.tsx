import React from 'react';
import { MiddleBlock } from './components/middle-block/middleBlock';
import { Services } from './components/services/services';
import { Slider } from './components/slider/slider';
import { Trecking } from './components/trecking/trecking';
import { Zipcode } from './components/zipcode/zipcode';
import './main.sass'

export const Main = () => {
  return (
    <div className="main">
      <Slider />
      <Trecking />
      <Services />
      <Zipcode />
      <MiddleBlock />
    </div>
  )
}