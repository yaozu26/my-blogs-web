import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Tag } from 'antd'

import { ArticleItemWrapper } from './style'
import { formatTime } from '@/utils/formatTime'
import { useNavigate } from 'react-router-dom'

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
          {itemData.labels?.map((item: any) => {
            return (
              <Tag key={item.id} color="green">
                {item.name}
              </Tag>
            )
          })}
        </div>
      </div>
      <div className="title">{itemData.title}</div>
      <div className="desc">描述</div>
    </ArticleItemWrapper>
  )
}

export default memo(ArticleItem)
