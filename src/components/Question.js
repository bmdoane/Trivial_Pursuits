import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function Question({ question, right, wrong, handleClick }) {
  const classes = useStyles();

  function mix() {
    let possibleAnswers = wrong
    possibleAnswers.splice(Math.floor(Math.random() * 4), 0, right)
    return possibleAnswers
  }
  let allAnswers = mix()
  console.log('all', allAnswers)

  function QuestionGrid(props) {
    console.log('props', props)
    const question = props.question
    const answers = props.allAnswers
    const listAnswers = answers.map((answer, index) =>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        key={index}
        onClick={handleClick}
        >
          {answer}
      </Button>
    )
    return (
      <React.Fragment>
        <div className="question">{question}</div>
        <div className="list">{listAnswers}</div>
      </React.Fragment>
    )
  }

  return (
    <QuestionGrid
      question={question}
      allAnswers={allAnswers}
    />
  )
}

