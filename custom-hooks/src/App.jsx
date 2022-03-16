import { useState, useEffect, Fragment } from 'react'
import axios from 'axios';

// 考题 自定义一个hooks ----------------------------------
const useHackerNewsApi = () => {
  const [data, setData] = useState({hits: []})
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [url, setUrl] = useState(
    'https://hn.algolia.com/api/v1/search?query=redux'
  )
  useEffect( () => {
    const fetchData = async () => {
      setIsLoading(true)
      setIsError(false)
      const result = await axios(url);
      setData(result.data)
      setIsLoading(false)
    }
    fetchData()
    // query 
    //  ?  useEffect 重新的 update 
  }, [url]) // 可读性
  return [{ data,isLoading, isError },setUrl];
}
// ----------------------------------------------------------

function App() {
  // 第一变
  // const [data, setData] = useState({hits: []})
  const [{ data,isLoading,isError }, setUrl] = useHackerNewsApi()
  const [query, setQuery] = useState("redux")
  // const [search, setSearch] = useState("redux")
  // useEffect 不只是在mount 执行， 更新阶段 
  // 死循环 []  useEffect 什么状态更新后才再执行  update  unmount

  return (
    <Fragment>
      {/* 性能开销   防抖节流 */}
      <form onSubmit={(e) => {
        setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
        e.preventDefault();
      }}>
        <input type="text" value={query}  onChange={
          event => setQuery(event.target.value)
        } />
        {isError && <div>出错了。。。。。。。。</div>}
        <button type="submit">Search</button>
      </form>
      {isLoading? (
        <div>Loading....</div>
      ): (
        <ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href="{item.url}">{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  )
}

export default App
