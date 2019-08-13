import React from 'react'

class Rule extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      rule: []
    }
  }

  addToRule (part, value) {

    if(value) {
      this.setState({
        rule: [...this.state.rule, part, value]
      })
    } else {
      this.setState({
        rule:[...this.state.rule, part]
      })
    }
  }



  render() {
    return (
      <div>
        <h2>Current Rule:</h2>
        <h3>{this.state.rule.join(' ')}</h3>

        <form>
          <h2>Actions</h2>
          <select id='actions'>
            <option value='keep'>Keep</option>
            <option value='seperate'>Seperate</option>
          </select>
          <button
            onClick = {(e) => {
              e.preventDefault()
              let thisPart = document.getElementById('actions').value
              this.addToRule(thisPart)
            }}
          >Add to Rule</button>
          <br/>

          <h2>Qualifiers</h2>
          <select id='qualifiers'>
            <option value='>'>Greater Than</option>
            <option value='<'>Less Than</option>
            <option value='='>Equal To</option>
          </select>
          <input type='text' id='value'></input>
          <button
            onClick = {(e) => {
              e.preventDefault()
              let thisPart = document.getElementById('qualifiers').value
              let value = document.getElementById('value').value
              this.addToRule(thisPart, value)
            }}
          >Add to Rule</button>
          <br/>

          <h2>Chaining</h2>
          <select id='chaining'>
            <option value='and'>And</option>
            <option value='or'>Or</option>
          </select>
          <button
            onClick = {(e) => {
              e.preventDefault()
              let thisPart = document.getElementById('chaining').value
              this.addToRule(thisPart)
            }}
          >Add to Rule</button>
          <br/>

          <button
          onClick = {(e) => {
            e.preventDefault()
            this.props.handleRuleSelect(this.state.rule)
            this.setState({
              rule: []
            })
            
          }}
          >Add Rule</button>
        </form>
      </div>
    )
  }
}

export default Rule