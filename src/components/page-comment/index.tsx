import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { CommentWrapper } from './style'
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
      <WriteComment articleId={articleId} />
      <AllComment />
    </CommentWrapper>
  )
}

export default memo(PageComment)
