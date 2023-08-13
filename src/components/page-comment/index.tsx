import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Input, Button } from 'antd'
const { TextArea } = Input

import { CommentWrapper } from './style'
import { shallowEqual, useAppSelector } from '@/store'
import iconReply from '@/assets/svg/article/icon-reply.svg'

interface IProps {
  children?: ReactNode
}

const PageComment: FC<IProps> = () => {
  const { commentsDataList } = useAppSelector(
    (state) => ({
      commentsDataList: state.article.commentsDataList
    }),
    shallowEqual
  )

  return (
    <CommentWrapper>
      <div className="head">
        <h2>评论</h2>
      </div>
      <div className="write">
        <TextArea showCount maxLength={200} autoSize={{ minRows: 2, maxRows: 6 }} />
        <div className="bottom">
          <Button className="btn" size="large" type="primary">
            发表评论
          </Button>
        </div>
      </div>
      <h3>全部评论</h3>
      <ul className="all-comments">
        {commentsDataList.map((item) => {
          return (
            <li key={item.id}>
              <div className="info">{item.userInfo.name}</div>
              <div className="content">{item.content}</div>
              <div className="action-box">
                <div className="replay">
                  <img src={iconReply} alt="" />
                  <span>回复</span>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </CommentWrapper>
  )
}

export default memo(PageComment)
