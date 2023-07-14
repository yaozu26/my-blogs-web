import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { LeftWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const HeaderLeft: FC<IProps> = () => {
  return (
    <LeftWrapper>
      <a href="#" className="logo">
        yaozu
      </a>
    </LeftWrapper>
  )
}

export default memo(HeaderLeft)
