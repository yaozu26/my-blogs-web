import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { LoginWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Login: FC<IProps> = () => {
  return (
    <LoginWrapper>
      <a href="#" className="btn">
        登录
      </a>
    </LoginWrapper>
  )
}

export default memo(Login)
