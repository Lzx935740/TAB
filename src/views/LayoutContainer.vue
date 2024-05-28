<template>
  <el-container>
    <MapContainer />
    <el-container>
      <el-header>
        <el-menu
          :default-active="firstActive"
          mode="horizontal"
          @select="handleFirstSelect"
          style="height: 100%; border: none"
        >
          <el-menu-item index="news">今日新闻</el-menu-item>
          <el-menu-item index="calendar">万年历</el-menu-item>

          <el-form :inline="true">
            <el-form-item>
              <el-button plain :icon="Search"></el-button>
            </el-form-item>
            <el-form-item>
              <el-input
                v-model="searchValue"
                @keydown.enter="bingSearch"
                placeholder="键入以搜索"
              />
            </el-form-item>
          </el-form>
        </el-menu>
      </el-header>
      <el-main>
        <div v-if="settingState">
          <el-row>
            <router-view />
          </el-row>
        </div>
        <div class="setting" v-else>
          <el-row>
            <el-col :span="15">
              <el-form :model="settingForm" class="setting_form">
                <el-row>
                  <el-col :span="6">
                    <el-button v-if="optionState" @click="optionState = false"
                      >修改</el-button
                    >
                    <el-button v-else @click="saveSetting()">保存</el-button>
                  </el-col>
                  <el-col :span="18" style="font-size: 3vh; font-weight: 800"
                    >API秘钥</el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="6" class="option_name"
                    >高德地图 WEB KEY</el-col
                  >
                  <el-col :span="18">
                    <div v-if="optionState">
                      {{ settingForm.AMAP_WEB_KEY }}
                    </div>
                    <el-input
                      v-else
                      clearable
                      clearablev-else
                      v-model="settingForm.AMAP_WEB_KEY"
                    ></el-input>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="6" class="option_name">高德地图 JS KEY</el-col>
                  <el-col :span="18">
                    <div v-if="optionState">{{ settingForm.AMAP_JS_KEY }}</div>
                    <el-input
                      v-else
                      clearable
                      clearablev-else
                      v-model="settingForm.AMAP_JS_KEY"
                    ></el-input>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="6" class="option_name"
                    >高德地图 安全密钥</el-col
                  >
                  <el-col :span="18">
                    <div v-if="optionState">
                      {{ settingForm.AMAP_SURETY_ID }}
                    </div>
                    <el-input
                      v-else
                      clearable
                      clearablev-else
                      v-model="settingForm.AMAP_SURETY_ID"
                    ></el-input>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="6" class="option_name">彩云天气 TOKEN</el-col>
                  <el-col :span="18">
                    <div v-if="optionState">
                      {{ settingForm.CAIYUNAPP_KEY }}
                    </div>
                    <el-input
                      v-else
                      clearable
                      clearablev-else
                      v-model="settingForm.CAIYUNAPP_KEY"
                    ></el-input>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="6" class="option_name">ROLL APP_ID</el-col>
                  <el-col :span="18">
                    <div v-if="optionState">{{ settingForm.ROLL_APP_ID }}</div>
                    <el-input
                      v-else
                      clearable
                      clearablev-else
                      v-model="settingForm.ROLL_APP_ID"
                    ></el-input>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="6" class="option_name">ROLL APP_SECRET</el-col>
                  <el-col :span="18">
                    <div v-if="optionState">
                      {{ settingForm.ROLL_APP_SECRET }}
                    </div>
                    <el-input
                      v-else
                      clearable
                      clearablev-else
                      v-model="settingForm.ROLL_APP_SECRET"
                    ></el-input>
                  </el-col>
                </el-row>
              </el-form>
            </el-col>
            <el-col
              :span="9"
              style="
                border-right: var(--main-border);
                border-bottom: var(--main-border);
                text-align: left;
              "
              ><div
                style="
                  height: 6vh;

                  line-height: 6vh;
                  padding-left: 0.9vw;
                  font-size: 3vh;
                  font-weight: 800;
                  border-bottom: var(--main-border);
                "
              >
                API调用说明
              </div>
              <div style="font-size: 1.83vh">
                <p>本项目一共使用了3个API,分别为：</p>
                <ul>
                  <li>
                    1. 高德地图(WebAPI、JSAPI)：lbs.amap.com，提供路况信息和地图
                  </li>
                  <li>2. 彩云天气：platform.caiyunapp.com，提供气象信息</li>
                  <li>3. RollAPI：www.mxnzp.com，提供新闻、万年历等信息</li>
                </ul>
                <p>
                  由于相关平台对个人开发者有调用限额，所以需要各位用户自己提供API接口，保证项目顺利运行
                  其中：
                </p>
                <ul>
                  <li>· 高德地图需要提供WebAPI和JSAPI的key</li>
                  <li>
                    · 彩云天气需要提供API的Token
                    RoolAPI需要提供APP_ID和APP_SECRET
                  </li>
                </ul>
              </div></el-col
            >
          </el-row>
        </div>
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
            <el-menu
              :default-active="sencondActive"
              @select="handleSecondSelect"
            >
              <el-menu-item index="livedata">实况数据</el-menu-item>
              <el-menu-item index="expectedpreecopitation"
                >预计降水</el-menu-item
              >
              <el-menu-item index="liveindex">生活指数</el-menu-item>
              <el-menu-item index="recentweather">近期天气</el-menu-item>
            </el-menu>
          </div>
          <div class="datetime" v-html="dateTime"></div>
        </el-main>
        <el-footer>
          <el-button
            class="option_button"
            v-if="settingState"
            @click="settingState = false"
          >
            <el-icon><Tools /></el-icon>
          </el-button>
          <el-button
            class="option_button"
            v-else
            @click="(settingState = true), (optionState = true)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 48 48"
            >
              <g
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
              >
                <path d="M12.9998 8L6 14L12.9998 21" />
                <path
                  d="M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984"
                />
              </g>
            </svg>
          </el-button>
        </el-footer>
      </el-container>
    </el-aside>
  </el-container>
