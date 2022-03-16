import React, { Component } from 'react';

export default class LifeCycle extends Component {
    constructor() {
        super(); // Component 父类的方法
        this.state = { // 自有状态
            number: 0,
            users: []
        }
        console.log("1. constructor 初始化 props and atate");
    }
    // 组件的模板渲染前不要发生请求
    // 用户体验 快
    componentWillMount() {
        console.log("2. componentWillMount 组件将要挂载");
    }
    componentDidMount() {
        console.log("4. componentDidMount 组件挂载完成");
        // render执行完了
        fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(users => {
            console.log(users,"-----------");
            this.setState({users});
        })
    }
    shouldComponentUpdate(nextProps,nextState) {
        if(nextState.number == this.state.number) {
            return false;
        }
        console.log('5. shouldComponentUpdate 询问组件是否需要更新？');
        return true;
    }
    componentWillUpdate() {
        console.log('6. componentWillUpdate 组件即将更新');
    }
    componentDidUpdate() {
        console.log('7. ComponentDidUpdate 组件更新完成');
    }
    render() {
        console.log("3. render渲染, 也就是挂载");
        return (
            <div style={{border: '5px solid red',padding: '5px'}}>
                <p>{this.props.name}:{this.state.number}</p>
                <button onClick={this.add.bind(this)}>+</button>
                <ul>
                    {
                        this.state.users.map(user => (<li key={user.id}>{user.login}</li>))
                    }
                </ul>
                
            </div>
        )
    }
    add() {
        this.setState({
            number:this.state.number + 1
        })
    }
}