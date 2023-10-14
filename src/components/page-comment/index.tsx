import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { CommentWrapper } from './style'
import avatarImg from '@/assets/img/avatar.png'
import WriteComment from './c-cpns/write-comment'
import AllComment from './c-cpns/all-comment'

interface IProps {
  children?: ReactNode
  articleId: number
}

const PageComment: FC<IProps> = (props) => {
  const { articleId } = props

  return (
    <CommentWrapper>
      <h2 className="title">评论</h2>

      {/* 发表评论 */}
      <div className="write">
        <div className="left">
          <img src={avatarImg} alt="" />
        </div>
        <WriteComment articleId={articleId} />
      </div>

      {/* 全部评论 */}
      <AllComment articleId={articleId} />
    </CommentWrapper>
  )
}

export default memo(PageComment)
