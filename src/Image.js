import React from 'react'
import PropTypes from 'prop-types'
import './Image.scss'

class Image extends React.Component {

  static propTypes = {
    placeholder: PropTypes.string,
    source: PropTypes.string
  }

  state = {
    isImageLoaded: false,
    imageId: null
  }

  componentDidMount () {
    this.setState({
      imageId: this.generateRandomId()
    })
  }

  render () {
    let placeholderClassName = this.state.isImageLoaded
      ? 'placeholder-image placeholder-image--hidden'
      : 'placeholder-image'

    let trueImageClassName = this.state.isImageLoaded
      ? 'true-image true-image--loaded'
      : 'true-image'

    return (
      <div className='image-container' id={'image-container__' + this.state.imageId}>
        <img
          alt=''
          onLoad={this.handleImagePreload}
          id={'placeholder-image__' + this.state.imageId}
          className={placeholderClassName}
          src={this.props.placeholder} />
        <img
          alt=''
          id={'true-image__' + this.state.imageId}
          onLoad={this.handleImageLoad}
          className={trueImageClassName}
          src={this.props.source} />
      </div>
    )
  }

  handleImagePreload = () => {
    this.setContainerHeight()
  }

  handleImageLoad = () => {
    this.setState({
      isImageLoaded: true
    })

    let trueImage = document.getElementById('true-image__' + this.state.imageId)
    this.setContainerHeight(100 * trueImage.height / trueImage.width)
  }

  getImageRatio = () => {
    let id = 'placeholder-image__' + this.state.imageId
    let img = document.getElementById(id)
    let phImg = {
      width: img.clientWidth,
      height: img.clientHeight
    }

    return 100 * phImg.height / phImg.width
  }

  setContainerHeight = (ratio = null) => {
    let id = 'image-container__' + this.state.imageId
    let paddingBottom = ratio | this.getImageRatio()

    document.getElementById(id).style.paddingBottom = paddingBottom + '%'
  }

  generateRandomId = () => {
    return Math.random().toString(36).slice(2)
  }
}

export default Image