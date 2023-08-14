import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { ItemCommentWrapper } from './style'
import avatarImg from '@/assets/img/avatar.png'
import iconReply from '@/assets/svg/article/icon-reply.svg'
import { formatTime } from '@/utils/formatTime'

interface IProps {
  children?: ReactNode
  itemData: any
}

const ItemComment: FC<IProps> = (props) => {
  const { itemData } = props

  return (
    <ItemCommentWrapper>
      <div className="left">
        <img src={avatarImg} alt="" />
      </div>
      <div className="right">
        <div className="top">
          <span className="name">{itemData.userInfo.name}</span>
          <span className="time">{formatTime(itemData.updateAt)}</span>
        </div>

        <div className="content">{itemData.content}</div>
        <div className="action-box">
          <div className="replay">
            <img className="img" src={iconReply} alt="" />
            <span className="text">回复</span>
          </div>
        </div>
      </div>
    </ItemCommentWrapper>
  )
}

export default memo(ItemComment)
