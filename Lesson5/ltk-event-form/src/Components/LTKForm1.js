import React, { Component } from 'react'

export default class LTKForm1 extends Component {
    constructor(props){
        super(props)
        this.state={
            studentName:"Lê Trung Kiên"
        }
    }
    handleChange=(event)=>{
this.setState({
   studentName:event.target.value,
})
    }
    handleSubmit=(e)=>{
console.log(e)
e.preventDefault()
    }
  render() {
    return (
      <div>
        <h2>Demo ReactJS Form - Text</h2>
        <form>
            <label>Student name:</label>
            <input value={this.state.studentName}
            onChange={this.handleChange}/>
            <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
