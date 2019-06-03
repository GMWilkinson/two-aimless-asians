import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../../lib/auth'

import cocktail from '../../images/cocktail-flower.jpg'

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

  seperatePara(text) {
    const y = text.toString()
    const next = y.split('(newpara)')
    console.log('seperatePara text', text, next)
    return next.map(para =>
      <p key={para}>{para}</p>
    )
  }

  render() {
    const post = this.state.post
    return (
      <section className="">
        {post
          ?
          <div className="">
            <div className="post-show">
              <img src={cocktail} />
              <h2 className="">{ post.title }</h2>
            </div>

            <div>
              <div className="post-text">{this.seperatePara(post.text)}</div>
            </div>

            <h4 className="written-by">{ post.author }</h4>
          </div>
          :
          <p>Please wait...</p>}
      </section>
    )
  }
}
