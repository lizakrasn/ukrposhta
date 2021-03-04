import React from 'react';
import { Slider } from './components/slider/slider';
import { Trecking } from './components/trecking/trecking';
import './main.sass'

export const Main = () => {
  return (
    <div className="main">
      <Slider />
      <Trecking />
      {/* <svg id="calculate" xmlns="http://www.w3.org/2000/svg" width="30" height="30">
        <g fill="none" fill-rule="evenodd">
          <path id="rectangle-yellow" fill="#FFF" d="M15 15h14v14H15z" />
          <path fill="#99A2AA" fill-rule="nonzero" d="M0 15.75v-1.5h30v1.5z" />
          <g stroke="#99A2AA" stroke-linecap="round" stroke-width="1.5">
            <path d="M5 7.5h6M8 4.5v6M5.879 20.379l4.242 4.242M10.121 20.379L5.88 24.62" />
          </g>
          <path d="M1.5 1.5v27h27v-27h-27zM1 0h28a1 1 0 011 1v28a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1z" fill="#99A2AA" fill-rule="nonzero" />
          <path fill="#99A2AA" fill-rule="nonzero" d="M14.25 0h1.5v30h-1.5z" />
          <g stroke="#99A2AA" stroke-linecap="round" stroke-width="1.5">
            <path d="M19 7.5h6M19 20.5h6M19 24.5h6" />
          </g>
        </g>
      </svg> */}
    </div>
  )
}