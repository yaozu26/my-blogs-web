import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getRoleListData } from '@/service/module/user/role'
import type { DataType } from '@/types/user/role'
import { formatDate } from '@/utils/formatTime'

interface IRoleState {
  roleListData: DataType[]
}

const initialState: IRoleState = {
  roleListData: []
}

const roleSlicer = createSlice({
  name: 'role',
  initialState,
  reducers: {
    changeRoleListAction(state, { payload }) {
      state.roleListData = payload
    }
  }
})

export const { changeRoleListAction } = roleSlicer.actions
export default roleSlicer.reducer

// 获取角色列表
export const fetchRoleListAction = createAsyncThunk('roleList', async (arg, { dispatch }) => {
  const res = await getRoleListData()
  const data = []
  let index = 0
  for (const item of res.data) {
    index++
    data.push({
      key: item.name,
      index: index,
      id: item.id,
      name: item.name,
      nikename: item.nikename,
      tags: item.tags,
      des: item.des,
      createTime: formatDate(item.createAt),
      updateTime: formatDate(item.updateAt)
    })
  }
  dispatch(changeRoleListAction(data))
})
