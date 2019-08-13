import React from 'react'
import Setup from './Setup.jsx'
import Result from './Result.jsx'
import {Die} from '../src/Die.js'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.handleDieSelect = this.handleDieSelect.bind(this)
    this.handleRuleSelect = this.handleRuleSelect.bind(this)
    this.handleRoll = this.handleRoll.bind(this)

    this.state = {
      dice: [],
      rules: [],
      rolled: false
    }
  }

  handleRuleSelect(newRule) {
    this.setState({
      rules:[...this.state.rules, newRule]
    })
  }

  handleDieSelect(sides) {
    this.setState({
      dice: [...this.state.dice, new Die(sides)]
    })
  }

  handleRoll() {
    this.setState({
      rolled: true
    })
  }

  render () {
    if(!this.state.rolled) {
      return (
        <div>
          <Setup 
          handleDieSelect = {this.handleDieSelect}
          handleRuleSelect = {this.handleRuleSelect}
          handleRoll = {this.handleRoll}
          dice = {this.state.dice}
          rules = {this.state.rules}
          />
        </div>
      )
    } else {
      return (
        <Result 
        dice = {this.state.dice}
        rules = {this.state.rules}
        />
      )
    }
  }
}

export default App