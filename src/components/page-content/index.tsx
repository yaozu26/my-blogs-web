import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { ContentWrapper } from './style'
import '@/global/markdown.css'

interface IProps {
  children?: ReactNode
  content: string
}

const PageContent: FC<IProps> = (props) => {
  const { content } = props

  return (
    <ContentWrapper>
      <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
    </ContentWrapper>
  )
}

export default memo(PageContent)
