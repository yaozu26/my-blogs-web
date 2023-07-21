import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { CenterWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const WriteCenter: FC<IProps> = () => {
  return (
    <CenterWrapper>
      <div className="head-title">
        <textarea
          id="txtTitle"
          placeholder="请输入文章标题（5～100个字）"
          autoFocus
          maxLength={100}
        ></textarea>
      </div>
      <div className="content"></div>
    </CenterWrapper>
  )
}

export default memo(WriteCenter)
