import { UPDATE_COLOR } from '../../data/constData';
import React, { createContext, useReducer } from 'react';

// 注意：
// 创建一个 ColorContext,  默认的值为 red
// _currentValue: "red", _currentValue2: "red"
export const ColorContext = createContext('red')

// 注意：
// 每当Provider的值发生改变时, 作为Provider后代的所有Consumers都会重新渲染
const { Provider } =  ColorContext;

// state初始值 action业务逻辑
const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_COLOR:
            return action.color
        default:
            return state;
    }
}

export const Color = (props) => {
    // useReducer(参数1，参数2)
    // 参数1: reducer函数
    // 参数2: 初始值
    const [ color, dispatch ] = useReducer(reducer, 'yellow')
    return (
        // 一个 Provider 可以联系到多个 Consumers
        <Provider value={{color, dispatch}}>
        {
            props.children
        }
        </Provider>

    )
}