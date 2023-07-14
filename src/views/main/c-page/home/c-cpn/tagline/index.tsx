import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { TaglineWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Tagline: FC<IProps> = () => {
  return (
    <TaglineWrapper>
      <div className="hello">Hello</div>
      <div className="welcome">Welcome To My Blog</div>
    </TaglineWrapper>
  )
}

export default memo(Tagline)
