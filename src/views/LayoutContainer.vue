<template>
  <el-container>
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          router
          @select="handleSelect"
          style="height: 100%; border: none"
        >
          <el-menu-item index="1">道路交通</el-menu-item>
          <el-menu-item index="2">今日新闻</el-menu-item>
          <el-menu-item index="3">万年历</el-menu-item>

          <el-form :inline="true">
            <el-form-item>
              <el-button plain :icon="Search"></el-button>
            </el-form-item>
            <el-form-item>
              <el-input v-model="searchValue" placeholder="键入以搜索" />
            </el-form-item>
          </el-form>

          <el-switch
            v-model="light_or_dark"
            size="large"
            style="margin: 2vh 1vw"
          >
            <template #active-action>
              <svg viewBox="0 0 24 24" class="dark-icon">
                <path
                  d="M11.01 3.05C6.51 3.54 3 7.36 3 12a9 9 0 0 0 9 9c4.63 0 8.45-3.5 8.95-8c.09-.79-.78-1.42-1.54-.95A5.403 5.403 0 0 1 11.1 7.5c0-1.06.31-2.06.84-2.89c.45-.67-.04-1.63-.93-1.56z"
                  fill="currentColor"
                ></path>
              </svg>
            </template>
            <template #inactive-action>
              <svg viewBox="0 0 24 24" class="light-icon">
                <path
                  d="M6.05 4.14l-.39-.39a.993.993 0 0 0-1.4 0l-.01.01a.984.984 0 0 0 0 1.4l.39.39c.39.39 1.01.39 1.4 0l.01-.01a.984.984 0 0 0 0-1.4zM3.01 10.5H1.99c-.55 0-.99.44-.99.99v.01c0 .55.44.99.99.99H3c.56.01 1-.43 1-.98v-.01c0-.56-.44-1-.99-1zm9-9.95H12c-.56 0-1 .44-1 .99v.96c0 .55.44.99.99.99H12c.56.01 1-.43 1-.98v-.97c0-.55-.44-.99-.99-.99zm7.74 3.21c-.39-.39-1.02-.39-1.41-.01l-.39.39a.984.984 0 0 0 0 1.4l.01.01c.39.39 1.02.39 1.4 0l.39-.39a.984.984 0 0 0 0-1.4zm-1.81 15.1l.39.39a.996.996 0 1 0 1.41-1.41l-.39-.39a.993.993 0 0 0-1.4 0c-.4.4-.4 1.02-.01 1.41zM20 11.49v.01c0 .55.44.99.99.99H22c.55 0 .99-.44.99-.99v-.01c0-.55-.44-.99-.99-.99h-1.01c-.55 0-.99.44-.99.99zM12 5.5c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6zm-.01 16.95H12c.55 0 .99-.44.99-.99v-.96c0-.55-.44-.99-.99-.99h-.01c-.55 0-.99.44-.99.99v.96c0 .55.44.99.99.99zm-7.74-3.21c.39.39 1.02.39 1.41 0l.39-.39a.993.993 0 0 0 0-1.4l-.01-.01a.996.996 0 0 0-1.41 0l-.39.39c-.38.4-.38 1.02.01 1.41z"
                  fill="currentColor"
                ></path>
              </svg>
            </template>
          </el-switch>
        </el-menu>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="9" :offset="3">
            <div style="width: 22vw; border: var(--main-border)"></div>
          </el-col>
          <el-col :span="11" :offset="1">
            <div style="width: 22vw; border: var(--main-border)"></div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="9" :offset="3"
            ><div style="width: 22vw; border: var(--main-border)"></div
          ></el-col>
          <el-col :span="11" :offset="1"
            ><div style="width: 22vw; border: var(--main-border)"></div
          ></el-col>
        </el-row>
      </el-main>
      <el-footer>每日一言<br />{{ statement }}</el-footer>
    </el-container>
    <el-aside>
      <el-container>
        <el-header
          >Travel Advice Board<br />
          <strong>TAB</strong>
        </el-header>
        <el-main>
          <div class="temperature">{{ temperature }}</div>
          <div class="weather-menu">
            <el-menu default-active="1">
              <el-menu-item index="1">实况数据</el-menu-item>
              <el-menu-item index="2">预计降水</el-menu-item>
              <el-menu-item index="3">生活指数</el-menu-item>
              <el-menu-item index="4">未来天气</el-menu-item>
            </el-menu>
          </div>
          <div class="datetime">{{ date }}</div>
        </el-main>
        <el-footer>
          <div v-if="settingstate === 0">
            <el-icon><Tools /></el-icon>
          </div>
          <div v-else-if="settingstate === 1">
            <el-icon><Check /></el-icon>
          </div>
          <div v-else>
            <el-icon><CloseBold /></el-icon>
          </div>
        </el-footer>
      </el-container>
    </el-aside>
  </el-container>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import { Search, Tools, CloseBold, Check } from '@element-plus/icons-vue'

