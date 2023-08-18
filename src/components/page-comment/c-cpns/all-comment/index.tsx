import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { AllCommentWrapper } from './style'
import { shallowEqual, useAppSelector } from '@/store'
import ChildComment from '../child-comment'
import ItemComment from '../item-comment'

interface IProps {
  children?: ReactNode
  articleId: number
}

const AllComment: FC<IProps> = (props) => {
  const { articleId } = props

  const { commentsDataList } = useAppSelector(
    (state) => ({
      commentsDataList: state.article.commentsDataList
    }),
    shallowEqual
  )

  return (
    <AllCommentWrapper>
      <h3 className="title">全部评论</h3>

      {commentsDataList.map((item) => {
        return (
          <div key={item.id} className="item">
            <ItemComment itemData={item} articleId={articleId} commentId={item.id} />

            <div className="child-wrap">
              {item.children.length !== 0 && (
                <ChildComment childData={item.children} articleId={articleId} commentId={item.id} />
              )}
            </div>
          </div>
        )
      })}
    </AllCommentWrapper>
  )
}

export default memo(AllComment)
