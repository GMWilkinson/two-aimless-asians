import React from 'react'
import axios from 'axios'
import PostBox from './posts/PostBox'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    axios.get('/api/posts')
      .then(result => this.setState({ post: result.data }))
  }

  render() {
    return (
      <main className="main">
        <section className="">
          <article className="">
            {this.state.post && this.state.post.map(
              post =>
                <div key={post._id}>
                  <PostBox
                    title={post.title}
                    text={post.paragraph}
                    author={post.author}
                    postId={post._id}
                  />
                </div>
            )}
          </article>
        </section>
      </main>
    )
  }
}
export default Home
