import React from 'react'
import {Row, Col} from 'reactstrap'

class Posts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Row className="">
        <Col>
          <p>column</p>
        </Col>
        <Col>
          <article className="">
            <h2>Posts</h2>
          </article>
        </Col>
      </Row>
    )
  }
}
export default Posts
