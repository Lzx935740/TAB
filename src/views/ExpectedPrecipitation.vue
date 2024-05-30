<template>
  <div>
    <el-row style="padding: 2.5vh 5vw"> 未来 6 小时下雨概率 </el-row>
    <el-row>
      <el-col :span="4">1h</el-col>
      <el-col :span="4">2h</el-col>
      <el-col :span="4">3h</el-col>
      <el-col :span="4">4h</el-col>
      <el-col :span="4">5h</el-col>
      <el-col :span="4">6h</el-col>
    </el-row>
    <el-row v-if="probabilityOfRains">
      <el-col :span="4" v-for="i of [0, 1, 2, 3, 4, 5]" :key="i">
        {{ probabilityOfRains[i] }}%
      </el-col>
    </el-row>
    <el-row v-if="weatherLevel" style="color: black; font-weight: 800; padding: 2vh 6vw;" :style="weatherLevel">{{ weatherStr }}</el-row>
  </div>
</template>

<script lang="ts" setup>
const probabilityOfRains = ref<[number | string]>()
import { getIpLocationService } from '@/api'
import { getExpectedPrecipitation, getLiveWeatherService } from '@/api'

import { ref, onMounted } from 'vue'
const timer = ref() // 定时器
const num = ref<number>(1)
//循环请求接口
const Verification = () => {
  timer.value = setInterval(() => {
    if (num.value >= 3600) {
      num.value = 1
      getProbabilityOfRain()
      getWeatherCode()
    } else {
      num.value++
    }
  }, 1000)
}
onMounted(() => {
  getProbabilityOfRain()
  getWeatherCode()
  Verification()
})
const getProbabilityOfRain = async () => {
  const { rectangle } = await getIpLocationService()
  const { result } = await getExpectedPrecipitation(rectangle.split(';')[0])
  probabilityOfRains.value = result.hourly.precipitation.map(
    (x: any) => x.probability
  )
}

import { useWeatherTypeAndLevelStore } from '@/stores/index'
const weatherCodeList = useWeatherTypeAndLevelStore()
const weatherCode = ref<string>('0401')
const weatherLevel = ref<string>()
const getWeatherCode = async () => {
  const { rectangle } = await getIpLocationService()
  const { result } = await getLiveWeatherService(rectangle.split(';')[0], true)
  if (result.alert?.content[0].code) {
    weatherCode.value = result.alert.content[0].code
    weatherLevel.value =
      'background-color: ' +
      weatherCodeList.getWeatherLevel(weatherCode.value.slice(0,2))
  }
}
import { computed } from 'vue'
const weatherStr = computed(() => {
  const level: Record<string, string> = {
    '01': '蓝色',
    '02': '黄色',
    '03': '橙色',
    '04': '红色'
  }
  let str = ''
  if (weatherCode.value !== '0000') {
    str =
      weatherCodeList.getWeatherType(weatherCode.value.slice(2)) +
      level[weatherCode.value.slice(0,2)] +
      '预警'
  }
  return str
})

import { onUnmounted } from 'vue'
onUnmounted(() => {
  clearInterval(timer.value)
  timer.value = null
})
</script>

<style lang="scss" scoped>
.el-row {
  height: 25%;
  font-size: 2.6vh;
  font-weight: 800;
  text-align: center;
  border-bottom: var(--main-border);
  .el-col {
    padding-top: 2.5vh;
    border-right: var(--main-border);
  }
}
</style>
