import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { CardInfoWrapper } from './style'
import avatarImg from '@/assets/img/home/avatar.jpg'
import IconEmail from '@/assets/svg/home/icon-email'

interface IProps {
  children?: ReactNode
}

const CardInfo: FC<IProps> = () => {
  return (
    <CardInfoWrapper>
      <div className="header">
        <a href="#" className="head">
          <img src={avatarImg} alt="" />
        </a>
        <div className="info">
          <div className="welcome">Hello,早上好，我是</div>
          <div className="name">耀祖</div>
        </div>
      </div>
      <div className="desc">
        <div className="presonality">其实我的愿望是世界和平</div>
        <div className="tags">好好吃饭🍣 好好睡觉💤 敲敲代码💻 谈谈恋爱💑</div>
        <div className="say">还不知道说什么</div>
      </div>
      <div className="about-me">
        <a href="#" className="email" title="e-mail">
          <IconEmail />
        </a>
        <a href="#" className="know">
          <span className="text">了解更多</span>
        </a>
      </div>
      <a href="#" className="message">
        给我留言
      </a>
    </CardInfoWrapper>
  )
}

export default memo(CardInfo)
