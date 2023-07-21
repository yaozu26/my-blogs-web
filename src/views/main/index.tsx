import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

import { MainWrapper } from './style'
import { useAppDispatch } from '@/store'
import { fetchAuthDataAction } from '@/store/modules/main/main'
import AppHeader from '@/components/app-header'

interface IProps {
  children?: ReactNode
}

const Main: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAuthDataAction())
  }, [])

  return (
    <MainWrapper className="wrap-v1">
      <AppHeader />
      <Outlet />
    </MainWrapper>
  )
}

export default memo(Main)
