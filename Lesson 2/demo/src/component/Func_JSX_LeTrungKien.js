import React from 'react'

export default function Func_JSX_LeTrungKien(props) {
    const user={
        name:'Lê Trung Kiên',
        age:20
    }
  return (
    <div>
      <h2>Function Component demo</h2>
      <h3>Wellcome to {user.name}-{user.age}</h3>
      <hr/>
      <h3>
        Props:
        <br/>
        FullName: {props.fullName}
        <br/>
        Age: {props.age}
      </h3>
    </div>
  )
}
