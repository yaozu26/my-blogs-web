import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

import { UserWrapper } from './style'
import LeftMenu from './c-cpns/left-menu'
import TopNav from './c-cpns/top-nav'

interface IProps {
  children?: ReactNode
}

const User: FC<IProps> = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const getChildIsCollapsed = (collapsed: boolean) => {
    setIsCollapsed(collapsed)
  }

  return (
    <UserWrapper>
      <div className="left">
        <LeftMenu isCollapsed={isCollapsed} />
      </div>

      <div className="right">
        <div className="top">
          <TopNav getIsCollapsed={getChildIsCollapsed} isCollapsed={isCollapsed} />
        </div>

        <div className="content">
          <Outlet />
        </div>
      </div>
    </UserWrapper>
  )
}

export default memo(User)
