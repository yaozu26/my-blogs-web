import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

import { TopNavWrapper } from './style'

interface IProps {
  children?: ReactNode
  getIsCollapsed: (arg: boolean) => void
  isCollapsed: boolean
}

const TopNav: FC<IProps> = (props) => {
  const { getIsCollapsed, isCollapsed } = props

  // 折叠菜单
  const handleIsCollapsed = () => {
    getIsCollapsed(!isCollapsed)
  }

  return (
    <TopNavWrapper>
      <div className="collapsed" onClick={handleIsCollapsed}>
        {!isCollapsed ? (
          <MenuFoldOutlined style={{ fontSize: '24px', color: '#000' }} />
        ) : (
          <MenuUnfoldOutlined style={{ fontSize: '24px', color: '#000' }} />
        )}
      </div>
    </TopNavWrapper>
  )
}

export default memo(TopNav)
