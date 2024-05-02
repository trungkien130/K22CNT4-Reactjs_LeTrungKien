import React, { Component } from 'react'

export default class LTKForn2 extends Component {
    constructor(props){
        super(props)
        this.state={
           course:"LTK-HTML5"
        }
    }
    ltkHandleChange=(event)=>{
this.setState({
    course:event.target.value
})

    }
    ltkHandleSubmit=(event)=>{
        event.preventDefault()
        alert(this.state.course)
    
    }
  render() {
    return (
      <div>
        <form onSubmit={this.ltkHandleSubmit}>
            <label>Course</label>
            <select value={this.state.course}
            onChange={this.ltkHandleChange}>
                <option value={"Ltk-Html5"}>Ltk-Html5</option>
                <option value={"Ltk-CSS3"}>Ltk-CSS3</option>
                <option value={"Ltk-JS"}>Ltk-JS</option>
                <option value={"Ltk-RJ"}>Ltk-RJ</option>
            </select>
            <input type='submit' value={"submit"}/>
        </form>
      </div>
    )
  }
}
