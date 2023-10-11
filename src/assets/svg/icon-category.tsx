import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const IconCategory: FC<IProps> = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
    >
      <path
        d="M725.290667 725.290667m-213.333334 0a213.333333 213.333333 0 1 0 426.666667 0 213.333333 213.333333 0 1 0-426.666667 0Z"
        fill="#444"
      ></path>
      <path
        d="M789.205333 234.794667m-149.333333 0a149.333333 149.333333 0 1 0 298.666667 0 149.333333 149.333333 0 1 0-298.666667 0Z"
        fill="#444"
      ></path>
      <path
        d="M235.861333 788.138667m-149.333333 0a149.333333 149.333333 0 1 0 298.666667 0 149.333333 149.333333 0 1 0-298.666667 0Z"
        fill="#444"
      ></path>
      <path
        d="M298.709333 298.709333m-213.333333 0a213.333333 213.333333 0 1 0 426.666667 0 213.333333 213.333333 0 1 0-426.666667 0Z"
        fill="#444"
      ></path>
    </svg>
  )
}

export default memo(IconCategory)
