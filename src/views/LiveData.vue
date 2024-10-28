<template>
  <el-row>
    <el-col :span="12" style="border-right: var(--main-border)"
      >体感温度：{{ liveData.body_temperature }}℃</el-col
    >
    <el-col :span="12"
      >气压：<span style="font-size: 2vh">{{ liveData.pneumatic }} hPa</span></el-col
    >
  </el-row>
  <el-row style="border-top: var(--main-border); border-bottom: var(--main-border)">
    <el-col :span="12" style="border-right: var(--main-border)"
      >相对湿度：{{ (100 * liveData.relative_humidity).toFixed(2) }}%</el-col
    >
    <el-col :span="12">风向：{{ liveData.directional_of_wink }}</el-col>
  </el-row>
  <el-row>
    <el-col :span="12" style="border-right: var(--main-border)"
      >紫外线：{{ liveData.Ultraviolet }}</el-col
    >
    <el-col :span="12">风力：{{ liveData.wind_power }} 级</el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { type LiveDataType } from '@/types'
const liveData = ref<LiveDataType>({
  body_temperature: null,
  pneumatic: null,
  relative_humidity: 0,
  directional_of_wink: '',
  Ultraviolet: '',
  wind_power: null
})

import { getIpLocationService } from '@/api'
import { getLiveWeatherService } from '@/api'

const weatherDetail = async () => {
  const { rectangle } = await getIpLocationService()
  const { result } = await getLiveWeatherService(rectangle.split(';')[0])
  liveData.value.body_temperature = result.realtime.apparent_temperature
  liveData.value.pneumatic = result.realtime.pressure
  liveData.value.relative_humidity = result.realtime.humidity
  liveData.value.directional_of_wink =
    result.realtime.wind.direction === 360
      ? '北方'
      : result.realtime.wind.direction > 270
        ? '西北方'
        : result.realtime.wind.direction === 270
          ? '西方'
          : result.realtime.wind.direction > 180
            ? '西南方'
            : result.realtime.wind.direction === 180
              ? '南方'
              : result.realtime.wind.direction > 90
                ? '东南方'
                : result.realtime.wind.direction === 90
                  ? '东方'
                  : result.realtime.wind.direction > 0
                    ? '东北方'
                    : result.realtime.wind.direction === 0
                      ? '北方'
                      : ''
  liveData.value.Ultraviolet = result.realtime.life_index.ultraviolet.desc
  liveData.value.wind_power = result.realtime.wind.speed
}

import { onMounted } from 'vue'
onMounted(() => {
  weatherDetail()
})
</script>

<style lang="scss" scoped>
.el-row {
  height: 33.8%;
  font-size: 2.4vh;
  font-weight: 800;
  .el-col {
    padding: 3.5vh 0 0 0.2vw;
  }
}
</style>
