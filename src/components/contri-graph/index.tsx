import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { Graph } from 'react-github-contribution-graph'
import { Skeleton } from 'antd'

import { GraphWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const ContriGraph: FC<IProps> = () => {
  const TOKEN = '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'
  const username = 'yaozu26'
  const theme = 'light'

  return (
    <GraphWrapper>
      <Skeleton loading={false}>
        <Graph token={TOKEN} username={username} theme={theme} />
      </Skeleton>
      <div className="desc">
        <span className="text1">数据来源</span>
        <span className="text2">github</span>
      </div>
    </GraphWrapper>
  )
}

export default memo(ContriGraph)
