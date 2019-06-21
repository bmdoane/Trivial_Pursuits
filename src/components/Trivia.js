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
  }

  componentDidMount() {
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

  render() {
    console.log('state', this.state)
    const { question, rightAnswer, wrongAnswers, type, difficulty, category } = this.state
    console.log('triv', rightAnswer)
    return (
      <React.Fragment>
        <div>
          <Question
            question={question}
            right={rightAnswer}
            wrong={wrongAnswers} 
          />
        </div>
      </React.Fragment>
    )
  }
}

