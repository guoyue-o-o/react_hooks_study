# useEffect

- 解决没有生命周期函数问题
- 等价于 componentDidUpdate,componentDidMount
- return 匿名函数可以表示销毁生命周期

## 用法一
```
// props.name发生变化时，才会重新渲染
function Welcome(props) {
  useEffect(() => {
    document.title = `Hello, ${props.name}`;
  }, [props.name]);
  return <h1>Hello, {props.name}</h1>;
}

```
useEffect(arg1, arg2)
- arg1副效应函数，
  - 副效应是随着组件加载而发生的
  - **默认是每次渲染都会执行**
- arg2 数组，指明了副效应函数的依赖项
  - 如果是空数组，就表明副效应参数没有任何依赖项。因此，副效应函数这时只会在组件加载进入 DOM 后执行一次，后面组件重新渲染，就不会再次执行
  - [props.name]，指定了第一个参数（副效应函数）的依赖项（props.name),只有该变量发生变化时，副效应函数才会执行


## 用法二
```
<!-- useEffect()在组件加载时订阅了一个事件，并且返回一个清理函数，在组件卸载时取消订阅 -->
useEffect(() => {
  const subscription = props.source.subscribe();

  // 清除副效应函数
  <!-- 清理函数不仅会在组件卸载时执行一次，每次副效应函数重新执行之前，也会执行一次，用来清理上一次渲染的副效应。 -->
  return () => {
    subscription.unsubscribe();
  };
}, [props.source]);

```
## 用法三（注意）
**如果有多个副效应，应该调用多个useEffect()**
```
function App() {
  const [varA, setVarA] = useState(0);
  const [varB, setVarB] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setVarA(varA + 1), 1000);
    return () => clearTimeout(timeout);
  }, [varA]);

  useEffect(() => {
    const timeout = setTimeout(() => setVarB(varB + 2), 2000);

    return () => clearTimeout(timeout);
  }, [varB]);

  return <span>{varA}, {varB}</span>;
}

```

## 综合
 ```

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

 ```