import React, { Component } from 'react'

export default class Ltk_Eventform1 extends Component {
    handleEnven1=()=>{
        alert('Even handle 1')
    }
     handleEnven2=()=>{
        alert('Even handle 2')
    }
  render() {
    return (
      <div>
        <h2>Even handle</h2>
        <button onClick={this.handleEnven1()}>Click 1</button>
        <button onClick={this.handleEnven2}>Click 2</button>
      </div>
    )
  }
}
