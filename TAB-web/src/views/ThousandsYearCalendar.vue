<template>
  <el-col :span="9" :offset="3">
    <el-row>
      <div
        style="
          background: rgba(255, 255, 255, 0.6);
          width: 22vw;
          height: 100%;
          border: var(--main-border);
        "
      >
        <el-calendar
          style="background: rgba(255, 255, 255, 0.6); height: auto"
        />
      </div>
    </el-row>
    <el-row>
      <div
        style="
          background: rgba(255, 255, 255, 0.6);
          width: 22vw;
          border: var(--main-border);
          font-size: 2.6vh;
          font-weight: 800;
          text-align: center;
        "
      >
        <div style="height: 16.6%; border-bottom: var(--main-border)">
          {{ `${date.yearTips}年${date.lunarCalendar}` }}
        </div>
        <div style="height: 16.6%; border-bottom: var(--main-border)">
          <div
            style="
              display: inline-block;
              width: 50%;
              border-right: var(--main-border);
            "
          >
            {{ date.typeDes }}
          </div>
          <div style="display: inline-block; width: 50%">
            {{ date.solarTerms }}
          </div>
        </div>
        <div style="height: 16.6%; border-bottom: var(--main-border)">
          <div
            style="
              display: inline-block;
              width: 15%;
              border-right: var(--main-border);
            "
          >
            宜
          </div>
          <div style="display: inline-block; width: 85%; font-size: 12px">
            {{ date.suit }}
          </div>
        </div>
        <div style="height: 16.6%; border-bottom: var(--main-border)">
          <div
            style="
              display: inline-block;
              width: 15%;
              border-right: var(--main-border);
            "
          >
            忌
          </div>
          <div style="display: inline-block; width: 85%; font-size: 12px">
            {{ date.avoid }}
          </div>
        </div>
        <div style="height: 16.6%; border-bottom: var(--main-border)">
          <div
            style="
              display: inline-block;
              width: 50%;
              border-right: var(--main-border);
            "
          >
            {{ `今年的第${date.dayOfYear}天` }}
          </div>
          <div
            style="
              display: inline-block;
              width: 50%;
              border-right: var(--main-border);
            "
          >
            {{ `今年的第${date.weekOfYear}周` }}
          </div>
        </div>
        <div style="height: 16.6%">
          <div
            style="
              display: inline-block;
              width: 50%;
              border-right: var(--main-border);
            "
          >
            {{ date.chineseZodiac + '年' }}
          </div>
          <div
            style="
              display: inline-block;
              width: 50%;
              border-right: var(--main-border);
            "
          >
            {{ date.constellation }}
          </div>
        </div>
      </div>
    </el-row>
  </el-col>

  <el-col :span="11" :offset="1">
    <el-row>
      <div style="width: 22vw">
        <dynamic-logo />
      </div>
    </el-row>
    <el-row>
      <div
        style="
          background: rgba(255, 255, 255, 0.6);
          width: 22vw;
          border: var(--main-border);
        "
      >
        <router-view />
      </div>
    </el-row>
  </el-col>
</template>

<script lang="ts" setup>
import DynamicLogo from './components/DynamicLogo.vue'
import { ref, onMounted } from 'vue'
const date = ref({})
import { getDateTimeService, getTodeyDateTimeService } from '@/api'
const getCalendarByMonth = async () => {
  const { sysTime2 } = await getDateTimeService()
  const { data } = await getTodeyDateTimeService(
    sysTime2.split(' ')[0].replace(/-/g, '')
  )
  date.value = data
}

onMounted(() => {
  getCalendarByMonth()
})
</script>

<style lang="scss" scoped>
.el-row {
  height: 50%;
  padding: 3vh 0 2.5vh 0;
}
.is-selected {
  color: #1989fa;
}

:deep(.el-calendar) {
  font-size: 14px;
  .el-calendar__body {
    padding: 0;
  }
  .next {
    border: none;
  }
  td {
    border: none;
  }
  .el-calendar-day {
    height: 35px !important;
    text-align: center;
    border: none;
  }
  .el-calendar__header {
    justify-content: space-between;
  }
  .is-selected {
    background-color: #1d8dd8;
    color: #fff;
  }
}
</style>
