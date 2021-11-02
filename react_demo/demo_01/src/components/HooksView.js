import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Index() {
    useEffect(() => {
        console.log(`useEffect------进来Index页面`);
        // 页面销毁
        return () => {
            console.log(`useEffect-----离开Index页面`);
        }
        // [count] 代表count 变化的时候执行解绑
        // [] 表示当前页面离开的时候执行销毁操作
    }, [])

    return <h2>Index页面</h2>
}

function List() {
    useEffect(() => {
        console.log(`useEffect----进来List页面`);
    })
    return <h2>List页面</h2>
}

function HooksView() {
    // 数组解构
    // 通过useState顺序来记录
    const [count, setCount] = useState(0);

    // 匿名函数
    // 代替原来的生命周期函数
    // componentDidUpdate,componentDidMount
    // useEffect 异步的，不会影响视图更新
    // 缺点：无法实时获取浏览器窗口大小
    useEffect(() => {
        console.log(`useEffect---->HooksView点击了${count}次`);

        // 页面销毁
        return () => {
            console.log(`=================`);
        }
        // count 代表count 变化的时候执行解绑
    }, [count])

    return (
        <div>
            <h1>
                HooksView--useEffect
            </h1>
            <p>
                点击了{count}次
            </p>
            <button onClick={() => setCount(count + 1)}>
                点击我
            </button>

            <Router>
                <ul>
                    <li>
                        <Link to='/'>首页</Link>
                    </li>
                    <li>
                        <Link to='/list'>列表</Link>
                    </li>
                </ul>
                {/* exact 精确匹配 */}
                <Route path='/' exact component={Index} />
                <Route path='/list' component={List} />
            </Router>

        </div>
    )
}

export default HooksView;
