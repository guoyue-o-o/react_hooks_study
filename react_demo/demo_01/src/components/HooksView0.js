import React, { useState, useEffect } from 'react';


function HooksView() {
    // 数组解构：通过useState顺序来记录
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>
                HooksView4
            </h1>
            <p>
                点击了{count}次
            </p>
            <button onClick={() => setCount(count + 1)}>
                点击我
            </button>
        </div>
    )
}

export default HooksView;
