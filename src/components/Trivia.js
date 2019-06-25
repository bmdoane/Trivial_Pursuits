import React, { Component } from 'react'
import { fetchQuestionData } from '../utils/api'
import Question from './Question'
import Header from './Header'

export default class Trivia extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: null,
      rightAnswer: null,
      wrongAnswers: [],
      difficulty: null,
      category: null,
      rightTally: 0,
      wrongTally: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleIncrement = this.handleRight.bind(this)
    this.handleDecrement = this.handleWrong.bind(this)
  }

  newQuestion = () => {
    fetchQuestionData()
      .then(question => {
        this.setState({
          question: question.question.replace(/&#(\d+);/g, function (match, match2) { return String.fromCharCode(+match2); }).replace(/&quot;/g, '"'),
          rightAnswer: question.correct_answer,
          wrongAnswers: question.incorrect_answers,
          difficulty: question.difficulty,
          category: question.category
        })
      })
  }

  handleRight = () => {
    this.setState({ rightTally: this.state.rightTally + 1 })
  }

  handleWrong = () => {
    this.setState({ wrongTally: this.state.wrongTally + 1 })
  }

  handleClick = (e) => {
    (e.target.textContent === this.state.rightAnswer) ? this.handleRight() : this.handleWrong();
    // Would like to add function to announce correct/incorrect, time delay for 3 seconds and refresh
    this.newQuestion()
  }

  componentDidMount() {
    this.newQuestion()
  }

  render() {
    console.log('trivState', this.state)
    const { category, rightTally, wrongTally, question, rightAnswer, wrongAnswers } = this.state
    console.log('trivRA', rightAnswer)
    return (
      <React.Fragment>
        <Header
          category={category}
          rightTally={rightTally}
          wrongTally={wrongTally}
        />
        <Question
          question={question}
          right={rightAnswer}
          wrong={wrongAnswers}
          handleClick={this.handleClick}
        />
      </React.Fragment>
    )
  }
}