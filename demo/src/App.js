import React from 'react'
import {render} from 'react-dom'

import './App.scss'

import Image from '../../src'


import image1Small from './images/image1-small.png'
import image1 from './images/image1.jpeg'

import image2Small from './images/image2-small.png'
import image2 from './images/image2.jpeg'

let Demo = React.createClass({
  render() {
    return (
      <div>
        <h1>react-image-loading Demo</h1>
        <div className='demo-container'>
          <Image
            placeholder={image1Small}
            source={image1} />

          <br />

          <Image
            placeholder={image2Small}
            source={image2} />
        </div>
      </div>
    )
  }
})

render(<Demo/>, document.querySelector('#demo'))
