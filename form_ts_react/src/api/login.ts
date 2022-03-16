import { LoginEntity} from '../model/login'

// ts 开发接口调理
// 1. API 都是promise 可以通过泛行的约定 resolve reject 后的结果去约定
//     async let isLogined:boolean = await isValidLogin
// 2. 接口请求时， 带上参数 接口约定参数
//    多人协作的时候
//    接口一般是不变的，组件 每天都可能变
export const isValidLogin = (loginInfo:LoginEntity):Promise<boolean> => new Promise((resolve) => {
    setTimeout(() => {
        // if(loginInfo.login == 'admin' && loginInfo.password == 'tesst')
        //     resolve(true)
        // resolve(false)
        resolve(loginInfo.login == 'admin' && loginInfo.password == 'test')
        })
})