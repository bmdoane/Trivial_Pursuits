import React from 'react'
import { fetchQuestionData } from '../utils/api'

console.log('here', fetchQuestionData())
function QuestionGrid({ fetchQuestionData }) {
  // const { category } = fetchQuestion
  return (
    <div></div>
  )
}

export default function Question() {
  return (
    <QuestionGrid />
  )
}

