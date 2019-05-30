import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../../lib/auth'

import panorama from '../../images/cocktail-flower.jpg'

export default class PostShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    axios.get(`/api/posts/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ post: res.data })
      })
  }

  render() {
    const post = this.state.post
    console.log('what is', post)
    return (
      <section className="">
        {post
          ?
          <div className="">
            <div className="post-box">
              <img src={panorama} />
              <h2 className="">{ post.title }</h2>
            </div>
            {post.paragraph.map(
              para =>
                <div key={para._id}>
                  <p className="post-text">{para.text}</p>
                </div>
            )}
            <h4 className="">Written by { post.author }</h4>
          </div>
          :
          <p>Please wait...</p>}
      </section>
    )
  }
}
