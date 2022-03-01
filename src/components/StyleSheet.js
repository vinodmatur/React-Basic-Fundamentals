import React from 'react'
import './myStyle.css'
function StyleSheet(props) {
    let className = props.primary? 'primary' : 'black'
  return (
    <div>
        <h1 className={`${className} font-xl`}>Stylesheet</h1>
    </div>
  )
}

export default StyleSheet