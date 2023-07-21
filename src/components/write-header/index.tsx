import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { LeftOutlined } from '@ant-design/icons'

import { HeaderWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const WriteHeader: FC<IProps> = () => {
  // 返回上一级目录
  const navigate = useNavigate()
  function handleBackClick() {
    navigate(-1)
  }

  return (
    <HeaderWrapper>
      <LeftOutlined onClick={handleBackClick} style={{ cursor: 'pointer' }} />
    </HeaderWrapper>
  )
}

export default memo(WriteHeader)
