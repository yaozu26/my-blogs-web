import hyRequest from '@/service'

// 获取所有角色的所有信息
export const getRoleListData = () => {
  return hyRequest.get({ url: '/users/role/list' })
}
