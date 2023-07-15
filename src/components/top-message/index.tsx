import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Carousel } from 'antd'

import { TopMessageWrapper } from './style'
import IconMessage from '@/assets/svg/home/icon-message'
import { shallowEqual, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const TopMessage: FC<IProps> = () => {
  // 从store获取数据
  const { currentColor, recordData } = useAppSelector(
    (state) => ({
      currentColor: state.main.currentColor,
      recordData: state.main.recordData
    }),
    shallowEqual
  )

  return (
    <TopMessageWrapper>
      <div className="icon">
        <IconMessage currentColor={currentColor} />
      </div>

      {recordData && (
        <Carousel dots={false} dotPosition="left" autoplay>
          <div className="text">Hello,欢迎来到我的博客</div>
          {recordData.map((item) => {
            return (
              <div className="text" key={item.id}>
                {item.content}
              </div>
            )
          })}
        </Carousel>
      )}

      <div className="icon">
        <IconMessage currentColor={currentColor} />
      </div>
    </TopMessageWrapper>
  )
}

export default memo(TopMessage)
