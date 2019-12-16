import React, { Component } from "react";
// 容器组件
export default class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                comments: [
                    { body: "react is very good", author: "facebook" },
                    { body: "vue is very good", author: "youyuxi" }
                ]
            });
        }, 1000);
    }
    render() {
        return (
            <div>
                {this.state.comments.map((c, i) => (
                    <Comment key={i} { ...c } />
                ))}
            </div>
        );
    }
}
const Comment = React.memo(function(props) {
    console.log('render')
    return (
        <div>
            <p>{props.body}</p>
            <p> --- {props.author}</p>
        </div>
    );
})

// 展示组件
// class Comment extends React.PureComponent {
//     // shouldComponentUpdate(nextProps){
//     //     if(nextProps.data.body == this.props.data.body && nextProps.data.body == this.props.data.body){
//     //         return false
//     //     }
//     //     return true;
//     // }
//     // 在 15.3 版本之后 出现了 PureComponent
//     pru
//     render() {
//         console.log('render')
//         return (
//             <div>
//                 <p>{this.props.body}</p>
//                 <p> --- {this.props.author}</p>
//             </div>
//         );
//     }
// }