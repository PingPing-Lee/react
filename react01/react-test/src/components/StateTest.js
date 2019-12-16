import React, { Component } from 'react';

class StateTest extends Component {
    state = {
        counter: 1
    }

    componentDidMount(){
        // 请不要直接修改状态值
        // this.state.counter += 1;

        //  2. 批量执行
        // this.setState(obj,callback)
        // this.setState(fn,callback)
        // this.setState({ counter: this.state.counter + 1 });
        // this.setState({ counter: this.state.counter + 1 });
        // this.setState({ counter: this.state.counter + 1 });
        // 就算多次执行 输出结果 依然是 2，

        //  如果就是想执行三次 在上一次执行的结果上继续执行(变量的新值依赖于旧值)，请使用函数的方法去实现，具体写法如下
        this.setState( prevStatte => ({
            counter: prevStatte.counter + 1
        }))
        this.setState( prevStatte => ({
            counter: prevStatte.counter + 1
        }))
        this.setState( prevStatte => {
            return {
                counter: prevStatte.counter + 1
            }
        })
        //  连续执行三次输出结果 为 4

    }
    render() {
        return (
            <div>
                { this.state.counter}
            </div>
        );
    }
}

export default StateTest;