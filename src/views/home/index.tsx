import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { HomeWrapper } from './style'
import Record from './c-cpns/record'
import Tagline from './c-cpns/tagline'
import CardInfo from './c-cpns/card-info'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  return (
    <HomeWrapper>
      <div className="wrap-v1">
        <Record />
        <div className="content">
          <div className="left">
            <Tagline />
          </div>
          <div className="right">
            <CardInfo />
          </div>
        </div>
      </div>
    </HomeWrapper>
  )
}

export default memo(Home)
