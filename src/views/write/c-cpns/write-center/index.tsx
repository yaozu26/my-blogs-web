import React, { memo, useState } from 'react'
import type { ChangeEvent, FC, ReactNode } from 'react'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'

import { CenterWrapper } from './style'
import { shallowEqual, useAppDispatch, useAppSelector } from '@/store'
import { changeContentAction, changeTitleAction } from '@/store/modules/write'

interface IProps {
  children?: ReactNode
}

const WriteCenter: FC<IProps> = () => {
  const [height, setHeight] = useState(26)

  // 从store获取数据
  const { title, content } = useAppSelector(
    (state) => ({
      title: state.write.title,
      content: state.write.content
    }),
    shallowEqual
  )

  const dispatch = useAppDispatch()

  // 处理标题输入的事件
  function handleTitleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(changeTitleAction(e.target.value))
  }

  // 处理内容输入的逻辑
  function handleContentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(changeContentAction(e.target.value))
  }

  // 处理键盘事件
  function handleKeyboard(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    switch (e.key) {
      case 'Enter':
        setHeight(height + 26)
        break
      case 'Backspace':
        if (height <= 26) return
        setHeight(height - 26)
        break
    }
  }

  return (
    <CenterWrapper height={height}>
      <div className="head-title">
        <textarea
          className="txtTitle title"
          value={title}
          placeholder="请输入文章标题（5～100个字）"
          autoFocus
          maxLength={100}
          onChange={(e) => handleTitleChange(e)}
        ></textarea>
      </div>

      <div className="content">
        <textarea
          className="txtTitle text"
          value={content}
          placeholder="请输入文本内容"
          onChange={(e) => handleContentChange(e)}
          onKeyDown={(e) => handleKeyboard(e)}
        ></textarea>
        <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
      </div>
    </CenterWrapper>
  )
}

export default memo(WriteCenter)
