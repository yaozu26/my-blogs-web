import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { InfoWrapper } from './style'

interface IProps {
  children?: ReactNode
  theme: string
  labels: any[]
  title: string
}

const ProjectInfo: FC<IProps> = (props) => {
  const { theme, labels, title } = props

  return (
    <InfoWrapper>
      <div className="top">
        <div className="theme">{theme}</div>
        <div className="tags">
          {labels?.map((item) => {
            return <span key={item.id}># {item.name}</span>
          })}
        </div>
      </div>
      <h1 className="title">{title}</h1>
      <div className="meta">
        <span className="start">开始时间</span>
        <span className="update">更新时间</span>
        <span className="time">3秒前</span>
      </div>
    </InfoWrapper>
  )
}

export default memo(ProjectInfo)
