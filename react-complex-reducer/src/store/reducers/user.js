import * as types from '../action-types'
// 用户信息
const initUserInfo = {
    name: "",
    role: "", // admin user editor
    avatar: "",
    token: "" // 登陆后有的
}

export default function user( state = initUserInfo, action) {
    const { payload } = action
    switch(action.type) {
        case types.USER_SET_USER_INFO:
            return {
                ...state,
                name: payload.name,
                role: payload.role,
                avatar: payload.avatar
            }
        default:
            return state
    }
}