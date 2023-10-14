import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'

import { HomeWrapper } from './style'
import { useAppDispatch } from '@/store'
import { fetchProjectDataAction, fetchThemeDataAction } from '@/store/modules/home'
import HomeTop from './c-cpn/home-top'
import HomeLeft from './c-cpn/home-left'
import HomeRight from './c-cpn/home-right'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  // 派发事件
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchProjectDataAction())
    dispatch(fetchThemeDataAction())
  })

  return (
    <HomeWrapper>
      <HomeTop />
      <div className="content">
        <HomeLeft />
        <HomeRight />
      </div>
    </HomeWrapper>
  )
}

export default memo(Home)
