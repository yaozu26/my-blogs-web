import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Record: FC<IProps> = () => {
  return <div>Record</div>
}

export default memo(Record)
