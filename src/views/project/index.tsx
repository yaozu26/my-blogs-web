import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { ProjectWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Project: FC<IProps> = () => {
  return (
    <ProjectWrapper>
      <div className="wrap-v1">p</div>
    </ProjectWrapper>
  )
}

export default memo(Project)
