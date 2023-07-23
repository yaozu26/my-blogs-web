import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Input } from 'antd'

import { ThemeWrapper } from './style'
import { shallowEqual, useAppDispatch, useAppSelector } from '@/store'
import { changeThemeAction } from '@/store/modules/write'

interface IProps {
  children?: ReactNode
}

const MoreTheme: FC<IProps> = () => {
  const { theme } = useAppSelector(
    (state) => ({
      theme: state.write.theme
    }),
    shallowEqual
  )

  const dispatch = useAppDispatch()

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(changeThemeAction(e.target.value))
  }

  return (
    <ThemeWrapper>
      <div className="text">文章主题</div>
      <Input
        showCount
        maxLength={10}
        value={theme}
        style={{ width: '300px' }}
        placeholder="输入的字符不能超过10个"
        onChange={(e) => handleInputChange(e)}
      />
    </ThemeWrapper>
  )
}

export default memo(MoreTheme)
