import { defineStore } from 'pinia'
import weatherPic from '@/assets/weatherPictureList.json'

export const useWeatherPictureStore = defineStore('weatherPicture', () => {
  const weather: Record<string, Record<string, string>> = weatherPic

  const getBlackPic = () => {
    return weather.black
  }
  const getWhitePic = () => {
    return weather.white
  }
  return { getBlackPic, getWhitePic }
})
