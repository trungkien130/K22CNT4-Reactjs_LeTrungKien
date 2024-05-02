import React, { Component } from 'react'
import LTKForm1 from './Components/LTKForm1'
import LTKForn2 from './Components/LTKForn2'
import LTKForm3 from './Components/LTKForm3'

export default class App extends Component {
  ltkSubmit = (param) => {
    console.log("app:", param)
  }
  render() {
    return (
      <div>
        <h1>Controlled Component ReactJS Form</h1>
        <LTKForm1 />
        <LTKForn2 />
        <hr />
        <LTKForm3 onSubmit={this.ltkSubmit} />
      </div>
    )
  }
}
