import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { Space, Table, Tag, Button } from 'antd'
import { ColumnsType } from 'antd/es/table'

import { ProductWrapper } from './style'
import { shallowEqual, useAppDispatch, useAppSelector } from '@/store'
import { fetchProductListAction } from '@/store/modules/user/product'
import { DataType } from '@/types/user/product'

const columns: ColumnsType<DataType> = [
  {
    title: '序列',
    dataIndex: 'index',
    key: 'index',
    align: 'center'
  },
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    align: 'center'
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
    align: 'center'
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
    align: 'center'
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime',
    key: 'updateTime',
    align: 'center'
  },
  {
    title: '标签',
    dataIndex: 'labels',
    key: 'labels',
    align: 'center',
    render: (text, { labels }) => {
      return (
        <>
          {labels.map((item) => {
            return (
              <Tag color="green" key={item.id}>
                {item.name}
              </Tag>
            )
          })}
        </>
      )
    }
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
    render: () => (
      <Space size="middle">
        <a>编辑</a>
        <a>删除</a>
      </Space>
    )
  }
]

interface IProps {
  children?: ReactNode
}

const Product: FC<IProps> = () => {
  // 派发事件
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchProductListAction())
  }, [])

  // 从store拿到数据
  const { productListData } = useAppSelector(
    (state) => ({
      productListData: state.product.productListData
    }),
    shallowEqual
  )

  // 新增项目的路由跳转
  const navigate = useNavigate()
  function handleAddClick() {
    navigate('/write')
  }

  return (
    <ProductWrapper>
      <div className="top">
        <h3 className="title">项目列表</h3>
        <Button type="primary" onClick={handleAddClick}>
          新增项目
        </Button>
      </div>
      <Table columns={columns} dataSource={productListData} bordered />
    </ProductWrapper>
  )
}

export default memo(Product)
