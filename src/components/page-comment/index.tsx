import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Input, Button } from 'antd'
const { TextArea } = Input

import { CommentWrapper } from './style'

import AllComment from './c-cpns/all-comment'

interface IProps {
  children?: ReactNode
}

const PageComment: FC<IProps> = () => {
  return (
    <CommentWrapper>
      <h2 className="title">评论</h2>
      <div className="write">
        <TextArea showCount maxLength={200} autoSize={{ minRows: 2, maxRows: 6 }} />
        <div className="bottom">
          <Button className="btn" size="large" type="primary">
            发表评论
          </Button>
        </div>
      </div>
      <AllComment />
    </CommentWrapper>
  )
}

export default memo(PageComment)
