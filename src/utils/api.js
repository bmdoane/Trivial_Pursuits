export function fetchQuestion() {
  return fetch('https://opentdb.com/api.php?amount=1')
  .then((data) => data.json())
  .then((question) => {
    console.log('question', question.results[0])
    // Look to handle error here with if statement
    return question.results[0]
  })
}

fetchQuestion()