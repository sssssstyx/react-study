const express = require('express');
const router = express.Router();

// 1. 连接数据库
let todos = [];
router.get('/',async (req,res) => {
    res.json({
        todoList:todos
    })
})

router.post('/',async(req,res) => {
    const { title,status } = req.body
    console.log(req.body);
    // console.log(title,status);
    todos.push({
        title,
        status
    })
    res.json({
        success: true
    })
})

module.exports = router;