import React, { Component } from 'react';

class Clock extends Component {
    // 状态 state 是固定的名字
    state = {
        date: new Date()
    }

    componentDidMount(){
        const timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        },1000)
    }
    componentWillUnmount(){
        // 防止没存泄漏，在组件 卸载的钩子里面 清楚定时器
        clearInterval(this.timer);
    }
    render() {
        return (
            <div>
                {this.state.date.toLocaleTimeString()}
            </div>
        );
    }
}

export default Clock;