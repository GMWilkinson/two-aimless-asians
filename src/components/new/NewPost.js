import React from 'react'
import axios from 'axios'
import { handleChange } from '../../lib/common'
import NewPostForm from './NewPostForm'
import { isAuthenticated, decodeToken } from '../../lib/auth'

export default class NewPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleChange = handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/posts', this.state)
      .then(() => this.props.history.push('/'))
  }

  render() {
    return(
      <section>
        <h2 className="">Add a post, Coco & Rice</h2>
        <NewPostForm
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
        />
      </section>
    )
  }
}
