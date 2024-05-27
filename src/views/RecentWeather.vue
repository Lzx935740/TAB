<template>
  <div class="table">
    <div class="thead">未来三天天气</div>
    <div class="tbody">
      <div class="tr">
        <div
          class="td"
          v-for="(skycon, index) in FutureWeather.skycon_08h_20h"
          :key="index"
        >
          {{
            parseInt(skycon.date.split('-')[1]) +
            '月' +
            parseInt(skycon.date.split('-')[2].slice(0, 2)) +
            '日'
          }}
        </div>
      </div>
      <div class="tr">
        <div
          class="td"
          v-for="(skycon, index) in FutureWeather.skycon_08h_20h"
          :key="index"
        >
          <span style="font-size: 1.6vh; border-right: none"
            >{{
              weatherCode
                .getWeatherCode(skycon.value)
                .replace(/（.*）/g, '') ===
              weatherCode.getWeatherCode(
                FutureWeather.skycon_20h_32h[index].value.replace(/（.*）/g, '')
              )
                ? weatherCode
                    .getWeatherCode(skycon.value)
                    .replace(/（.*）/g, '')
                : weatherCode
                    .getWeatherCode(skycon.value)
                    .replace(/（.*）/g, '') +
                  '转' +
                  weatherCode.getWeatherCode(
                    FutureWeather.skycon_20h_32h[index].value.replace(
                      /（.*）/g,
                      ''
                    )
                  )
            }}
          </span>
        </div>
      </div>
      <div class="tr">
        <div
          class="td"
          v-for="(temperature, index) in FutureWeather.temperature"
          :key="index"
        >
          <span style="font-size: 1.6vh; border-right: none">{{
            temperature.min + '℃-' + temperature.max + '℃'
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
const FutureWeather = ref<{
  temperature: [{ min: number; max: number }]
  skycon_08h_20h: [{ date: string; value: string }]
  skycon_20h_32h: [{ value: string }]
}>({
  temperature: [{ min: 0, max: 0 }],
  skycon_08h_20h: [{ date: '2024-05-21T00:00+08:00', value: 'LIGHT_RAIN' }],
  skycon_20h_32h: [{ value: 'LIGHT_RAIN' }]
})

import { getFutureWeatherService } from '@/api/caiyunapp'
import { getIpLocationService } from '@/api/location'
const getFuterWeather = async () => {
  const { rectangle } = await getIpLocationService()
  const { result } = await getFutureWeatherService(rectangle.split(';')[0], 3)
  FutureWeather.value = result.daily
}
import { useWeatherTypeAndLevelStore } from '@/stores'
const weatherCode = useWeatherTypeAndLevelStore()

onMounted(() => {
  getFuterWeather()
})
</script>

<style lang="scss" scoped>
.table {
  height: 100%;
  widows: 100%;
  .thead {
    height: 25%;
    font-size: 3vh;
    font-weight: 800;
    text-align: center;
    line-height: 8vh;
    border-bottom: 2px solid #bbbbbb;
  }
  .tbody {
    height: 75%;
    .tr:nth-child(-n + 2) {
      border-bottom: 2px solid #bbbbbb;
    }
    .tr {
      height: 33.33%;
      .td {
        display: inline-block;
        line-height: 8.5vh;
        font-size: 2.6vh;
        text-align: center;
        width: 33.3%;
      }
      :nth-child(-n + 2) {
        border-right: 2px solid #bbbbbb;
      }
    }
  }
}
</style>
