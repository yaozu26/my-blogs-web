import hyRequest from '@/service'

// 货物项目列表
export const getProjectData = () => {
  return hyRequest.get({ url: 'project' })
}
