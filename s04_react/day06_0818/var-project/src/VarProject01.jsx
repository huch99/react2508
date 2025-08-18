import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

const VarProject01 = ({children}) => {

    const [count, setCount] = useState(0);

    return (
        <div>
            <GlobalContext.Provider value={{ count, setCount }} >
                {children}
            </GlobalContext.Provider>
        </div>
    );
};

export default VarProject01;

export const useGlobal = () => useContext(GlobalContext);