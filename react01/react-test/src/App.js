import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import { Welcome1, Welcome2 } from './components/CompType'
import Clock from './components/Clock'
import StateTest from './components/StateTest'
import CartSample from './components/CartSample'
import Lifecycle from './components/Lifecycle'
import AntdTest from './components/AntdTest'
import CommentList from './components/CommentList'
 
// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }
function formatName(user){
  return user.firstName + ' ' + user.lastName
}
class App extends Component{ 
  state = {prop: 'some prop'}
  componentDidMount(){
    this.setState({prop: 'a new prop'})
    setTimeout(() =>{
      this.setState({prop: ''})
    },3000)
    
  }
  render(){ 
    const name = 'name is liping'
    const user = {
      firstName: 'li',
      lastName: 'ping'
    }
    const jsx = <p>hello,jsx 也是表达式</p>
    return (
      <div className="App">
        {/* 表达式 */}
        <h1>{ name } </h1>
        <h1>{formatName(user)}</h1>
        {/*   属性 */}
        <img src={logo} style={{width:'100px'}}/> 

        {/* jsx 也是表达式 */}
        {jsx}

        {/* 使用其他组件 */}
        <Welcome1 name="some"></Welcome1>
        <Welcome2 name="props name"></Welcome2>

        {/* state 和状态改变 setstate */}
        <Clock></Clock>
        <StateTest></StateTest>

        {/* 条件与循环 */}
        <CartSample title="购物车"></CartSample>

        {/* 16.0之前的生命周期 */}
        {this.state.prop && <Lifecycle prop= {this.state.prop}></Lifecycle>}  

         {/* antd  */}
         <AntdTest></AntdTest>

         {/* 容器组件 VS 展示组件 */}
         <CommentList></CommentList>
      </div>
    )
  } 
}
export default App;
