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
  const { themeMode, currentColor, username } = useAppSelector(
    (state) => ({
      themeMode: state.main.themeMode,
      currentColor: state.main.currentColor,
      username: state.login.username,
      id: state.login.id
    }),
    shallowEqual
  )

  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter currentColor={currentColor} />
      <HeaderRight currentColor={currentColor} username={username} themeMode={themeMode} />
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
