import React from 'react'

export default function Question({ right, wrong }) {

  function mix() {
    let possibleAnswers = wrong
    possibleAnswers.splice(Math.floor(Math.random() * 4), 0, right)
    return possibleAnswers
  }
  let allAnswers = mix()
  console.log('all', allAnswers)

  // Returning answer array, next post to grid.

  function QuestionGrid(props) {
    const answers = props.allAnswers
    const listAnswers = answers.map((answer, index) =>
      <div className="answerCard" key={index}>
        {answer}
      </div>
    )
    return (
      <div className="list">{listAnswers}</div>
    )
  }

  return (
    <QuestionGrid allAnswers={allAnswers} />
  )
}

