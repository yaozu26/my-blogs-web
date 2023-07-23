import dayjs from 'dayjs'

export const formatDate = (time: string) => {
  return dayjs(time).format('YYYY-MM-DD HH:mm:ss')
}

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
  }

  return dayjs(time).unix()
}
