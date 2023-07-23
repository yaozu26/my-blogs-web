import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'

import { BottomWrapper } from './style'
import { useAppDispatch } from '@/store'
import {
  fetchClearDataAction,
  fetchIssueProductAction,
  fetchUpdateProductAction
} from '@/store/modules/write'
import { useLocation, useSearchParams } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const WriteBottom: FC<IProps> = () => {
  const [isIssue, setIsIssue] = useState(true)
  const location = useLocation()
  const [params] = useSearchParams()

  useEffect(() => {
    setIsIssue(location.state.isIssue)
    if (isIssue) {
      dispatch(fetchClearDataAction())
    }
  }, [isIssue])

  const dispatch = useAppDispatch()

  // 发布项目 | 更新项目
  function handleIssueClick() {
    if (isIssue) {
      dispatch(fetchIssueProductAction())
    } else {
      const id = params.get('id') || ''
      dispatch(fetchUpdateProductAction(id))
    }
  }

  return (
    <BottomWrapper>
      <div className="box">
        <div className="issue" onClick={handleIssueClick}>
          {isIssue ? '发布项目' : '更新项目'}
        </div>
      </div>
    </BottomWrapper>
  )
}

export default memo(WriteBottom)
