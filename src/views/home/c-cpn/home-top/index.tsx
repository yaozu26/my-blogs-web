import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Carousel } from 'antd'
import { TagFilled } from '@ant-design/icons'

import { TopWrapper } from './style'
import { getCurrentTime } from '@/utils/getCurrentData'

interface IProps {
  children?: ReactNode
}

const HomeTop: FC<IProps> = () => {
  return (
    <TopWrapper>
      <TagFilled style={{ fontSize: '20px', color: 'green' }} />

      <Carousel dots={false} dotPosition="left" autoplay>
        <div className="text">Hello,{getCurrentTime()}好，我是YaoZu</div>
        <div className="text">欢迎来到我的博客</div>
      </Carousel>
    </TopWrapper>
  )
}

export default memo(HomeTop)
