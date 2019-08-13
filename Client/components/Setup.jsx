import React from 'react'
import Die from './Die.jsx'
import Rule from './Rule.jsx'

var Setup = (props) => {
  return (
    <div>
      <h1>Select Dice and Rules...</h1>
      <div>
      <form>
        <select id='dieSelect'>
          <option value = {2}>Coin</option>
          <option value = {3}>D3</option>
          <option value = {4}>D4</option>
          <option value = {6}>D6</option>
          <option value = {8}>D8</option>
          <option value = {10}>D10</option>
          <option value = {20}>D20</option>
        </select>
        <button      
          onClick = {(e) => {
            e.preventDefault()
            props.handleDieSelect(document.getElementById('dieSelect').value)
          }}>
        Add</button>
      </form>
      {props.dice.map((die, index) => {
        return <Die
        key = {index}
        thisDie = {die}/>
      })}
      </div>
      <br/>
      <div>
        <form>
          <select>
            <option>Greater Than</option>
            <option>Less Than</option>
            <option>Equal To</option>
          </select>
        </form>
      </div>
      <div>
        <Rule 
        handleRuleSelect = {props.handleRuleSelect}/>
      </div>
      <button
      onClick = {() => {
        props.handleRoll()
      }}>ROLL</button>
    </div>
  )
}

export default Setup