export function fetchQuestionData() {
  return fetch('https://opentdb.com/api.php?amount=1')
  .then((data) => data.json())
  .then((question) => {
    // Look to handle error here with if statement
    return question.results[0]
  })
}

// fetchQuestionData()