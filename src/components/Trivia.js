import React, { Component } from 'react'
import { fetchQuestionData } from '../utils/api'
import Question from './Question'

function questionData({ fetchQuestionData }) {

}

export default class Trivia extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answers: [],
      question: null,
      rightAnswer: null,
      wrongAnswers: [],
      type: null,
      difficulty: null,
      category: null
    }
  }

  componentDidMount() {
    fetchQuestionData()
      .then(question => {
        console.log('CDM', question)
        this.setState({
          question: question.question,
          rightAnswer: question.correct_answer,
          wrongAnswers: question.incorrect_answers,
          type: question.type,
          difficulty: question.difficulty,
          category: question.category
        })
      })

  }

  render() {
    // Do you have to pass answers []?
    const { question, rightAnswer, wrongAnswers, type, difficulty, category } = this.state
    return (
      <React.Fragment>
        <div className='trivia-board'>
          <Question />
        </div>
      </React.Fragment>
    )
  }
}

