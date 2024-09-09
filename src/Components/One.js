import React from 'react'
import Two from './Two'

function One(props) {
  return (
    <div style={{backgroundColor:'yellow'}}>
        <h1>Layer One</h1>
        <Two></Two>
    </div>
  )
}

export default One