import React, { memo, useState } from 'react'
import type { ChangeEvent, FC, ReactNode } from 'react'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'

import { CenterWrapper } from './style'
import { Button } from 'antd'
import { postProductRequest } from '@/service/module/user/product'

interface IProps {
  children?: ReactNode
}

const WriteCenter: FC<IProps> = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [height, setHeight] = useState(26)

  // 处理标题输入的事件
  function handleTitleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setTitle(e.target.value)
  }

  // 处理内容输入的逻辑
  function handleContentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setContent(e.target.value)
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

  // 发布项目
  function handleIssueProduct() {
    postProductRequest(title, '前端开发', ['Vue2', 'CSS'], content).then(() => {
      console.log('项目发布成功')
    })
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

      <Button type="primary" onClick={handleIssueProduct}>
        发布项目
      </Button>
    </CenterWrapper>
  )
}

export default memo(WriteCenter)
