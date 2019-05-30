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
      <main className="">
        <section className="">
          <article className="">
            <p>Home page text</p>
            {this.state.post && this.state.post.map(
              post =>
                <div key={post._id}>
                  <PostBox key={post._id}
                    title={post.title}
                    text={post.paragraph}
                    author={post.author}
                    postId={post._id}
                    image={post.image}
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
