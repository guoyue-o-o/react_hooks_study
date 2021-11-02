# react生命周期
## 1.挂载阶段
### 1）componentWillMount()
在整个生命周期中，调用一次
- 预挂载的内容,为组件挂载到DOM之前调用一次，
- 在本周期中调用this.setState方法**不会**引起页面的重渲渲染
### 2) componentDidMount
在整个生命周期中，调用一次
- 组件挂载到DOM后调用该周期

本组件的render执行完，并不会调用componentDidMount，全部子组件的render调用完后才会调用CDM

## 2.更新阶段

### ① componentWillReciveProps(nextProps)

**可以有效减少无效渲染次数**，并提高周期的开发效率

- props改变后将要引起组件的重新渲染时才调用
- 通过本作用域中的this.state与传过来的nextProps进行比较来得出是否要重新调用render进行渲染

### ②shouldComponentUpdate（nextProps，nextState）
