import React, { Component } from 'react'
import Question from './Question'

export default class Trivia extends Component {
  render() {
    return (
      <div className='trivia-board'>
        <Question />
      </div>
    )
  }
}

