import React, { Suspense, memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useRoutes } from 'react-router-dom'

import { MainWrapper } from './style'
import routes from '@/router'
import TopMessage from '../../components/top-message'
import CardInfo from '../../components/card-info'

interface IProps {
  children?: ReactNode
}

const Main: FC<IProps> = () => {
  return (
    <MainWrapper className="wrap-v1">
      <TopMessage />
      <div className="page">
        <Suspense fallback="">{useRoutes(routes)}</Suspense>
      </div>
    </MainWrapper>
  )
}

export default memo(Main)
