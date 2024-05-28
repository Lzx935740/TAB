import request from '@/utils/request'
import { useUserKeyStore } from '@/stores/index'
const userKey = useUserKeyStore()

const baseUrl = '/caiyun/' + userKey.CAIYUNAPP_KEY + '/'
export const getLiveWeatherService = (location: string, alert?: boolean) => {
  let url = ''
  if (alert) {
    url = baseUrl + location + '/realtime?alert=true'
  } else {
    url = baseUrl + location + '/realtime?alert=true'
  }
  return request({
    method: 'get',
    url: url
  })
}

export const getExpectedPrecipitation = (location: string) => {
  return request({
    method: 'get',
    url: baseUrl + location + '/hourly?hourlysteps=6'
  })
}

// 未来天气（含生活指数）
export const getFutureWeatherService = (location: string, day: number) => {
  return request({
    method: 'get',
    url: baseUrl + location + '/daily?dailysteps=' + day
  })
}
