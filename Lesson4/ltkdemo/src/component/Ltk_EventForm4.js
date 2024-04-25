import React, { Component } from 'react'

export default class Ltk_EventForm4 extends Component {
    constructor(props){
        super(props)
        this.state={
                name:"Trung Kiên"
        }
    }
    handleChangeName=()=>{
        this.setState({
            name:this.props.name
        })
    }
  render() {
    return (
      <div>
        <h2>Lấy dữ liệu từ props</h2>
        <button onClick={this.handleChangeName}>Lấy tên từ props</button>
        <h2>Wellcome {this.state.name}</h2>
      </div>
    )
  }
}
