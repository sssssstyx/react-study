import React, { useEffect } from 'react';
import { apiLogin } from './api/user.api';
import './App.css';
// :3000  :8000 同源策略
// :3000 -> component -> ;ifeCycle -> api(拦截一下 axios request + ) ->  backend 8000

function App() {
  // store
  useEffect(() => {
    // 函数式编程思想
    const fn = async () => {

      await apiLogin({ username: 'root',password: '123456' })
    }
    fn();
  },[])
  return (
    <div>

    </div>
  );
}

export default App;
