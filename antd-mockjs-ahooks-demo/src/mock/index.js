import Mock from 'mockjs'
import tableAPI from './table'

// 正则对象
Mock.mock(/\/table\/list/, "post", tableAPI.tableList)