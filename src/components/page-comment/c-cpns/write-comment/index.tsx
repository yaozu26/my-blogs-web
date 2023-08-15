import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Input, Button } from 'antd'
const { TextArea } = Input

import { WriteCommentWrapper } from './style'
import avatarImg from '@/assets/img/avatar.png'
import { useAppDispatch } from '@/store'
import { fetchCreateCommentAction } from '@/store/modules/article'

interface IProps {
  children?: ReactNode
  articleId: number
}

const WriteComment: FC<IProps> = (props) => {
  const { articleId } = props

  const [content, setContent] = useState<string>('')
  const dispatch = useAppDispatch()

  // 写评论事件
  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setContent(e.target.value)
  }

  // 发表评论
  function handleBtnClick() {
    dispatch(fetchCreateCommentAction({ content, articleId, commentId: 0 }))
    setContent('')
  }

  return (
    <WriteCommentWrapper>
      <div className="left">
        <img src={avatarImg} alt="" />
      </div>
      <div className="right">
        <TextArea
          value={content}
          showCount
          maxLength={200}
          autoSize={{ minRows: 2, maxRows: 6 }}
          onChange={handleChange}
        />
        <div className="bottom">
          <Button className="btn" size="large" type="primary" onClick={handleBtnClick}>
            发表评论
          </Button>
        </div>
      </div>
    </WriteCommentWrapper>
  )
}

export default memo(WriteComment)
