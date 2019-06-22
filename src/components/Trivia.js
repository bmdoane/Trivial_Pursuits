import React, { Component } from 'react'
import { fetchQuestionData } from '../utils/api'
import Question from './Question'

export default class Trivia extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: null,
      rightAnswer: null,
      wrongAnswers: [],
      difficulty: null,
      category: null
    }
    this.handleClick = this.handleClick.bind(this)
  }

  newQuestion = () => {
    fetchQuestionData()
      .then(question => {
        this.setState({
          question: question.question,
          rightAnswer: question.correct_answer,
          wrongAnswers: question.incorrect_answers,
          difficulty: question.difficulty,
          category: question.category
        })
      })
  }

  // Logic if answer text = rightAnswer cl correct, else uncorrect
  handleClick = (e) => {
    (e.target.textContent === this.state.rightAnswer) ? console.log('true') : console.log('false')
    console.log('hc', this.state)
    this.newQuestion()
  }

  componentDidMount() {
    this.newQuestion()
  }

  render() {
    console.log('this', this)
    console.log('state', this.state)
    const { question, rightAnswer, wrongAnswers } = this.state
    console.log('triv', rightAnswer)
    return (
      <React.Fragment>
        <div>
          <Question
            question={question}
            right={rightAnswer}
            wrong={wrongAnswers}
            handleClick={this.handleClick}
          />
        </div>
      </React.Fragment>
    )
  }
}

