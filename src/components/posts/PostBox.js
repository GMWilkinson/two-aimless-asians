import React from 'react'
import {Row, Col} from 'reactstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

class PostBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.title = this.props.title
    this.author = this.props.author
    this.text = this.props.text
    this.image = this.props.image
    this.postId = this.props.postId
  }
  //
  // componentDidMount() {
  //   axios.get('/api/posts')
  //     .then(result => this.setState({ post: result.data }))
  // }

  render() {
    console.log('post is', this.title, this.text)
    return (
      <Row className="">
        <Col sm={12} md={12} lg={12} className="post-box">
          <Link to={`/${this.postId}`} className="">
            <h2>{this.title}</h2>
            <img src={this.image} />
          </Link>
        </Col>
      </Row>
    )
  }
}
export default PostBox
