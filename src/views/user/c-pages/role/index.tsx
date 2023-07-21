import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { Table } from 'antd'

import { RoleWrapper } from './style'
import { shallowEqual, useAppDispatch, useAppSelector } from '@/store'
import { fetchRoleListAction } from '@/store/modules/user/role'
import { columns } from './config'

interface IProps {
  children?: ReactNode
}

const Role: FC<IProps> = () => {
  // 派发事件
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRoleListAction())
  }, [])

  // 从store中获取数据
  const { roleListData } = useAppSelector(
    (state) => ({
      roleListData: state.role.roleListData
    }),
    shallowEqual
  )

  return (
    <RoleWrapper>
      <Table columns={columns} dataSource={roleListData} bordered />
    </RoleWrapper>
  )
}

export default memo(Role)
