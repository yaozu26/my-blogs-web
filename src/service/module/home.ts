import hyRequest from '@/service'

// 获取项目列表
export const getProjectData = () => {
  return hyRequest.get({ url: '/project' })
}

// 获取theme列表
export const getThemeData = () => {
  return hyRequest.get({ url: '/theme/list' })
}
