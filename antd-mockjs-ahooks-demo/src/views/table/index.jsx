import React, { useState, useEffect} from 'react'
import { useRequest } from 'ahooks'
// import { tableList } from '../../api/table'
import { Table, Button,Form, Pagination } from 'antd'
import axios from 'axios'
import "antd/dist/antd.css"

const { Column } = Table

const TableComponent = () => {
  const [listQuery, setListQuery] = useState({
    pageNumber: 1,
    pageSize: 10,
    title: "",
    star: "",
    status: ""
  })

  const fetchTableList =  (query) => {
    return new Promise(function(resolve, reject) {
      axios.post('/table/list', query)
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
    })  
  }
  const { data, error, loading = false, run } = 
    useRequest(() => fetchTableList(listQuery))
  console.log(data, error, loading)
  const changePage = (pageNumber) => {
    setListQuery({
      ...listQuery,
      pageNumber
    })
  }

  useEffect(() => {
    console.log('------------------')
    run()
  }, [listQuery])
  return (
    <>
      {data && data.data.data.total > 0 && (
        <>
          <Table
            bordered
            rowKey={(record) => record.id}
            dataSource={data.data.data.items}
            loading= {loading}
            pagination={false}
          >
            <Column 
              title="序号" 
              dataIndex="id" 
              key="id" 
              width={200} 
              align="center"
            />
            <Column 
              title="标题" 
              dataIndex="title" 
              key="title" 
              width={200} 
              align="center"
            />
            <Column 
              title="作者" 
              dataIndex="author" 
              key="author" 
              width={100} 
              align="center"
            />
            <Column 
              title="阅读量" 
              dataIndex="readings" 
              key="readings" 
              width={195} 
              align="center"
            />
            <Column 
              title="推荐指数" 
              dataIndex="star" 
              key="star"
              width={195} 
              align="center"
            />
            <Column 
              title="状态" 
              dataIndex="staus" 
              key="staus"
              width={195} 
              align="center"
            />
          </Table>
          <Pagination 
            total={data.data.data.total}
            pageSizeOptions={["10", "20", "40"]}
            onChange={changePage}
          />
        </>
      )}
    </>
  )
}

export default TableComponent