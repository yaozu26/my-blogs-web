import React, { Suspense, memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useRoutes } from 'react-router-dom'

import { MainWrapper } from './style'
import routes from '@/router'
import { useAppDispatch } from '@/store'
import { fetchAuthDataAction, fetchRecordDataAction } from '@/store/modules/main/main'

interface IProps {
  children?: ReactNode
}

const Main: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAuthDataAction())
    dispatch(fetchRecordDataAction())
  }, [])

  return (
    <MainWrapper className="wrap-v1">
      <Suspense fallback="">{useRoutes(routes)}</Suspense>
    </MainWrapper>
  )
}

export default memo(Main)
