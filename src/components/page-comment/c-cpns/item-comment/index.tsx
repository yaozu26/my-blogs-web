import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'

import { ItemCommentWrapper } from './style'
import avatarImg from '@/assets/img/avatar.png'
import { USER_ID } from '@/global/constants'
import { formatTime } from '@/utils/formatTime'
import IconReplay from '@/assets/svg/article/icon-replay'
import WriteComment from '../write-comment'
import { useAppDispatch } from '@/store'
import { fetchDeleteCommentAction } from '@/store/modules/article'

interface IProps {
  children?: ReactNode
  itemData: any
  articleId: number
  commentId?: number
}

const ItemComment: FC<IProps> = (props) => {
  const { itemData, articleId, commentId } = props

  const [isReply, setIsReply] = useState(false)
  const [isCover, setIsCover] = useState(false)

  // 从浏览器会话获取数据
  const userId = localStorage.getItem(USER_ID)

  const dispatch = useAppDispatch()

  // 回复评论事件
  function handleReplyClick() {
    setIsReply(true)
    setIsCover(true)
  }

  // 隐藏回复框事件
  function handleHideClick() {
    setIsReply(false)
    setIsCover(false)
  }

  // 删除评论事件
  function handleDelClick() {
    dispatch(fetchDeleteCommentAction({ id: itemData.id, articleId }))
  }

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
          <span className="reply" onClick={handleReplyClick}>
            <IconReplay />
            <span className="text">回复</span>
          </span>

          {userId == itemData.user_id && (
            <span className="delete" onClick={handleDelClick}>
              删除
            </span>
          )}
        </div>

        {/* 回复评论 */}
        {isReply && (
          <div className="active-box">
            <WriteComment articleId={articleId} commentId={commentId} parentId={itemData.user_id} />
          </div>
        )}

        {isCover && <div className="cover" onClick={handleHideClick}></div>}
      </div>
    </ItemCommentWrapper>
  )
}

export default memo(ItemComment)
