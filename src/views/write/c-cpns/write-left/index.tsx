import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { LeftWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const WriteLeft: FC<IProps> = () => {
  return (
    <LeftWrapper>
      <div className="catlogue">目录</div>
      <div className="content"></div>
    </LeftWrapper>
  )
}

export default memo(WriteLeft)
