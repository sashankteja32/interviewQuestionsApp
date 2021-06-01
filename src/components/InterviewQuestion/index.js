import {Component} from 'react'

import './index.css'

class InterviewQuestion extends Component {
  state = {
    isAnswer: false,
    checking: false,
  }

  clickingAnswer = event => {
    const {question, countingFun} = this.props
    const {correctAnswer} = question
    let data
    if (event.target.value === correctAnswer) {
      data = true
      countingFun()
    } else {
      data = false
    }
    console.log(data)
    this.setState({isAnswer: true, checking: data})
  }

  renderFun = () => {
    const {checking} = this.state
    if (checking === true) {
      return <p className="correct">Correct</p>
    }
    return <p className="wrong">Wrong</p>
  }

  render() {
    const {question} = this.props
    const {questions, correctAnswer, wrongAnswers} = question
    const [one, two, three] = wrongAnswers
    const {isAnswer} = this.state

    return (
      <div className="question-container">
        <h1 className="question-text">{questions}</h1>
        <div>
          <div>
            <input
              type="radio"
              value={one}
              name={correctAnswer}
              id={one}
              onChange={this.clickingAnswer}
            />
            <label htmlFor={one}>{one}</label>
          </div>
          <div>
            <input
              type="radio"
              value={correctAnswer}
              name={correctAnswer}
              id={correctAnswer}
              onChange={this.clickingAnswer}
            />
            <label htmlFor={correctAnswer}>{correctAnswer}</label>
          </div>
          <div>
            <input
              type="radio"
              value={two}
              name={correctAnswer}
              id={two}
              onChange={this.clickingAnswer}
            />
            <label htmlFor={two}>{two}</label>
          </div>
          <div>
            <input
              type="radio"
              value={three}
              name={correctAnswer}
              id={three}
              onChange={this.clickingAnswer}
            />
            <label htmlFor={three}>{three}</label>
          </div>
        </div>
        {isAnswer && this.renderFun()}
      </div>
    )
  }
}

export default InterviewQuestion
