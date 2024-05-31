import request from '@/utils/request'
import { useUserKeyStore } from '@/stores/index'
const userKey = useUserKeyStore()
export const getIpLocationService = (ip?: string) => {
  return request({
    method: 'get',
    url: `${ip === undefined ? '/amap/ip?key=' + userKey.AMAP_WEB_KEY : '/amap/ip?key=' + userKey.AMAP_WEB_KEY + '&ip=' + ip}`
  })
}

export const getTrafficPattern = (rectangle: string) => {
  return request({
    method: 'get',
    url: `/amap/traffic/status/rectangle?rectangle=${rectangle}&output=json&extensions=all&key=${userKey.AMAP_WEB_KEY}&level=6`
  })
}
