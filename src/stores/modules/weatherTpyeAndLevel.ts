import { defineStore } from 'pinia'
import WTL from '@/assets/weather.json'

export const useWeatherTypeAndLevelStore = defineStore(
  'weathertypeandlevel',
  () => {
    const weather: Record<string, Record<string, string>> = WTL
    const getWeatherLevel = (code: string) => {
      return weather.weatherLevel[code]
    }
    const getWeatherType = (code: string) => {
      return weather.weatherTpye[code]
    }
    return { getWeatherLevel, getWeatherType }
  }
)
