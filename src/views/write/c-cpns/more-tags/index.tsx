import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Modal, Tag } from 'antd'
const { CheckableTag } = Tag

import { TagsWrapper } from './style'
import { shallowEqual, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const MoreTags: FC<IProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // 从store中获取数据
  const { labelListData } = useAppSelector(
    (state) => ({
      labelListData: state.main.labelListData
    }),
    shallowEqual
  )

  // 添加标签事件
  function handleAddLabelsClick() {
    setIsModalOpen(true)
  }

  // 取消添加标签事件
  function handleCancel() {
    setIsModalOpen(false)
  }

  // 确定添加标签事件
  function handleOk() {
    setIsModalOpen(false)
  }

  // 处理标签选中事件
  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag)
    setSelectedTags(nextSelectedTags)
  }
  return (
    <TagsWrapper>
      <div className="text">文章标签</div>
      {selectedTags.map((item) => (
        <Tag color="green" key={item}>
          {item}
        </Tag>
      ))}
      <div className="add" onClick={handleAddLabelsClick}>
        + 添加文章标签
      </div>
      <Modal title="标签" open={isModalOpen} onCancel={handleCancel} onOk={handleOk}>
        {labelListData.map((item) => {
          return (
            <CheckableTag
              checked={selectedTags.includes(item.name)}
              style={{ marginBottom: '4px' }}
              onChange={(checked) => handleChange(item.name, checked)}
              key={item.id}
            >
              {item.name}
            </CheckableTag>
          )
        })}
      </Modal>
    </TagsWrapper>
  )
}

export default memo(MoreTags)
