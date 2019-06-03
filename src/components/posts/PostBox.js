import React from 'react'
import {Row, Col} from 'reactstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

import cherry from '../../images/cherry-blossom.jpg'
import panorama from '../../images/panorama.jpg'
import seaside from '../../images/seaside.jpg'
import sky from '../../images/sky-lights.jpg'

const images = [seaside, panorama, cherry, sky]

class PostBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.title = this.props.title
    this.author = this.props.author
    this.text = this.props.text
    this.image = this.image.bind(this)
    this.postId = this.props.postId
  }

  image() {
    console.log('images', images)
    if (this.title === 'Hello World') return images[0]
    if (this.title === 'input test 1') return images[1]
    if (this.title === 'input test 2') return images[2]
  }

  render() {
    console.log('post is', this.title, this.text)
    return (
      <Row className="">
        <Col sm={12} md={12} lg={12} className="post-box">
          <Link to={`/${this.postId}`} className="">
            <h2>{this.title}</h2>
            <img src={this.image()} />
          </Link>
        </Col>
      </Row>
    )
  }
}
export default PostBox
