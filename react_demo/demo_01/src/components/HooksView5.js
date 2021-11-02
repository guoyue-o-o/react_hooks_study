// Reducer
// action 控制业务逻辑
// state 初始状态
// function countReducer(state, action) {
//     switch (action.type) {
//         case 'add':
//             return state+1
//         case 'sub':
//             return state-1
//         default:
//             return state-1
//     }
// }

import React, { useReducer, useEffect } from 'react';

function HooksView5() {
    // 0 代表初始值
    // dispatch函数
    const [ count, dispatch ] = useReducer((state, action) => {
        switch (action.type) {
            case 'add':
                return state + 1
            case 'sub':
                return state - 1
            default:
                return state - 1
        }
    }, 0)

    return (
        <div>
            <h1>
            HooksView5--useReducer
            </h1>
            <p>
                现在的分数是：{count}
            </p>
            <button onClick={() => dispatch({type: 'add'})}>
                加法
            </button>
            <button onClick={() => dispatch({type: 'sub'})}>
                减法
            </button>
        </div>
    )
}

export default HooksView5;
