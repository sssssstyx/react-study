// 1. 给组件 connect 方法， 提出改变状态的申请
// 2. 调用接口数据
import * as types from '../action-types'

export const setUserInfo = (userInfo) => {
    return {
        type: types.USER_SET_USER_INFO
    }
}