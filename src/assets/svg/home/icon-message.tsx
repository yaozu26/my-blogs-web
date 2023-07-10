import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  currentColor: string
}

const IconMessage: FC<IProps> = (props) => {
  const { currentColor } = props

  return (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
    >
      <path
        d="M509.8 98.2c-220.2 0-398.7 156.2-398.7 348.9 0 110.1 58.5 208.2 149.5 272.1v176.5l174.7-106c24.2 4 49 6.3 74.5 6.3 220.2 0 398.7-156.2 398.7-348.9 0.1-192.7-178.4-348.9-398.7-348.9z"
        fill={currentColor}
      ></path>
    </svg>
  )
}

export default memo(IconMessage)
