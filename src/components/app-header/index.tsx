import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { HeaderWrapper } from './style'

import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderRight />
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
