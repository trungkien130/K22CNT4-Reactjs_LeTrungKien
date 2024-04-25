import React, { Component } from 'react'

export default class Ltk_Eventform3 extends Component {
    constructor(props){
super(props)
this.state={
    name:"Lê Trung Kiên",
    job:"Sinh viên"
}

}
handleChangeName=()=>{
    this.setState({
        name:"K22CNT4-ReactJs"
    })
    }
    handleChangeJob=()=>{
        this.setState({
            job:"Công nghệ thông tin"
        })}
  render() {
    return (
      <div>
        <h2>Thay đổi dữ liệu trong state</h2>
        <p>Dữ liệu:{this.state.name}-{this.state.job}</p>
        <button onClick={this.handleChangeName}>Thay đổi name</button>
        <button onClick={this.handleChangeJob}>Thay đổi job</button>
      </div>
    )
  }
}
