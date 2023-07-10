import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const IconEmail: FC<IProps> = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
    >
      <path
        d="M512 62.584C263.8 62.584 62.584 263.8 62.584 512S263.8 961.416 512 961.416 961.416 760.2 961.416 512 760.2 62.584 512 62.584z m232.022 584.767c0 24.81-20.876 45.112-46.4 45.112H326.377c-25.523 0-46.4-20.301-46.4-45.112l0.213-222.877 226.25 119.983a11.907 11.907 0 0 0 11.12 0l226.462-120.096v222.99z m-231.91-145.259L280.216 376.237c0.225-24.624 20.788-44.7 46.162-44.7h371.246c25.336 0 46.1 20.001 46.4 44.575l-231.91 125.98z"
        fill="#2c2c2c"
      ></path>
    </svg>
  )
}

export default memo(IconEmail)
