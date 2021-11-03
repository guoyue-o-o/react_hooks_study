# react生命周期
## 1.挂载阶段（实例化阶段）
### 1）componentWillMount()

在整个生命周期中，调用一次
- 预挂载的内容,为组件挂载到DOM之前调用一次，
- 在本周期中调用this.setState方法**不会**引起页面的重渲渲染

- 子组件也有 componentWillMount函数，它会在父组件的 componentWillMount函数之后被调用
### 2) componentDidMount

在整个生命周期中，调用一次
- 组件挂载到DOM后调用该周期

本组件的render执行完，并不会调用componentDidMount，全部子组件的render调用完后才会调用CDM
## 2.更新阶段

### ① componentWillReciveProps(nextProps)

**可以有效减少无效渲染次数**，并提高周期的开发效率

- props改变后将要引起组件的重新渲染时才调用
- 通过本作用域中的this.state与传过来的nextProps进行比较来得出是否要重新调用render进行渲染
- **当React Native 初次被渲染时，componentWillReceiveProps函数并不会被触发**
### ② shouldComponentUpdate（nextProps，nextState）

**优化组件性能，减少非必要渲染**

**返回一个布尔值**

- this.props/this.state和传入的nextProps/nextState 未发生改变false，不更新组件，发生改变更新组件

### ③ ComponentWillUpdate（nextProps,nextState）

- 在render之前的预渲染，也是进行比较

- 当上面的方法拦截返回 true的时候，就可以在该方法中做一些更新之前的操作

### ④ render

- 根据一系列的 diff算法，生成需要更新的虚拟 DOM数据
### ⑤ componentDidUpdate（preProps,preState）

- 进行渲染后与DOM的操作，传入的参数为preProps/preState，参数均为组件更新前的props和state

### 注意：
**更新阶段内不许使用setState方法进行state值的修改，否则会引起render的循环重渲染**

## 3.销毁
### ① componentWillUnmount
- 用于清理一些无用的内容，比如：定时器清除