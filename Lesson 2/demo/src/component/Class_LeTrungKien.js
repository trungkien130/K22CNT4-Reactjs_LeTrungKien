import React, { Component } from 'react'

export default class Class_LeTrungKien extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'Lê Trung Kiên',
            class:'K22CNT4'
        }
    }
    user={
        name:'Lê Trung Kiên',
        age:20
    }
    handleChange=(e)=>{
        this.setState({
            name:"Chach Van Doanh"
        })
    }
  render() {
    return (
      <div>
        <h2>Class component demo</h2>
        {this.user.name} - {this.user.age}
        <hr/>
       <h3>{this.props.infor}</h3>
       <h3>{this.props.time}</h3>
       <hr/>
       <h3>
        State:
        FullName:{this.state.name}
        Class:{this.state.class}
        </h3>
        <button onClick={this.handleChange}>Change Name</button>
      </div>
    )
  }
}
