import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Pagination } from 'antd'
import type { PaginationProps } from 'antd'

import { ArticleWrapper } from './style'
import { shallowEqual, useAppDispatch, useAppSelector } from '@/store'
import ArticleItem from '../article-item'
import { fetchArticleListAction } from '@/store/modules/main/blogs'

interface IProps {
  children?: ReactNode
}

const ArticleList: FC<IProps> = () => {
  const { articleListData, totalCount } = useAppSelector(
    (state) => ({
      articleListData: state.blogs.articleListData,
      totalCount: state.blogs.totalCount
    }),
    shallowEqual
  )

  const dispatch = useAppDispatch()

  // 当前页数发生改变的逻辑
  const handleCurrentPageChange: PaginationProps['onChange'] = (page) => {
    dispatch(fetchArticleListAction({ limit: 20, offset: 20 * (page - 1) }))
  }

  return (
    <ArticleWrapper>
      <div className="article-list">
        {articleListData.map((item) => {
          return <ArticleItem key={item.id} itemData={item} />
        })}
      </div>

      <div className="pagination">
        <Pagination
          defaultCurrent={1}
          defaultPageSize={20}
          total={totalCount}
          onChange={handleCurrentPageChange}
          showSizeChanger={false}
        />
      </div>
    </ArticleWrapper>
  )
}

export default memo(ArticleList)
