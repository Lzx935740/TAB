import request from '@/utils/request'
import { useUserKeyStore } from '@/stores/index'
const userKey = useUserKeyStore()
export const getLiveWeatherService = (location: string, alert?: boolean) => {
  let url = ''
  if (alert) {
    url =
      '/caiyun/' +
      userKey.CAIYUNAPP_KEY +
      '/' +
      location +
      '/realtime?alert=true'
  } else {
    url =
      '/caiyun/' +
      userKey.CAIYUNAPP_KEY +
      '/' +
      location +
      '/realtime?alert=true'
  }
  return request({
    method: 'get',
    url: url
  })
}

export const getExpectedPrecipitation = (location: string) => {
  return request({
    method: 'get',
    url:
      '/caiyun' +
      userKey.CAIYUNAPP_KEY +
      '/' +
      location +
      '/hourly?hourlysteps=6'
  })
}
