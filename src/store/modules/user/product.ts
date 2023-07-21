import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { DataType } from '@/types/user/product'
import { getProductData } from '@/service/module/user/product'
import { formatDate } from '@/utils/formatTime'

interface IProductState {
  productListData: DataType[]
}

const initialState: IProductState = {
  productListData: []
}

const productSlicer = createSlice({
  name: 'product',
  initialState,
  reducers: {
    changeProductListAction(state, { payload }) {
      state.productListData = payload
    }
  }
})

export const { changeProductListAction } = productSlicer.actions
export default productSlicer.reducer

// 获取项目信息
export const fetchProductListAction = createAsyncThunk('productList', async (arg, { dispatch }) => {
  const res = await getProductData()
  const data = []
  let index = 0
  for (const item of res.data) {
    index++
    data.push({
      key: item.id,
      index: index,
      id: item.id,
      title: item.title,
      createTime: formatDate(item.createAt),
      updateTime: formatDate(item.updateAt),
      labels: item.labels
    })
  }
  dispatch(changeProductListAction(data))
})
