import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Carousel } from 'antd'
import { TagFilled } from '@ant-design/icons'

import { TopMessageWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const TopMessage: FC<IProps> = () => {
  return (
    <TopMessageWrapper>
      <TagFilled style={{ fontSize: '20px', color: 'green' }} />

      <Carousel dots={false} dotPosition="left" autoplay>
        <div className="text">Hello,欢迎来到我的博客</div>
        <div className="text">Hello,欢迎来到我的博客</div>
      </Carousel>
    </TopMessageWrapper>
  )
}

export default memo(TopMessage)
