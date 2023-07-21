import type { ColumnsType } from 'antd/es/table'

import type { DataType } from '@/types/user/role'

export const columns: ColumnsType<DataType> = [
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
    title: '用户名',
    dataIndex: 'name',
    key: 'name',
    align: 'center'
  },
  {
    title: '昵称',
    dataIndex: 'nikename',
    key: 'nikename',
    align: 'center'
  },
  {
    title: '标签',
    dataIndex: 'tags',
    key: 'tags',
    align: 'center'
  },
  {
    title: '描述',
    dataIndex: 'des',
    key: 'des',
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
  }
]
