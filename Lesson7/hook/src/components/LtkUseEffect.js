import React, { useEffect, useState } from 'react'

export default function LtkUseEffect() {
    const [count, setCount] = useState(0)
    const LtkHandleClick = () => {
        setCount(prev => prev + 1)
    }
    useEffect = (() => {
        document.title = `Lê Trung Kiên : You clicked ${count} times`
    })
    useEffect = (() => {

        console.log("chạy lần đâu tiên")
    }, [])
    useEffect = (() => {
        console.log(`UseEffect count click: ${count}`)
    }, [count])

    return (
        <div>
            <h2>Demo- UseEffect</h2>
            <button onClick={LtkHandleClick}>Click here</button>
        </div>
    )
}

