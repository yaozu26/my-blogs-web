import dayjs from 'dayjs'

// 返回 年月日时分秒
export const formatDate = (time: string) => {
  return dayjs(time).format('YYYY-MM-DD HH:mm:ss')
}

// 返回 年月日
export const formatDay = (time: string) => {
  return dayjs(time).format('YYYY-MM-DD')
}

// 更新时间
export const formatTime = (time: any) => {
  const nowTime = dayjs(new Date()).unix()
  const intervalTime = nowTime - dayjs(time).unix()

  if (intervalTime < 60) {
    return intervalTime + '秒前'
  } else if (intervalTime < 60 * 60) {
    return Math.floor(intervalTime / 60) + '分钟前'
  } else if (intervalTime < 60 * 60 * 24) {
    return Math.floor(intervalTime / 60 / 60) + '小时前'
  } else if (intervalTime < 60 * 60 * 24 * 30) {
    return Math.floor(intervalTime / 60 / 60 / 24) + '天前'
  } else if (intervalTime < 60 * 60 * 24 * 30 * 12) {
    return Math.floor(intervalTime / 60 / 60 / 24 / 30) + '月前'
  }

  return dayjs(time).unix()
}
