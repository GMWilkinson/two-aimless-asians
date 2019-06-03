import React from 'react'
import axios from 'axios'
import { handleChange } from '../../lib/common'

import { Button } from 'reactstrap'

export default class PostText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleChange = handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    console.log(this.state, e)
    e.preventDefault()
    axios.post('/api/posts', this.state)
      .then(() => this.props.history.push('/'))
  }

  componentDidMount() {
    axios.get('/api/posts')
      .then(result => this.setState({ post: result.data }))
  }

  render() {
    console.log('text',  this.state)
    return(
      <section>
        <h2 className="">Add some text</h2>
      </section>
    )
  }
}
