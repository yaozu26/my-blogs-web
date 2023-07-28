import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Tag } from 'antd'
import { CalendarFilled } from '@ant-design/icons'

import { InfoWrapper } from './style'
import { formatTime } from '@/utils/formatTime'

interface IProps {
  children?: ReactNode
  theme: string
  labels: any[]
  title: string
  createTime: string
}

const PageInfo: FC<IProps> = (props) => {
  const { theme, labels, title, createTime } = props
  return (
    <InfoWrapper>
      <div className="cover">
        <div className="top">
          {theme && <div className="theme">{theme}</div>}
          <div className="tags">
            {labels?.map((item) => {
              return (
                <Tag key={item.id} color="cyan">
                  {item.name}
                </Tag>
              )
            })}
          </div>
        </div>
        <h1 className="title">{title}</h1>
        <div className="meta">
          <CalendarFilled className="icon" />
          <span className="text">更新于{formatTime(createTime)}</span>
        </div>
      </div>
    </InfoWrapper>
  )
}

export default memo(PageInfo)
