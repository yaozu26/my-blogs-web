export const getCurrentTime = () => {
  const currentHour = new Date().getHours()

  if (currentHour < 6 || currentHour >= 18) {
    return '晚上'
  } else if (currentHour < 8) {
    return '早上'
  } else if (currentHour < 12) {
    return '上午'
  } else if (currentHour < 14) {
    return '中午'
  } else if (currentHour < 18) {
    return '下午'
  }
}
