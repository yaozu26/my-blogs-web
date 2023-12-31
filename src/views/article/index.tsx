import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'

import { ArticleWrapper } from './style'
import { shallowEqual, useAppDispatch, useAppSelector } from '@/store'
import { fetchArticleDetailAction } from '@/store/modules/article'
import PageInfor from '@/components/page-info'
import PageContent from '@/components/page-content'
import PageComment from '@/components/page-comment'

interface IProps {
  children?: ReactNode
}

const Article: FC<IProps> = () => {
  // 1、拿到url字符串
  const [params] = useSearchParams()
  const id = Number(params.get('id'))

  // 2、发起请求
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchArticleDetailAction(id))
  }, [])

  // 3、从store获取数据
  const { articleDetailData } = useAppSelector(
    (state) => ({
      articleDetailData: state.article.articleDetailData
    }),
    shallowEqual
  )

  return (
    <ArticleWrapper>
      <header>
        <PageInfor
          theme={articleDetailData.theme}
          labels={articleDetailData.labels}
          title={articleDetailData.title}
          createTime={articleDetailData.createAt}
        />
      </header>
      <main className="page-main">
        <PageContent content={articleDetailData.content} />
        <PageComment articleId={id} />
      </main>
    </ArticleWrapper>
  )
}

export default memo(Article)
