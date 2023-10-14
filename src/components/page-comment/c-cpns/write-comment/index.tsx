import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Input, Button } from 'antd'
const { TextArea } = Input

import { WriteCommentWrapper } from './style'
import { shallowEqual, useAppDispatch, useAppSelector } from '@/store'
import { fetchCreateCommentAction } from '@/store/modules/article'

interface IProps {
  children?: ReactNode
  articleId: number
  commentId?: number
  parentId?: number
}

const WriteComment: FC<IProps> = (props) => {
  const { articleId, commentId, parentId } = props
  const [content, setContent] = useState<string>('')

  // 从store中获取数据
  const { token } = useAppSelector(
    (state) => ({
      token: state.login.token
    }),
    shallowEqual
  )

  const dispatch = useAppDispatch()

  // 写评论事件
  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setContent(e.target.value)
  }

  // 发表评论
  function handleBtnClick() {
    if (commentId && parentId) {
      dispatch(fetchCreateCommentAction({ content, articleId, commentId, parentId }))
    } else {
      dispatch(fetchCreateCommentAction({ content, articleId, commentId: 0, parentId: 0 }))
    }
    setContent('')
  }

  return (
    <WriteCommentWrapper>
      <TextArea
        value={content}
        showCount
        maxLength={200}
        autoSize={{ minRows: 2, maxRows: 6 }}
        onChange={handleChange}
        placeholder={token ? '请输入评论' : '登录帐号才能发表评论~'}
      />

      <div className="bottom">
        <Button className="btn" size="large" type="primary" onClick={handleBtnClick}>
          发表评论
        </Button>
      </div>
    </WriteCommentWrapper>
  )
}

export default memo(WriteComment)
