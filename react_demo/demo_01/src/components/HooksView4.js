import React, { useState, createContext, useContext } from 'react';

const CountContext = createContext();

function Counter() {
    let count = useContext(CountContext)
    return <h3>
        子组件：{count}
    </h3>
}


function HooksView4() {
    // 数组解构：通过useState顺序来记录
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>
                HooksView4--useContext
            </h1>
            <p>
                父组件点击了{count}次
            </p>
            <button onClick={() => setCount(count + 1)}>
                点击我
            </button>
            {/* count 表示共享给子组件 */}
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>
        </div>
    )
}

export default HooksView4;
