import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { WriteWrapper } from './style'
import WriteHeader from '@/components/write-header'
import WriteTop from '@/components/write-top'
import WriteLeft from './c-cpns/write-left'
import WriteCenter from './c-cpns/write-center'

interface IProps {
  children?: ReactNode
}

const Write: FC<IProps> = () => {
  return (
    <WriteWrapper>
      <WriteHeader />
      <WriteTop />
      <WriteLeft />
      <WriteCenter />
    </WriteWrapper>
  )
}

export default memo(Write)
