import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Space } from 'antd'
import type { MenuProps } from 'antd'

import { RightWrapper } from './style'
import { useAppDispatch } from '@/store'
import { changeThemeModeAction, fetchThemeColorAction } from '@/store/modules/main/main'
import { fetchExitLoginAction } from '@/store/modules/login/login'
import SwitchSun from '@/assets/svg/header/switch-sun'
import SwitchMoon from '@/assets/svg/header/switch-moon'
import IconGithub from '@/assets/svg/header/icon-github'

interface IProps {
  children?: ReactNode
  themeMode: string
  currentColor: string
  username: string
  id: number
}

const HeaderRight: FC<IProps> = (props) => {
  const { themeMode, currentColor, username, id } = props

  // 从store获取数据
  const dispatch = useAppDispatch()

  // 切换主题色的事件
  function handleChangeThemeClick() {
    switch (themeMode) {
      case 'sun':
        document.documentElement.setAttribute('class', 'dark')
        dispatch(changeThemeModeAction('moon'))
        break
      case 'moon':
        document.documentElement.removeAttribute('class')
        dispatch(changeThemeModeAction('sun'))
        break
    }
    dispatch(fetchThemeColorAction())
  }

  // 下拉框的逻辑
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <a onClick={handleExitClick}>退出登录</a>
    }
  ]
  useEffect(() => {
    if (id === 2) {
      items.push({
        key: '2',
        label: <Link to="/user">用户管理</Link>
      })
    }
  }, [id])

  // 退出登录
  function handleExitClick() {
    dispatch(fetchExitLoginAction())
  }

  return (
    <RightWrapper mode={themeMode}>
      <div className="appearance">
        <div className="switch" onClick={handleChangeThemeClick}>
          <span className="icon">{themeMode === 'sun' ? <SwitchSun /> : <SwitchMoon />}</span>
        </div>
      </div>

      <a
        href="https://github.com/yaozu26"
        rel="noreferrer"
        target="_blank"
        className="github"
        title="github"
      >
        <IconGithub currentColor={currentColor} />
      </a>

      {/* 用户 */}
      <div className="top-head">
        {username ? (
          <Dropdown menu={{ items }} arrow>
            <Space>{username}</Space>
          </Dropdown>
        ) : (
          <Link to="/login" className="login">
            登录
          </Link>
        )}
      </div>
    </RightWrapper>
  )
}

export default memo(HeaderRight)
