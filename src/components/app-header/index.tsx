import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

import { HeaderWrapper, LeftWrapper, RightWrapper } from './style'
import headerTitle from '@/assets/data/header-title.json'
import { shallowEqual, useAppDispatch, useAppSelector } from '@/store'
import { changeThemeModeAction, fetchThemeColorAction } from '@/store/modules/main/main'
import SwitchSun from '@/assets/svg/header/switch-sun'
import SwitchMoon from '@/assets/svg/header/switch-moon'
import IconGithub from '@/assets/svg/header/icon-github'
import Login from './c-cpns/login'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  // 从store获取数据
  const dispatch = useAppDispatch()
  const { themeMode, currentColor } = useAppSelector(
    (state) => ({
      themeMode: state.main.themeMode,
      currentColor: state.main.currentColor
    }),
    shallowEqual
  )

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

  return (
    <HeaderWrapper>
      <LeftWrapper>
        <a href="#" className="logo">
          yaozu
        </a>
      </LeftWrapper>

      <RightWrapper mode={themeMode}>
        <div className="titles">
          {headerTitle.map((item) => (
            <NavLink
              to={item.link}
              key={item.link}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.title}
            </NavLink>
          ))}
        </div>

        <div className="appearance">
          <a href="#" className="switch" onClick={handleChangeThemeClick}>
            <span className="icon">{themeMode === 'sun' ? <SwitchSun /> : <SwitchMoon />}</span>
          </a>
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
        <Login />
      </RightWrapper>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
