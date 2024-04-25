import React from 'react'

export default function Ltk_Eventform2() {
    const handleEnvent=(content)=>{
        console.log('=====================')
        console.log(content)
        console.log('=====================')
    }
  return (
    <div>
      <h2>Event Demo - Function Component</h2>
      <button onClick={handleEnvent("Lê Trung Kiên")} >Gọi khi render</button>
      <button onClick={()=>handleEnvent("K22CNT4-ReactJs")}>Gọi khi Click</button>
    </div>
  )
}
