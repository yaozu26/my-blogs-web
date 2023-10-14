import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { RightWrapper } from './style'
import InfoCardV1 from '@/components/info-card-v1'
import InfoCardV2 from '@/components/info-card-v2'

interface IProps {
  children?: ReactNode
}

const HomeRight: FC<IProps> = () => {
  return (
    <RightWrapper>
      <InfoCardV1 />
      <InfoCardV2 />
    </RightWrapper>
  )
}

export default memo(HomeRight)
