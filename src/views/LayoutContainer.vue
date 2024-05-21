<template>
  <el-container style="background-color: skyblue">
    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        router
        @select="handleSelect"
      >
        <el-menu-item index="1">道路交通</el-menu-item>
        <el-menu-item index="2">今日新闻</el-menu-item>
        <el-menu-item index="3">万年历</el-menu-item>

        <el-form :inline="true">
          <el-form-item>
            <el-button
              plain
              :icon="Search"
              style="
                width: 60px;
                height: 60px;
                font-size: 26px;
                margin: 20px 0 20px 240px;
              "
            ></el-button>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="searchForm"
              style="height: 60px; width: 480px"
              placeholder="键入以搜索"
            />
          </el-form-item>
        </el-form>

        <el-switch
          v-model="value1"
          size="large"
          style="margin: 30px 24px 30px 22px"
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
      <div class="name">
        <div style="height: 100px">
          tavel Advice Board<br /><strong style="text-align: center"
            >TAB</strong
          >
        </div>
        <div
          style="
            height: 100px;
            text-align: center;
            font-weight: 800;
            font-size: 50px;
            line-height: 100px;
          "
        >
          {{ temp }}
        </div>
      </div>
    </el-header>
    <el-container>
      <el-main>
        <div style="margin-top: 58px">
          <div
            style="
              display: inline-block;
              width: 480px;
              height: 360px;
              margin-left: 240px;
              background-color: pink;
            "
          >
            <router-view></router-view>
          </div>
          <div
            style="
              display: inline-block;
              width: 480px;
              height: 360px;
              margin-left: 300px;
              background-color: red;
            "
          >
            <router-view></router-view>
          </div>
        </div>
        <div style="margin-top: 48px">
          <div
            style="
              display: inline-block;
              width: 480px;
              height: 360px;
              margin-left: 240px;
              background-color: pink;
            "
          >
            <router-view></router-view>
          </div>
          <div
            style="
              display: inline-block;
              width: 480px;
              height: 360px;
              margin-left: 300px;
              background-color: red;
            "
          >
            <router-view></router-view>
          </div>
        </div>
      </el-main>
      <el-aside>
        <el-menu
          style="
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-240px);
          "
        >
          <el-menu-item index="1" style="padding: 0 66px"
            >实况数据</el-menu-item
          >
          <el-menu-item index="2" style="padding: 0 66px"
            >预计降水</el-menu-item
          >
          <el-menu-item index="3" style="padding: 0 66px"
            >生活指数</el-menu-item
          >
          <el-menu-item index="4" style="padding: 0 66px"
            >未来天气</el-menu-item
          >
        </el-menu>
      </el-aside>
    </el-container>
    <el-footer>
      <div style="text-align: center; margin: 26px 0 17px 0">每日一言</div>
      <div style="text-align: center">{{ statement }}</div>
    </el-footer>
    <div
      style="
        position: absolute;
        bottom: 0px;
        right: 0px;
        width: 240px;
        text-align: center;
      "
    >
      <div
        style="
          font-size: 30px;
          font-weight: 800;
          height: 120px;
          border: 1px solid #cccccc;
        "
      >
        2021年
      </div>
      <div style="height: 120px; border-left: 1px solid #cccccc">
        <el-icon style="margin: 35px 88px; font-size: 50px" v-if="1 === 1"
          ><Tools
        /></el-icon>
        <el-icon style="margin: 35px 88px; font-size: 50px" v-else-if="1 === 2"
          ><CloseBold
        /></el-icon>
        <el-icon style="margin: 35px 88px; font-size: 50px" v-else
          ><Check
        /></el-icon>
      </div>
    </div>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search, Tools, CloseBold, Check } from '@element-plus/icons-vue'

const value1 = ref(false)
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const searchForm = ref<String>()
const statement = ref<String>('划水！划水！不择手段地划水！——LFSW元立')
const temp = ref<String>('28℃')
const onSubmit = () => {
  console.log('submit!')
}
</script>

<style lang="scss" scoped>
.el-header,
.el-main,
.el-footer,
.el-menu {
  padding-left: 0;
  padding-right: 0;
  background: transparent;
}
.el-header {
  height: 100px;
  border-bottom: 1px solid #cccccc;
  .name {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 210px;
    font-size: 18px;
    padding: 32px 54px;
    text-align: center;
    border: 1px solid #cccccc;
  }
}
.el-menu-item {
  height: 100px;
  font-size: 25px;
  font-weight: 800;
  padding: 35px 64px;
  border: 1px solid #cccccc;
}
.el-menu--horizontal.el-menu {
  border: 0;
}
.el-form--inline .el-form-item {
  margin: 0;
}
.el-footer {
  height: 100px;
  width: 1680px;
  position: absolute;
  bottom: 0px;
  border: 1px solid #cccccc;
}
</style>
