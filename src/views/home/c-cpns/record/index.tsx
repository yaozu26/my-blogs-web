import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { RecordWrapper } from './style'
import IconMessage from '@/assets/svg/home/icon-message'
import { shallowEqual, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const Record: FC<IProps> = () => {
  // 从store获取数据
  const { currentColor } = useAppSelector(
    (state) => ({
      currentColor: state.main.currentColor
    }),
    shallowEqual
  )

  return (
    <RecordWrapper>
      <div className="icon">
        <IconMessage currentColor={currentColor} />
      </div>
      <div className="text">人既不能影响他人，也不会接收他人的影响</div>
      <div className="icon">
        <IconMessage currentColor={currentColor} />
      </div>
    </RecordWrapper>
  )
}

export default memo(Record)
