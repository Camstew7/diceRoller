import React from 'react'
import Setup from './Setup.jsx'
import Result from './Result.jsx'


class App extends React.Component {
  constructor(props) {
    super(props)

    handleDiceSelection = this.handleDiceSelection.bind(this)
    handleRulesSelection = this.handleRulesSelection.bind(this)
    this.state = {
      dice: [],
      rules: {},
      rolled: false
    }
  }

  handleRulesSelection() {

  }

  handleDiceSelection() {

  }

  render () {
    if(!this.state.rolled) {
      return (
        <Setup />
      )
    } else {
      return (
        <Result 
        dice = {this.state.dice}
        rules = {this.state. rules}
        />
      )
    }
  }
}