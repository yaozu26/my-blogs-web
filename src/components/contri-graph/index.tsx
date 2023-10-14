import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Graph } from 'react-github-contribution-graph'
import { Skeleton } from 'antd'

import { GraphWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const ContriGraph: FC<IProps> = () => {
  const TOKEN =
    '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'
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
