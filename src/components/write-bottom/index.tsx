import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { BottomWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const WriteBottom: FC<IProps> = () => {
  return (
    <BottomWrapper>
      <div className="box">
        <div className="issue">发布项目</div>
      </div>
    </BottomWrapper>
  )
}

export default memo(WriteBottom)
