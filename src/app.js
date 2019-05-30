import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import AuthLogin from './components/auth/Login'
import Home from './components/Home'
import New from './components/new/NewPost'
// import Posts from './components/posts/Posts'
import PostShow from './components/posts/PostShow'
import './scss/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css'



class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <main>
          <Header />
          <div>
            <Switch>
              <Route exact path='/login' component={AuthLogin}/>
              <Route exact path='/' component={Home}/>
              <Route exact path='/new' component={New}/>
              <Route path='/:id' component={PostShow}/>
            </Switch>
          </div>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
