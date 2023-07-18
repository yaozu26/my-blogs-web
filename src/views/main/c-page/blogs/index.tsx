import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'

import { BlogsWrapper } from './style'
import { useAppDispatch } from '@/store'
import { fetchArticleListAction } from '@/store/modules/main/blogs'
import ArticleList from './c-cpns/article-list'

interface IProps {
  children?: ReactNode
}

const Blogs: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchArticleListAction({ limit: 10, offset: 0 }))
  }, [])

  return (
    <BlogsWrapper>
      <ArticleList />
    </BlogsWrapper>
  )
}

export default memo(Blogs)
