import React from 'react'
import {render} from 'react-dom'

import './App.scss'

import Image from '../../src'


const image1Small = 'https://s3-ap-southeast-1.amazonaws.com/mayko-media/react-img-load/image1-small.png'
const image1 = 'https://s3-ap-southeast-1.amazonaws.com/mayko-media/react-img-load/image1.jpg'

const image2Small = 'https://s3-ap-southeast-1.amazonaws.com/mayko-media/react-img-load/image2-small.png'
const image2 = 'https://s3-ap-southeast-1.amazonaws.com/mayko-media/react-img-load/image2.jpeg'

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
