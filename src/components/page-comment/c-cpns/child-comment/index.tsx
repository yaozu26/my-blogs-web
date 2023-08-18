import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { ChildCommentWrapper } from './style'
import ItemComment from '../item-comment'

interface IProps {
  children?: ReactNode
  childData: any[]
  articleId: number
  commentId: number
}

const ChildComment: FC<IProps> = (props) => {
  const { childData, articleId, commentId } = props

  return (
    <ChildCommentWrapper>
      {childData.map((item) => (
        <div className="item" key={item.id}>
          <ItemComment itemData={item} articleId={articleId} commentId={commentId} />
        </div>
      ))}
    </ChildCommentWrapper>
  )
}

export default memo(ChildComment)
