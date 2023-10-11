import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { CardWrapper } from './style'
import { shallowEqual, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const InfoCard: FC<IProps> = () => {
  const { authData } = useAppSelector(
    (state) => ({
      authData: state.main.authData
    }),
    shallowEqual
  )

  return (
    <CardWrapper>
      <div className="avatar">
        <img src={authData.avatar_url} alt="" />
      </div>
      <div className="name">YaoZu</div>
      <div className="intro">学习，记录，分享</div>
      <div className="content">
        <a href="#" className="c-item">
          <span>项目</span>
          <span className="count">{authData.projectCount}</span>
        </a>
        <a href="#" className="c-item">
          <span>文章</span>
          <span className="count">{authData.articleCount}</span>
        </a>
        <a href="#" className="c-item">
          <span>标签</span>
          <span className="count">{authData.labelCount}</span>
        </a>
      </div>
    </CardWrapper>
  )
}

export default memo(InfoCard)