</template>

<script setup lang="ts">
import { ref, onUnmounted, onMounted, computed } from 'vue'
import {
  Search,
  Tools,
  CloseBold,
  Check,
  Setting
} from '@element-plus/icons-vue'
import MapContainer from './components/MapContainer.vue'

const firstActive = ref<string>('news')
const sencondActive = ref<string>('livedata')
const handleFirstSelect = (key: string) => {
  firstActive.value = key
  router.replace('/' + firstActive.value + '/' + sencondActive.value)
}
const handleSecondSelect = (key: string) => {
  sencondActive.value = key
  router.replace('/' + firstActive.value + '/' + sencondActive.value)
}
const searchValue = ref<string>('')
const statement = ref<string>('划水！划水！不择手段地划水！  ——LFSW元立')
const temperature = ref<string>('28℃')
const timeStamp = ref<number>(20240523171152)
const dateStamp = ref<number>()
const settingState = ref<boolean>(true)

const timer = ref() // 定时器
//循环请求接口
const Verification = () => {
  timer.value = setInterval(() => {
    dateTimeAndWord()
  }, 1000)
}

import { getWordOfTheDayService, getDateTimeService } from '@/api'
const quoteOfTheDay = async () => {
  const { data } = await getWordOfTheDayService()
  statement.value =
    data[0].content + (data[0].author === '' ? '' : '    --' + data[0].author)
}

const dateTimeAndWord = async () => {
  const data = await getDateTimeService()
  const _dateStamp = new Date(data.sysTime2.split(' ')[0]).getTime()
  timeStamp.value = new Date(data.sysTime2).getTime()
  if (dateStamp.value === undefined) {
    dateStamp.value = _dateStamp
    quoteOfTheDay()
  } else {
    if (_dateStamp - dateStamp.value === 86400) {
      quoteOfTheDay()
      dateStamp.value = _dateStamp
    }
  }
}

const dateTime = computed(() => {
  const date = new Date(timeStamp.value)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const week: number = date.getDay()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  return `${hours}:${minutes}<br />星期${week === 1 ? '一' : week === 2 ? '二' : week === 3 ? '三' : week === 4 ? '四' : week === 5 ? '五' : week === 6 ? '站' : '日'}<br />${year}年${month}月${day}日`
})

import { getIpLocationService } from '@/api'
import { getLiveWeatherService } from '@/api'

const getTemperature = async () => {
  const { rectangle } = await getIpLocationService()
  const { result } = await getLiveWeatherService(rectangle.split(';')[0])
  temperature.value = result.realtime.temperature + '℃'
}

import { useUserKeyStore } from '@/stores'
onMounted(() => {
  router.replace(`/${firstActive.value}/${sencondActive.value}`)
  const userKey = useUserKeyStore()
  settingForm.value.AMAP_JS_KEY = userKey.AMAP_JS_KEY
  settingForm.value.AMAP_WEB_KEY = userKey.AMAP_WEB_KEY
  settingForm.value.AMAP_SURETY_ID = userKey.AMAP_SURETY_ID
  settingForm.value.CAIYUNAPP_KEY = userKey.CAIYUNAPP_KEY
  settingForm.value.ROLL_APP_ID = userKey.ROLL_APP_ID
  settingForm.value.ROLL_APP_SECRET = userKey.ROLL_APP_SECRET
  Verification()
  getTemperature()
})

onUnmounted(() => {
  clearInterval(timer.value)
  timer.value = null
})

const settingForm = ref({
  AMAP_WEB_KEY: '',
  AMAP_JS_KEY: '',
  AMAP_SURETY_ID: '',
  CAIYUNAPP_KEY: '',
  ROLL_APP_ID: '',
  ROLL_APP_SECRET: ''
})

const optionState = ref<boolean>(true)
import { saveAs } from 'file-saver'
import router from '@/router'
const saveSetting = () => {
  optionState.value = true
  const blob = new Blob([JSON.stringify(settingForm.value)], {
    type: 'text/json'
  })
  saveAs(blob, 'setting.json')
}

const bingSearch = () => {
  console.log(111)
  if (searchValue.value === '') return
  window.open(`https://cn.bing.com/search?q=${searchValue.value}`, '_blank')
}
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
  .setting {
    p,
    ul,
    li {
      height: auto;
      padding-left: 0.3vw;
    }
    margin: 5vh 0 0 11vw;
    width: 45vw;
    text-align: center;
    height: 42vh;
    border-left: var(--main-border);
    border-top: var(--main-border);
    .el-input {
      height: 50%;
      width: 96%;
    }
    .setting_form {
      .option_name {
        font-weight: 800;
      }
      .el-row {
        height: 14.28%;
        line-height: 5.5vh;
        border-bottom: var(--main-border);
        .el-button {
          font-size: 3vh;
          font-weight: 800;
          height: 100%;
          width: 100%;
          border: none;
        }
        .el-col {
          border-right: var(--main-border);
        }
      }
    }
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
      width: 100%;
      padding-top: 0.3vh;
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
    .option_button {
      width: 12vw;
      height: 9vh;
      position: fixed;
      right: 0;
      bottom: 0;
      text-align: center;
      font-size: 4.5vh;
      border-left: var(--main-border);
      border-top: var(--main-border);
    }
  }
}
</style>
