import { useDispatch } from 'react-redux'

// 交给页面去作为方法调用
// useState + useEffect
// useEffect -> store -> action -> reducer 重新计算 -> 更新
const http = axios.create({
    baseURl: "https://cnodejs.org/api/v1"
})

function useTopicsList() {
    //  异步请求
    let dispatch = useDispatch();
    return function(tab="all", page = 1, limit= 20, mdrender = true) {
        // 进入loading 状态
        dispatch({
            type: "topics_loading"
        })
        HTTP.get(`/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`)
            .then( res => {
                dispatch({
                    type: "topics_loadover",
                    data: res.data.data
                })
            })
    }
}

export { useTopicsList };