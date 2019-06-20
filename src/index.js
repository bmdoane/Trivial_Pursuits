import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Trivia from './components/Trivia'

class App extends Component {
  render() {
    return(
      <div className='container'>
        <Trivia />
      </div>
    )
  }
}

ReactDOM.render (
  <App />,
  document.getElementById('app')
)