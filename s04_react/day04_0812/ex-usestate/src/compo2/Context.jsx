import React, { createContext, useContext } from 'react';

const Context = () => {
    const ThemeContext = createContext('light');

    function Toolbar() {
        return (
            <div>
                <ThemeButton />
            </div>
        );
    }

    function ThemeButton() {
        const theme = useContext(ThemeContext);
        return <button style={{backgroundColor: theme === 'dark' ? '#333' : '#ccc', color: '#fff'}}>테마버튼</button>
    }

    return (
        <ThemeContext.Provider value="dark">
            <Toolbar />
        </ThemeContext.Provider>
    );
};

export default Context;