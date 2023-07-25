import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { HeaderWrapper } from './style'

import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { shallowEqual, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  const { username } = useAppSelector(
    (state) => ({
      username: state.login.username
    }),
    shallowEqual
  )

  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight username={username} />
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
