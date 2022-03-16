login
1. 跨层次共享登陆状态
    useContext + useReducer + createContext

2. 登陆后，前端要做哪些细节？
    1. 用cookie 方案优化,
        在http每次请求的时候都会带上cookie
        存在浏览器的文件中
    2. localStorage 
        name avatar
    3. token 不用 cookie
        cookie 不安全

3. HTTP 请求头需要如何理解？
    为什么要Content-Type 字段？
    服务器等下如何处理前端发送出来的内容？
    Content-Type: application/json JSON.parse()
    Authorization token


    你 微信 小程序 用户身份的？ 网站  用户微信信息？

    token
    你授权给 第三方小程序或网站？ yes 
    微信就会把一个令牌交给 第三方 access token

    fetch('weixin.com, {
        header: {
            Authorization: "token"
        }
    })
