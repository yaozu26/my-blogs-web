import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { ArticleItemWrapper } from './style'
import { formatTime } from '@/utils/formatTime'
import { Navigate, useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  itemData: any
}

const ArticleItem: FC<IProps> = (props) => {
  const { itemData } = props

  // 处理路由跳转的逻辑
  const navigate = useNavigate()
  function handleNavigateClick() {
    navigate(`/article?id=${itemData.id}`)
  }

  return (
    <ArticleItemWrapper onClick={handleNavigateClick}>
      <div className="top">
        <span className="time">{formatTime(itemData.updateTime)}</span>
        <span className="line">|</span>
        <div className="tags">
          {itemData.labels?.map((item: any, index: number) => {
            return (
              <span key={item.id} className="item">
                <span className="name">{item.name}</span>
                {index < itemData.labels.length - 1 && <span className="dot">·</span>}
              </span>
            )
          })}
        </div>
      </div>
      <div className="title">{itemData.title}</div>
    </ArticleItemWrapper>
  )
}

export default memo(ArticleItem)
