import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const IconHeadline: FC<IProps> = () => {
  return (
    <svg
      width="16px"
      height="16px"
      viewBox="0 0 16 16"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon_h备份" stroke="none" fill="none" fillRule="evenodd">
        <g id="icon_h">
          <rect id="Rectangle-4" x="0" y="0" width="16" height="16"></rect>
          <path
            d="M12,0 C12.5128358,0 12.9355072,0.38604019 12.9932723,0.883378875 L13,1 L13,15 C13,15.5522847 12.5522847,16 12,16 C11.4871642,16 11.0644928,15.6139598 11.0067277,15.1166211 L11,15 L11,9 L5,9 L5,15 C5,15.5522847 4.55228475,16 4,16 C3.48716416,16 3.06449284,15.6139598 3.00672773,15.1166211 L3,15 L3,1 C3,0.44771525 3.44771525,0 4,0 C4.51283584,0 4.93550716,0.38604019 4.99327227,0.883378875 L5,1 L5,7 L11,7 L11,1 C11,0.44771525 11.4477153,0 12,0 Z"
            id="路径"
            fill="#555666"
            fillRule="nonzero"
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default memo(IconHeadline)
