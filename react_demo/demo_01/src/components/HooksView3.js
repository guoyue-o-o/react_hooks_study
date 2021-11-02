import React, { Component, useState } from 'react';

class HooksView3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }
    componentDidMount() {
        console.log(`componentDidMount--->点击了${this.state.count}`);
    }
    componentDidUpdate() {
        console.log(`componentDidUpdate--->点击了${this.state.count}`);
    }
    render() {
        return (
            <div>
                <h1>
                HooksView3--class声明的组件
                </h1>
                <p>
                    点击了{this.state.count}次
                </p>
                <button onClick={() => this.addCount()}>
                    点击我
                </button>
            </div>
        )
    }

    addCount() {
        this.setState({
            count: this.state.count+1
        })
    }
}


export default HooksView3;
