import React, { createContext } from 'react';

export const ColorContext = createContext({})

// props当我们有子组件的时候
export const Color = props => {
    return(
        <ColorContext.Provider value={{color: 'red'}}>
            {props.children}
        </ColorContext.Provider>
    )
}

// userReducer 来模仿redux的逻辑