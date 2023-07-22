import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { MoreWrapper } from './style'
import MoreTags from '../more-tags'

interface IProps {
  children?: ReactNode
}

const WriteMore: FC<IProps> = () => {
  return (
    <MoreWrapper>
      <MoreTags />
    </MoreWrapper>
  )
}

export default memo(WriteMore)
