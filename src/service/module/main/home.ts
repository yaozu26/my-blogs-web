import hyRequest from '@/service'

// 获取项目列表
export const getProjectData = () => {
  return hyRequest.get({ url: 'project' })
}
