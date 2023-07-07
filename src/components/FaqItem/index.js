// Write your code here.
import {Component} from 'react'
import './index.css'

class faqItem extends Component {
  state = {isActive: false}

  onClickButton = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderButtonImage = () => {
    const {isActive} = this.state

    const imageUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '

    const imageAlt = isActive ? 'minus' : 'plus'

    return (
      <button className="button" type="button" onClick={this.onClickButton}>
        <img src={imageUrl} alt={imageAlt} />
      </button>
    )
  }

  renderAnswer = () => {
    const {isActive} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails

    if (isActive) {
      return (
        <div>
          <hr className="line" />
          <p className="answer-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <li className="list-container">
        <div className="question-button">
          <h1 className="question-text">{questionText}</h1>
          {this.renderButtonImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default faqItem
