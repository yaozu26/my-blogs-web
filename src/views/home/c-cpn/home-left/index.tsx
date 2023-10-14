import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { LeftWrapper } from './style'
import { shallowEqual, useAppSelector } from '@/store'
import ContriGraph from '@/components/contri-graph'
import ItemCardV1 from '@/components/item-card-v1'
import CategoryBar from '@/components/category-bar'

interface IProps {
  children?: ReactNode
}

const HomeLeft: FC<IProps> = () => {
  // 获取数据
  const { projectListData, themeListData } = useAppSelector(
    (state) => ({
      projectListData: state.home.projectListData,
      themeListData: state.home.themeListData
    }),
    shallowEqual
  )

  return (
    <LeftWrapper>
      <ContriGraph />
      <CategoryBar themeListData={themeListData} />
      <div className="p-content">
        {projectListData.map((item) => {
          return <ItemCardV1 key={item.id} itemData={item} />
        })}
      </div>
    </LeftWrapper>
  )
}

export default memo(HomeLeft)
