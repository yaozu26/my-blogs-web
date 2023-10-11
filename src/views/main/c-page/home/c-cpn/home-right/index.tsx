import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { RightWrapper } from './style'
import InfoCard from '@/components/info-card'

interface IProps {
  children?: ReactNode
}

const HomeRight: FC<IProps> = () => {
  return (
    <RightWrapper>
      <InfoCard />
    </RightWrapper>
  )
}

export default memo(HomeRight)
