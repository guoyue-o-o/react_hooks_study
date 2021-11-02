import React, { useState } from 'react';

let showSex = true;

function HooksView2() {
    // 数组解构
    // const [count, setCount] = useState(0);
    // useState不能存在于条件判断语句中
    const [age, setAge] = useState(18);
    const [work, setWork] = useState('前端开发');
    const [sex, setSex] = useState("女");

    return (
        <div>
            <h1>
            HooksView2--多个useState
            </h1>
            <p>
                今年{age}岁，
            </p>
            <p>
                性别是{sex}，
            </p>
            <p>
                工作是{work}
            </p>
        </div>
    )
}

export default HooksView2;
