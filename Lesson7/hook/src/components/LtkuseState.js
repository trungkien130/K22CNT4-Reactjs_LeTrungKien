import React, { useState } from 'react'

export default function LtkuseState() {
    const [count, setCount] = useState(0)
    const [list, setList] = useState([])
    const ltkHandleList = () => {
        let num = parseInt(Math.random() * 100)
        setList([...list, num])
        // let list = list.push(num)
        // setList(list)
    }
    return (
        <div>

            <p>You click {count} times </p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <h3>List: {list.toString()}</h3>
            <button onClick={ltkHandleList}>thêm ngẫu nhiên</button>
        </div>
    )
}
