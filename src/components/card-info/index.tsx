import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { CardInfoWrapper } from './style'
import { shallowEqual, useAppSelector } from '@/store'
import { getCurrentTime } from '@/utils/getCurrentData'

interface IProps {
  children?: ReactNode
}

const CardInfo: FC<IProps> = () => {
  const { authData } = useAppSelector(
    (state) => ({
      authData: state.main.authData
    }),
    shallowEqual
  )

  return (
    <CardInfoWrapper>
      <div className="header">
        <div className="head">
          <img src={authData.avatar_url} alt="" />
        </div>
        <div className="info">
          <div className="welcome">Hello,{getCurrentTime()}好，我是</div>
          <div className="name">{authData.nikename}</div>
        </div>
      </div>
      <div className="desc">
        <div className="presonality">{authData.des}</div>
        <div className="tags">好好吃饭🍣 好好睡觉💤 敲敲代码💻 谈谈恋爱💑</div>
        <div className="say">{authData.content}</div>
      </div>

      <a href="#" className="message">
        给我留言
      </a>
    </CardInfoWrapper>
  )
}

export default memo(CardInfo)
