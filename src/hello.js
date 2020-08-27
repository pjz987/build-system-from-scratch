import React from 'react'
// import yo from 'yo-yo'

// function Hello (name) {
//   return yo`<h1>Hello, ${name}!</h1>`
// }

class Hello extends React.Component {
  constructor (props) {
    super(props)
    this.state = { name: props.name }
  }

  render () {
    console.log(this.state)
    return <h1>Hello, {this.state.name}!</h1>
  }
}

export default Hello
