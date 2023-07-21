import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { TopWrapper } from './style'
import BaseStyle from './c-cpns/base-style'

interface IProps {
  children?: ReactNode
}

const WriteTop: FC<IProps> = () => {
  return (
    <TopWrapper>
      <BaseStyle />
    </TopWrapper>
  )
}

export default memo(WriteTop)
