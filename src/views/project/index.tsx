import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { ProjectWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Project: FC<IProps> = () => {
  return <ProjectWrapper></ProjectWrapper>
}

export default memo(Project)
