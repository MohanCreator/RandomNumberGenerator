// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  createRandomNumber = () => {
    const random = Math.floor(Math.random() * 101)
    this.setState({randomNumber: random})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="innerContainer">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            onClick={this.createRandomNumber}
            type="button"
            className="button"
          >
            Generate
          </button>
          <p className="randomNumber">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
