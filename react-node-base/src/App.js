import React,{ useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import TopicsList from './pages/TopicsList';
import { useSelector } from 'react';
import { useTopicsList } from './store/action'

function App() {
  // data loading 中央提供 react hooks?
  // 分页 三种做法 组件内部的 useState + useEffect
  // useContext useReducer 不太熟 代替redux?
  // redux? 目前仍是业界主流
  // provider  topics reducer函数
  let { data,loading } = useSelector((state) => state.topics)
  let getData = useTopicsList();
  useEffect(() => {
    getData('all',  1)
    console.log(data, loading);
  }, [])
  return (
    <div >
      {/* 文章列表 -> data */}
      <TopicsList data={data} loading={loading} />
      {/* <Pagination /> */}
    </div>
  );
}

export default App;
