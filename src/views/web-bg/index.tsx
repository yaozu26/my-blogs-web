import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { WebBgWrapper } from './style'
import { arr } from './data'
import Star from './c-cpns/star'

interface IProps {
  children?: ReactNode
}

const WebBg: FC<IProps> = () => {
  return (
    <WebBgWrapper>
      <div className="night">
        {arr.map((item, index) => (
          <Star key={index} itemData={item} />
        ))}
      </div>
    </WebBgWrapper>
  )
}

export default memo(WebBg)
