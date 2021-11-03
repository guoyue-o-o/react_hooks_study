import React, { createContext, useReducer } from 'react';
import { UPDATE_THEME_BG_COLOR } from "../data/constData";

export const bgColorContext = createContext({});

// 
const themeReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_THEME_BG_COLOR:
            return action.bgColor;
        default:
            return state;
    }
}

export const ThemeBgColor = (props) => {
    const [ bgColor, dispatch ] =  useReducer(themeReducer, '#282c34')
    return (
        <bgColorContext.Provider value={{bgColor, dispatch}}>
            {props.children}
        </bgColorContext.Provider>
    )

}