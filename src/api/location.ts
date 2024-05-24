import request from '@/utils/request'
import { useUserKeyStore } from '@/stores/index'
const userKey = useUserKeyStore()
export const getIpLocationService = (ip?: string) => {
  return request({
    method: 'get',
    url: `https://restapi.amap.com/v3/ip?key=${userKey.AMAP_WEB_KEY}`
  })
}
