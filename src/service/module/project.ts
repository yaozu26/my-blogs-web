import hyRequest from '..'

// 获取项目详情
export const getProjectDetail = (id: number) => {
  return hyRequest.get({
    url: `/project/${id}`
  })
}

// 查询项目的theme个数
export const getProjectThemeCount = (theme: string) => {
  return hyRequest.get({
    url: '/theme/count',
    data: theme
  })
}
