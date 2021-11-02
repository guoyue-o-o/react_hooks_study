import React, { createContext, useReducer } from 'react';

export const ColorContext = createContext({})

export const UPDATE_COLOR = 'UPDATE_COLOR';

const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_COLOR:
            return action.color;
        default:
            return state;
    }
}

// props当我们有子组件的时候
export const Color = props => {
    // useReducer(参数1，参数2)
    // 参数1 是方法
    // 参数2 是默认值
    const [ color, dispatch ] =  useReducer(reducer, 'blue')
    return(
        <ColorContext.Provider value={{color, dispatch}}>
            {props.children}
        </ColorContext.Provider>
    )
}

// userReducer 来模仿redux的逻辑