// 购物车案例
import React, { Component } from 'react';


class CartSample extends Component {
    //  状态的初始化一般放在构造器中
    constructor(props){
        super(props);

        this.state = {
            goods: [
                {id: 1,text: 'Web全栈架构师'},
                {id: 2,text: 'Java全栈架构师'}
            ],
            text: '',
            cart: []
        }
        this.addGood = this.addGood.bind(this)
    }
    // 回调函数的声明用 尖头函数
    textChange = (event) =>{
        this.setState({text: event.target.value})
    }
    // 直接用 addGood() 这种方式 会报错，因为此时的this 指向的是 button 而不是当前组件实例，所以找不到 setstate，
    // 解决方法 有两种，可以在  constructor 中添加 一句，this.addGood = this.addGood.bind(this)
    addGood(){
        this.setState(prevstate => {
            // react 官方希望传入与返回的对象不应该是同一个对象
            return{
                goods: [
                    ...prevstate.goods,
                    {
                        id:prevstate.goods.length+1,
                        text:prevstate.text
                    }
                ]
            }
        })
    }
    // 加入购物车函数
    addtoCart = (good) => {
        // 创建一个新的购物车
        const newCart = [ ...this.state.cart ]
        const idx = newCart.findIndex(c => c.id === good.id)
        const item = newCart[idx];
        if(item){
            // 如果购物车中含有改商品，直接数量加 1
            // 删除 idx 项，再新增一项，新增项的属性和 item 一样，唯独修改 count
            newCart.splice(idx,1,{ ...item,count: item.count + 1})
        }else{
            // 如果没有则加入购物车
            newCart.push({ ...good, count: 1})
        }

        //更新
        this.setState({cart: newCart})
    }
    // 处理数量的更新
    add = (good) =>{
        // 创建一个新的购物车
        const newCart = [ ...this.state.cart ]
        const idx = newCart.findIndex(c => c.id === good.id)
        const item = newCart[idx];
        newCart.splice(idx,1,{ ...item,count: item.count + 1})


        //更新
        this.setState({cart: newCart})
    }
    minus = (good) =>{
        // 创建一个新的购物车
        const newCart = [ ...this.state.cart ]
        const idx = newCart.findIndex(c => c.id === good.id)
        const item = newCart[idx];
        newCart.splice(idx,1,{ ...item,count: item.count - 1})


        //更新
        this.setState({cart: newCart})
    }
    render() {
        // const title = this.props.title ? <h1>this.props.title</h1> : null;
        return ( 
            <div>

                {/* 条件渲染 */}
                { this.props.title && <h1>{this.props.title}</h1> } {/* 短路逻辑 */}

                {/* 列表渲染 */}
                <div>
                    <input type="text" value={this.state.text} onChange={this.textChange}/>
                    {/* 事件名称之后不能加 ()  */}
                    <button onClick={this.addGood}>添加商品</button>
                </div> 
                <ul>
                    {this.state.goods.map( good  => (
                        <li key={good.id}>
                            {good.text}
                            <button onClick={() => this.addtoCart(good)}>加入购物车</button>
                        </li>
                    ))}
                </ul>

                {/* 购物车 */}
                {/* // 父组件传值给子组件，通过 props 即可 */}
                <Cart data={this.state.cart} minus={this.minus} add={this.add}></Cart>
                
            </div>
        );
    }
}

function Cart({data, minus, add}) {
    return (
        <table>
            <tbody>
                {data.map((d) => (
                    <tr key={d.id}>
                        <td>{d.text}</td>
                
                        {/* // 子组件 传值给 父组件，父组件以 属性的形式传给子组件一个函数，告诉子组件 数据发生变化时应该调用哪个函数  */}
                        <button onClick={() => minus(d)}>-</button>
                        <td>{d.count}</td>
                        <button onClick={() => add(d)}>+</button>
                    </tr>
                ))}
                
            </tbody>
        </table>   
    )
}

export default CartSample;