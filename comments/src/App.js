import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'; // Component 基类

const users = [
  {  
    name: '罗超',
    age: '19',
    sex: '男'
  },
  {
    name: '聂佳颖',
    age: '21',
    sex: '男'
  }
]
// facebook 是由一万多个组件搭建起来的

// class User extends Component {
//   render() {
//     return (
//       <div>
//         User模块
//       </div>
//     )
//   }
// }

// 函数式
function User(porps) {
  return (
    <div >
      <div>姓名：罗超</div>
      <div>年龄：19</div>
      <div>性别：男</div>
    </div>
  )
}
// 根组件
function App() {
  return (
    <div className="App">
      {/* user组件 组件思想 */}
      <User User={users[0]}/>
    </div>
  );
}

export default App;
