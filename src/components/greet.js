import React from 'react'

const greet = props =>{
     console.log(props)
     return <h1>Hello {props.name}</h1> 
    }
export default greet;