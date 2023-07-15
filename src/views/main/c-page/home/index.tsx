import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'

import { HomeWrapper } from './style'
import Tagline from './c-cpn/tagline'
import CardInfo from '@/components/card-info'
import { useAppDispatch } from '@/store'
import { fetchProjectDataAction } from '@/store/modules/main/home'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchProjectDataAction())
  }, [])

  return (
    <HomeWrapper>
      <div className="content">
        <div className="left">
          <Tagline />
        </div>
        <div className="right">
          <CardInfo />
        </div>
      </div>
    </HomeWrapper>
  )
}

export default memo(Home)
