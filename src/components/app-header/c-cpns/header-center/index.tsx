import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { HomeFilled, ReadFilled } from '@ant-design/icons'

import { CenterWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const HeaderCenter: FC<IProps> = () => {
  return (
    <CenterWrapper>
      <NavLink to="/main/home">
        <HomeFilled />
        <span className="text">主页</span>
      </NavLink>
      <NavLink to="/main/blogs">
        <ReadFilled />
        <span className="text">博客</span>
      </NavLink>
    </CenterWrapper>
  )
}

export default memo(HeaderCenter)
