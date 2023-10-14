import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { CardWrapper } from './style'
import weChatImg from '@/assets/img/home/weChat.jpg'

interface IProps {
  children?: ReactNode
}

const InfoCardV2: FC<IProps> = () => {
  return (
    <CardWrapper>
      <div className="left">
        <img src={weChatImg} alt="" />
      </div>
      <div className="right">
        <div className="top">打开微信扫一扫</div>
        <div className="bottom">Anonymous</div>
      </div>
    </CardWrapper>
  )
}

export default memo(InfoCardV2)
