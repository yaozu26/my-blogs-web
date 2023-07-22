import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'

import { WriteWrapper } from './style'
import WriteHeader from '@/components/write-header'
import WriteTop from '@/components/write-top'
import WriteBottom from '@/components/write-bottom'
import WriteLeft from './c-cpns/write-left'
import WriteCenter from './c-cpns/write-center'
import WriteMore from './c-cpns/write-more'
import { useAppDispatch } from '@/store'
import { fetchLabelListAction } from '@/store/modules/main'

interface IProps {
  children?: ReactNode
}

const Write: FC<IProps> = () => {
  // 派发事件
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchLabelListAction())
  }, [])

  return (
    <WriteWrapper>
      <WriteHeader />
      <WriteTop />
      <WriteLeft />
      <div className="content">
        <WriteCenter />
        <WriteMore />
      </div>
      <WriteBottom />
    </WriteWrapper>
  )
}

export default memo(Write)
