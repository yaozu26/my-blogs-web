import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Blogs: FC<IProps> = () => {
  return <div>Blogs</div>
}

export default memo(Blogs)
