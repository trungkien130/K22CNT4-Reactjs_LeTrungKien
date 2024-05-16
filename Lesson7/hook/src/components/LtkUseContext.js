import React, { createContext, useContext, useState } from 'react'
import LtkUseContext1 from './LtkUseContext1'
export const ThemeContext = createContext()
export default function LtkUseContext() {
    const [theme, setTheme] = useState('red')
    const LtkHandleChange = () => {
        setTheme(theme === 'red' ? 'blue' : 'red')
    }
    return (
        <ThemeContext.Provider value={theme}>
            <div>
                <h2>Demo useContext</h2>
                <LtkUseContext1 />
                <button onClick={LtkHandleChange}>Change bg color</button>
            </div>
        </ThemeContext.Provider>
    )
}
