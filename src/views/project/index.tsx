import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'

import { ProjectWrapper } from './style'
import { shallowEqual, useAppDispatch, useAppSelector } from '@/store'
import { fetchProjectDetailAction } from '@/store/modules/project'
import PageInfo from '@/components/page-info'
import PageContent from '@/components/page-content'

interface IProps {
  children?: ReactNode
}

const Project: FC<IProps> = () => {
  // 1、拿到url字符
  const [params] = useSearchParams()
  const id = Number(params.get('id'))

  // 2、发起请求
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchProjectDetailAction(id))
  }, [])

  // 3、从store获取数据
  const { projectDetailData } = useAppSelector(
    (state) => ({
      projectDetailData: state.project.projctDetailData
    }),
    shallowEqual
  )

  return (
    <ProjectWrapper>
      <PageInfo
        theme={projectDetailData.theme}
        labels={projectDetailData.labels}
        title={projectDetailData.title}
        createTime={projectDetailData.createAt}
      />
      <PageContent content={projectDetailData.content} />
    </ProjectWrapper>
  )
}

export default memo(Project)
