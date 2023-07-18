import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Article: FC<IProps> = () => {
  return <div>Article</div>
}

export default memo(Article)
