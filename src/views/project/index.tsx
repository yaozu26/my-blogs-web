import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'

import { ProjectWrapper } from './style'
import { shallowEqual, useAppDispatch, useAppSelector } from '@/store'
import { fetchProjectDetailAction } from '@/store/modules/project'
import ProjectInfo from './c-cpns/project-info'
import ProjectContent from './c-cpns/project-content'

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
      <header className="page-header">
        <ProjectInfo
          theme={projectDetailData.theme}
          labels={projectDetailData.labels}
          title={projectDetailData.title}
        />
      </header>
      <main className="page-main wrap-v1">
        <ProjectContent content={projectDetailData.content} />
      </main>
    </ProjectWrapper>
  )
}

export default memo(Project)
