# Hooks：
react 有两种创建组建的方式
- 函数组件（纯渲染组件，无状态组件）
- 类组件（有状态组件）

纯函数组件特点：
- 没有状态
- 没有生命周期
- 没有this
- 只能是纯函数

简单来说，React Hooks是加强版的函数组件
组件尽量写成纯函数

react提供常用的始终钩子：
- useState()
- useContext()
- useReducer()
- useEffect()

**React约定，钩子一律使用 use前缀命名, useXXX**


## 数组解构：

**useState不能存在于条件判断语句中**

```
const [ count, setCount ] = useState(0)

等价于

// 数组
let _useState = useState(0);
let count = _useState[0]
let setCount = _useState[1]
```

# useEffect

- 解决没有生命周期函数问题
- 等价于 componentDidUpdate,componentDidMount
- return 匿名函数可以表示销毁生命周期

 ```

useEffect(() => {
    console.log('componentDidUpdate,componentDidMount ------>')

    // 销毁生命周期
    return ()=> {
        console.log('componentWillUnmount ------>')
    }
}, 可选参数)

// 可选参数  
// [] 表示离开当前页面的时候执行return
// [count] 表示count变化的时候执行return

 ```


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

 # useContext

- 解决父子组件传值问题

### 适用场景：
**被用于在多个层级的多个组件需要访问相同数据的情景**

### 作用：
- 改变主题
- 父子耦合
- 作用于多个上下文
- 在生命周期方法中访问Context
- 高阶组件的Context
- 转发refs

```
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


```


# useReducer 

- 解决状态更新问题 Redux

### js写的Reducer
```
// Reducer
// action 控制业务逻辑
// state 初始状态
function countReducer(state, action) {
    switch (action.type) {
        case 'add':
            return state+1
        case 'sub':
            return state-1
        default:
            return state-1
    }
}
```

```
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
```

# useReducer + useContext 实现类似redux的功能

# useMemo
《==》 shouldComponentUpdate
**解决重复性渲染,反复执行问题**

比如点击父组件，父组件状态改变，子组件也触发方法

```

```

# useRef

特性：
- 获取dom元素
- 保存变量

```
import React, { useEffect, useRef, useState } from 'react';


function HooksView8() {
    <!-- 1.获取dom元素 -->
    const inputEl = useRef(null);

    const onBtnClick = () => {
        inputEl.current.value = '你好';
    }
    const [text, setText] = useState('初始值');
    <!-- 2.保存变量 -->
    const textRef = useRef();

    useEffect(() => {
        textRef.current = text;
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

```