import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const MoreTheme: FC<IProps> = () => {
  return <div>MoreTheme</div>
}

export default memo(MoreTheme)
