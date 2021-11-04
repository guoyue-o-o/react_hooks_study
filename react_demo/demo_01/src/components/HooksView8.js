import React, { useEffect, useRef, useState } from 'react';


function HooksView8() {
    // 获取dom元素
    const inputEl = useRef(null);
    const [text, setText] = useState('初始值');
    // 保存变量
    const textRef = useRef();

    const onBtnClick = () => {
        inputEl.current.value = '你好';
    }

    useEffect(() => {
        textRef.current = text;
        console.log('================textRef.current=================== ',textRef.current);
    })

    return (
        <div>
            <h1>
                HooksView8---useRef
            </h1>
            <input ref={inputEl} type='text' />
            <button onClick={onBtnClick}>
                在input显示文字
            </button>
            <br />
            <br />
            <br />
            <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
    )

}

export default HooksView8;