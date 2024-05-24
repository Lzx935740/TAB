import { defineStore } from 'pinia'
import Setting from '@/assets/setting.json'

export const useUserKeyStore = defineStore('userkey', () => {
  let AMAP_WEB_KEY = ''
  let AMAP_JS_KEY = ''
  let AMAP_SURETY_ID = ''
  let CAIYUNAPP_KEY = ''
  let ROLL_APP_ID = ''
  let ROLL_APP_SECRET = ''
  if (Setting) {
    AMAP_WEB_KEY = Setting['AMAP_WEB_KEY']
    AMAP_JS_KEY = Setting['AMAP_JS_KEY']
    AMAP_SURETY_ID = Setting['AMAP_SURETY_ID']
    CAIYUNAPP_KEY = Setting['CAIYUNAPP_KEY']
    ROLL_APP_ID = Setting['ROLL_APP_ID']
    ROLL_APP_SECRET = Setting['ROLL_APP_SECRET']
  }

  return {
    AMAP_WEB_KEY,
    AMAP_JS_KEY,
    AMAP_SURETY_ID,
    CAIYUNAPP_KEY,
    ROLL_APP_ID,
    ROLL_APP_SECRET
  }
})
