import React from 'react'
import Die from './Die.jsx'

var Result = (props) => {
  return (
    <div>
      {props.dice.map((die, index) => {
        die.roll()
        return <Die
        key = {index}
        thisDie = {die}
        />
      })}

      <button onClick = {() => {
        //apply rules from props.rules, probably use filter
      }}>Apply Rules</button>
    </div>
  )
}

export default Result