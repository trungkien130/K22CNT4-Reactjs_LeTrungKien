import React, { useContext } from 'react'
import { ThemeContext } from './LtkUseContext'

export default function LtkUseContext2() {
    const theme = useContext(ThemeContext)
    return (
        <div className={theme}>
            <h2>LtkUseContext2</h2>
            <p>
                <b>2210900034</b>
                <b>Lê Trung Kiên</b>
                <b>K22CNT4</b>
            </p>
        </div>
    )
}
