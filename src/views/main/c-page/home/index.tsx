import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'

import { HomeWrapper } from './style'
import CardInfo from '@/components/card-info'
import ProjectItem from './c-cpn/project-item'
import TopMessage from '@/components/top-message'
import { shallowEqual, useAppDispatch, useAppSelector } from '@/store'
import { fetchProjectDataAction } from '@/store/modules/main/home'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchProjectDataAction())
  }, [])

  const { projectData } = useAppSelector(
    (state) => ({
      projectData: state.home.projectData
    }),
    shallowEqual
  )

  return (
    <HomeWrapper>
      <TopMessage />
      <div className="content">
        <div className="left">
          <div className="pro-wrap">
            {projectData.map((item) => {
              return <ProjectItem key={item.id} itemData={item} />
            })}
          </div>
        </div>
        <div className="right">
          <CardInfo />
        </div>
      </div>
    </HomeWrapper>
  )
}

export default memo(Home)
