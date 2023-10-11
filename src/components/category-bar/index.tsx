import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { CategoryWrapper } from './style'
import IconCategory from '@/assets/svg/icon-category'

interface IProps {
  children?: ReactNode
}

const CategoryBar: FC<IProps> = () => {
  return (
    <CategoryWrapper>
      <div className="left">
        <IconCategory />
        <div className="theme-list">
          <div className="item">前端开发</div>
          <div className="item">后端开发</div>
        </div>
      </div>
    </CategoryWrapper>
  )
}

export default memo(CategoryBar)
