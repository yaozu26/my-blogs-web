import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { StarWrapper } from './style'
import type { ICoord } from '../../data'

interface IProps {
  children?: ReactNode
  itemData: ICoord
}

const Star: FC<IProps> = (props) => {
  const { itemData } = props

  return <StarWrapper coord={itemData}></StarWrapper>
}

export default memo(Star)
