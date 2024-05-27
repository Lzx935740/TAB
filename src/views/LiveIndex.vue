<template>
  <div class="table">
    <div class="tr">
      <div class="td">舒适度指数</div>
      <div class="td">{{ liveIndex.comfort }}</div>
    </div>
    <div class="tr">
      <div class="td">感冒指数</div>
      <div class="td">{{ liveIndex.coldRisk }}</div>
    </div>
    <div class="tr">
      <div class="td">洗车指数</div>
      <div class="td">{{ liveIndex.carWashing }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getFutureWeatherService } from '@/api/caiyunapp'
import { getIpLocationService } from '@/api/location'
import { onMounted, ref } from 'vue'
const liveIndex = ref<{
  comfort: string
  coldRisk: string
  carWashing: string
}>({ comfort: '', coldRisk: '', carWashing: '' })
const getLiveIndex = async () => {
  const { rectangle } = await getIpLocationService()
  const { result } = await getFutureWeatherService(rectangle.split(';')[0], 1)
  liveIndex.value = {
    comfort: result.daily.life_index.comfort[0].desc,
    coldRisk: result.daily.life_index.coldRisk[0].desc,
    carWashing: result.daily.life_index.carWashing[0].desc
  }
  console.log(liveIndex.value)
}

onMounted(() => {
  getLiveIndex()
})
</script>

<style lang="scss" scoped>
.table {
  font-size: 3vh;
  font-weight: 800;
  line-height: 11vh;
  text-align: center;
  .tr {
    height: 33.3%;
    .td {
      display: inline-block;
      width: 50%;
    }
    :first-child {
      border-right: 2px solid #bbbbbb;
    }
  }
  .tr:nth-child(-n + 2) {
    border-bottom: 2px solid #bbbbbb;
  }
}
</style>
