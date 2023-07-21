import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { UserOutlined, UsbOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'

import { MenuWrapper } from './style'
import logoImg from '@/assets/img/user/logo.svg'

type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
  {
    key: '1',
    label: <Link to="/user/role">用户管理</Link>,
    icon: <UserOutlined />
  },
  {
    key: '2',
    label: <Link to="/user/product">项目管理</Link>,
    icon: <UsbOutlined />
  }
]

interface IProps {
  children?: ReactNode
  isCollapsed: boolean
}

const LeftMenu: FC<IProps> = (props) => {
  const { isCollapsed } = props

  return (
    <MenuWrapper style={{ width: isCollapsed ? '80px' : '210px' }}>
      <div className="logo">
        <img src={logoImg} className="icon" />
        <h2 className="title" style={{ display: isCollapsed ? 'none' : 'block' }}>
          博客后台管理系统
        </h2>
      </div>
      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        theme="dark"
        items={items}
        inlineCollapsed={isCollapsed}
      />
    </MenuWrapper>
  )
}

export default memo(LeftMenu)
