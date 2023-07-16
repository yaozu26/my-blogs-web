import dayjs from 'dayjs'

export const formatDate = (timestamp: string) => {
  return dayjs(timestamp).format('YYYY-MM-DD')
}