const light_or_dark = ref(false)
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const searchValue = ref<String>()
const statement = ref<String>('划水！划水！不择手段地划水！——LFSW元立')
const temperature = ref<String>('28℃')
const date = ref<String>('2021-14-15')
const settingstate = ref<Number>(0)

const timer = ref() // 定时器
let count = ref(40) // 倒计时
//循环请求接口
const Verification = () => {
  timer.value = setInterval(() => {
    if (count.value > 0 && count.value <= 60) {
      // loading.value = false
      count.value--
    } else if (count.value === 0) {
      // 请求数据
      clearInterval(timer.value)
      timer.value = null
    }
  }, 1000)
}

onUnmounted(() => {
  clearInterval(timer.value)
  timer.value = null
})
</script>

<style lang="scss" scoped>
.el-header,
.el-main,
.el-footer,
.el-aside {
  margin: 0;
  padding: 0;
}

.el-header {
  position: relative;
  border-bottom: var(--main-border);
  height: 9vh;
  .el-menu {
    background: rgba(255, 255, 255, 0.6);
    .el-menu-item {
      font-weight: 800;
      width: 11vw;
      font-size: 2vh;
      padding: 3vh 5vh;
      border-right: var(--main-border);
    }
  }
  .el-form {
    margin-left: 12vw;
    .el-form-item {
      margin: 0;
    }
    .el-input {
      height: 5vh;
      width: 28vw;
    }
    .el-button {
      height: 5vh;
      width: 5vh;
      border-radius: 0;
    }
    :deep(.el-input__wrapper) {
      border-radius: 0;
      border-left: none;
    }
  }
}

.el-main {
  .el-row {
    height: 50%;
    padding: 3vh 0 2.5vh 0;
  }
}

.el-footer {
  background: rgba(255, 255, 255, 0.6);
  border-top: var(--main-border);
  height: 9vh;
  padding-top: 1.6vh;
  text-align: center;
  font-size: 1.6vh;
}

.el-aside {
  width: 12vw;
  .el-header {
    background: rgba(255, 255, 255, 0.6);
    border-left: var(--main-border);
    text-align: center;
    padding-top: 2vh;
    font-size: 1.6vh;
  }
  .el-main {
    position: relative;
    .temperature {
      background: rgba(255, 255, 255, 0.6);
      position: absolute;
      height: 11vh;
      width: 100%;
      border: var(--main-border);
      border-top: none;
      line-height: 11vh;
      text-align: center;
      font-size: 3.5vh;
      font-weight: 800;
    }
    .weather-menu {
      .el-menu {
        background: rgba(255, 255, 255, 0.6);
      }
      height: 44vh;
      position: fixed;
      right: 0;
      top: 50%;
      transform: translateY(-22vh);
      border: var(--main-border);
      border-bottom: none;
      border-right: none;
      .el-menu-item {
        height: 25%;
        width: 12vw;
        border-bottom: var(--main-border);
        padding: 0 8.5vh;
        text-align: center;
        font-weight: 800;
        font-size: 2vh;
      }
      .is-active {
        border-left: 3px solid var(--el-menu-active-color);
      }
    }
    .datetime {
      background: rgba(255, 255, 255, 0.6);
      position: absolute;
      bottom: 0;
      height: 11vh;
      line-height: 10.8vh;
      width: 100%;
      border: var(--main-border);
      border-bottom: none;
      font-size: 2vh;
      font-weight: 800;
      text-align: center;
    }
  }
  .el-footer {
    border-left: var(--main-border);
    padding-top: 1.6vh;
    text-align: center;
    font-size: 4.5vh;
  }
}
</style>
