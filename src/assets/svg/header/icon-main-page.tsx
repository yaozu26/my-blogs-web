import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  currentColor: string
}

const IconMainPage: FC<IProps> = (props) => {
  const { currentColor } = props

  return (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
    >
      <path
        d="M854.4 553.6l-300.8-256c-22.4-22.4-64-22.4-86.4 0l-300.8 256v-102.4l304-268.8c22.4-22.4 57.6-22.4 80 0l304 268.8v102.4z m-86.4 0v256c0 35.2-35.2 41.6-70.4 41.6h-102.4v-86.4c0-16-25.6-41.6-41.6-41.6h-86.4c-16 0-41.6 25.6-41.6 41.6v86.4h-102.4c-35.2 0-70.4-9.6-70.4-41.6v-256l256-214.4 259.2 214.4z"
        fill={currentColor}
      ></path>
    </svg>
  )
}

export default memo(IconMainPage)
