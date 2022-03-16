const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const todosRouter = require('./routes/todo');
// 中间件
app.use(cors());
app.use("/todo", todosRouter);

app.use(bodyParser.json()); 
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

app.listen(4000, () => {
    console.log('服务器启动了');
})