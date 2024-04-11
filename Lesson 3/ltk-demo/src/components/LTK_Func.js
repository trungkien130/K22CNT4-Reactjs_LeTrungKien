import React from 'react'

export default function LTK_Func(props) {
  return (
    <div>
      <hr/>
      <h2>Function component Demo</h2>
      <h3>Sử dụng thuộc tính props</h3>
      <p>User Name: {props.username}</p>
      <p>FullName: {props.Fullname}</p>
      <p>Age: {props.age}</p>
    </div>
  )
}
