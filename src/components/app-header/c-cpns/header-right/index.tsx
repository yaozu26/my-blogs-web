import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Space } from 'antd'
import type { MenuProps } from 'antd'
import { GithubFilled } from '@ant-design/icons'

import { RightWrapper } from './style'
import { useAppDispatch } from '@/store'
import { fetchExitLoginAction } from '@/store/modules/login'

interface IProps {
  children?: ReactNode
  username: string
}

const HeaderRight: FC<IProps> = (props) => {
  const { username } = props

  // 从store获取数据
  const dispatch = useAppDispatch()

  // 下拉框的逻辑
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <a onClick={handleExitClick}>退出登录</a>
    }
  ]

  // 退出登录
  function handleExitClick() {
    dispatch(fetchExitLoginAction())
  }

  return (
    <RightWrapper>
      <a
        href="https://github.com/yaozu26"
        rel="noreferrer"
        target="_blank"
        className="github"
        title="github"
      >
        <GithubFilled style={{ fontSize: '20px' }} />
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
