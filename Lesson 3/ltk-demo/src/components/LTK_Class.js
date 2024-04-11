import React, { Component } from 'react'

export default class LTK_Class extends Component {
    constructor(props){
        super(props)
        this.state={
            firstname:"Kiên",
            lastname:"Lê Trung",
            username:"K22CNT4"
        }
    }
    Member=(props)=>{
        return(
            <div>
                <h3>Xin chào: {props.fullname} - Bạn đã {props.age} tuổi</h3>
            </div>
        )
    }
    ListMember=()=>{
        return<>
        <this.Member fullname="Lê Trung Kiên" age="20"/>
        <this.Member fullname="Đinh Tiến Lực" age="20"/>
        </>
    }
  render() {
    return (
      <div>
        <h2>Class Component Demo</h2>
        <hr/>
        <h3>Dữ liệu trong state</h3>
        <h3>Xin chào {this.state.lastname} {this.state.firstname}</h3>
        <hr/>
        <h3>Dữ liệu từ props</h3>
        <p>Company: {this.props.company}</p>
        <p>Course: {this.props.course}</p>
        <this.Member fullname="Lê Trung Kiên" age="20"/>
        <this.ListMember/>
      </div>
    )
  }
}
