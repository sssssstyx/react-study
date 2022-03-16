/**
 * reducer 函数
 * 把组件的各种状态 当下的状态 
 * 就是一个函数
 * 返回值是当前的状态
 */
export default function topics(
    topics = {
        loading: true,
        data: []
    },
    action
) {
    switch(action.type) {
        default:
            return topics
    }
}