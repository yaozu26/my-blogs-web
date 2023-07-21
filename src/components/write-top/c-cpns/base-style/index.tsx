import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { CaretDownOutlined } from '@ant-design/icons'

import { BaseStyleWrapper } from './style'
import IconHeadline from '@/assets/svg/write/icon-headline'

interface IProps {
  children?: ReactNode
}

const BaseStyle: FC<IProps> = () => {
  return (
    <BaseStyleWrapper>
      <div className="headline">
        <div className="top">
          <IconHeadline />
          <CaretDownOutlined style={{ fontSize: '8px' }} />
        </div>
        <div className="text">标题</div>
      </div>
    </BaseStyleWrapper>
  )
}

export default memo(BaseStyle)
