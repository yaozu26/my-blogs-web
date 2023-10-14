import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import classNames from 'classnames'

import { CategoryWrapper } from './style'
import IconCategory from '@/assets/svg/icon-category'

interface IProps {
  children?: ReactNode
  themeListData: any[]
}

const CategoryBar: FC<IProps> = (props) => {
  const { themeListData } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  // 处理点击事件
  const handleItemClick = (index: number) => {
    setCurrentIndex(index)
  }
  return (
    <CategoryWrapper>
      <div className="left">
        <IconCategory />
        <div className="theme-list">
          {themeListData.map((item, index) => {
            return (
              <div
                className={classNames({ active: currentIndex === index }, 'item')}
                key={item.id}
                onClick={() => handleItemClick(index)}
              >
                {item.name}
              </div>
            )
          })}
        </div>
      </div>
    </CategoryWrapper>
  )
}

export default memo(CategoryBar)
