import React from 'react'

var Die = (props) => {
  if(props.thisDie.type = 'coin') {
    return ( <h3
    style = {{
      textAlign:'center',
      border: '2px solid black',
      borderRadius: '100%',
      height: '60px',
      width: '60px'
    }}
    >{props.thisDie.rolledValue ? props.thisDie.rolledValue : props.thisDie.type}</h3>
    )
  }
  return (
    <h1 
      style = {{
        border: '2px solid black',
        borderRadius: '5px',
        height: '40px',
        width: '40px'
      }}>
    {props.thisDie.rolledValue ? props.thisDie.rolledValue : props.thisDie.type}</h1>
  )
}

export default Die