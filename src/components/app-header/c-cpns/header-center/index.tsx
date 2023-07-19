import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

import { CenterWrapper } from './style'
import IconMainPage from '@/assets/svg/header/icon-main-page'
import IconBlog from '@/assets/svg/header/icon-blog'

interface IProps {
  children?: ReactNode
  currentColor: string
}

const HeaderCenter: FC<IProps> = (props) => {
  const { currentColor } = props

  return (
    <CenterWrapper>
      <NavLink to="/main/home">
        <IconMainPage currentColor={currentColor} />
        <span className="text">主页</span>
      </NavLink>
      <NavLink to="/main/blogs">
        <IconBlog currentColor={currentColor} />
        <span className="text">博客</span>
      </NavLink>
    </CenterWrapper>
  )
}

export default memo(HeaderCenter)
