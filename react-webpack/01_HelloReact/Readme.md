- css 模块化过程
  1.工程化配合
    - vite index.module.css
    - webpack.config.js css-loader?modules
    - 以对象的方式输出
    - 生成了hash的类名 

    hello-txt-8d9c1
    css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]

  - webpack 是怎么让我们看到页面的
    1. npm run start|dev webpack-devserver --mode development
    2. 首先先交给webpack 根据根目录下的 webpack.config.js 文件编译
        entry main.tsx -> js 文件 bundle.js
    3. plugin 中的 htmlwebpackPlugin index.html
       引入bundle.js 尾部 script
        在开发阶段 是放在内存中
    4. 在webpack-dev-server 根据 devServer 部分 port
        基于exoress 启动http服务，