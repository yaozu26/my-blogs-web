import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

import { CardWrapper } from './style'
import coverImg from '@/assets/img/home/cover_project.jpg'
import { formatDate } from '@/utils/formatTime'

interface IProps {
  children?: ReactNode
  itemData: {
    labels: any[]
    updateTime: string
    createTime: string
    title: string
    id: number
    theme: string
  }
}

const ItemCardV1: FC<IProps> = (props) => {
  const { itemData } = props

  // 路由跳转
  const Navigate = useNavigate()
  function handleNavigateClick() {
    Navigate(`/project?id=${itemData.id}`)
  }

  return (
    <CardWrapper onClick={handleNavigateClick}>
      <div className="theme">{itemData.theme}</div>
      <div className="cover">
        <img src={coverImg} alt="" />
      </div>
      <div className="info">
        <div className="title">{itemData.title}</div>
        <div className="time">
          <span>发表于{formatDate(itemData.createTime)}</span>
          <span>|</span>
          <span>更新于{formatDate(itemData.updateTime)}</span>
        </div>
        <div className="tags">
          {itemData.labels?.map((item) => {
            return (
              <span key={item.id} className="tag">
                <span className="i">#</span>
                <span>{item.name}</span>
              </span>
            )
          })}
        </div>
      </div>
    </CardWrapper>
  )
}

export default memo(ItemCardV1)
