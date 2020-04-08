import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './containers'
import { Login } from './containers'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

let root = document.getElementById('root')

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
    </Switch>
  </BrowserRouter>
)
if (root) {
  ReactDOM.render(<App />, root)
}
