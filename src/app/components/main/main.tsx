import React from 'react';
import { Services } from './components/services/services';
import { Slider } from './components/slider/slider';
import { Trecking } from './components/trecking/trecking';
import './main.sass'

export const Main = () => {
  return (
    <div className="main">
      <Slider />
      <Trecking />
      <Services />
    </div>
  )
}