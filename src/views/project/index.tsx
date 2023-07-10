import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Project: FC<IProps> = () => {
  return <div>Project</div>
}

export default memo(Project)
