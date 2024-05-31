<template>
  <el-col :span="9" :offset="3">
    <el-row>
      <div style="width: 22vw; border: var(--main-border); position: relative; background: rgba(255, 255, 255, 0.6);">
        <el-scrollbar max_height="100%">
          <el-table
            border
            :data="newsTitleList"
            style="width: 100%"
            :show-header="false"
            @row-click="getNewsParticular"
          >
            <el-table-column style="background: rgba(255, 255, 255, 0.6);" prop="source" width="80" align="center" />
            <el-table-column style="background: rgba(255, 255, 255, 0.6);" prop="title" />
          </el-table>
        </el-scrollbar>
        <el-button
          style="position: absolute; right: 5px; bottom: 5px; z-index: 10000000; font-size: 3.5vh; height: 2.4vw; width: 2.4vw; background: rgba(255, 255, 255, 0.6);"
          :icon="RefreshLeft" @click="reGetNewsTitleList"></el-button
        >
      </div>
    </el-row>
    <el-row>
      <div style="background: rgba(255, 255, 255, 0.6); width: 22vw; border: var(--main-border)">
        <div
          style="
            border-bottom: var(--main-border);
            height: 20%;
            font-weight: 800;
            font-size: 140%;
            text-align: center;
          "
        >
          {{ newsParticular.title }}
        </div>
        <div style="height: 80%">
          <el-scrollbar max_height="80%">
            <div
              v-for="item of newsParticular.details"
              :key="item"
              style="height: auto; font-size: 1.4vh"
            >
              <p>
                <img
                  v-if="item.type === 'img'"
                  :src="item.imageUrl"
                  style="width: 22vw"
                />
              </p>
              <p>
                <div v-if="item.type === 'text'">
                  {{ item.content }}
                </div>
              </p>
            </div>
          </el-scrollbar>
        </div>
      </div>
    </el-row>
  </el-col>

  <el-col :span="11" :offset="1">
    <el-row>
      <div style="width: 22vw">
        <DynamicLogo />
      </div>
    </el-row>
    <el-row>
      <div style="background: rgba(255, 255, 255, 0.6);width: 22vw; border: var(--main-border)">
        <router-view />
      </div>
    </el-row>
  </el-col>
</template>

<script lang="ts" setup>
import DynamicLogo from './components/DynamicLogo.vue'
import { RefreshLeft } from '@element-plus/icons-vue'
import { ref } from 'vue'
import type { newsTitleListType, newsParticularType } from '@/types';
const newsTitleList = ref<newsTitleListType[]>([])
import { getNewTitleListService, getNewsParticularService } from '@/api'
const newsTitleTypeid = ref<number>(532)
const newsTitlePage = ref<number>(1)
const newsParticular = ref<newsParticularType>({ title: '', details: [{ type: '', content: '', imageUrl: '', videoUrl: '' }] })
const getNewsTitleList = async () => {
  const { data } = await getNewTitleListService(
    newsTitleTypeid.value,
    newsTitlePage.value
  )
  newsTitleList.value = data
}

const getNewsParticular = async (row: any) => {
  const { data } = await getNewsParticularService(row.newsId)
  newsParticular.value = { title: row.title, details: data.items }
}


import { onMounted } from 'vue'
onMounted(() => {
  newsTitleTypeid.value = Math.floor(Math.random() * (547 - 532 + 1)) + 532
  getNewsTitleList().then(() => {
    setTimeout(() => {
      getNewsParticular(newsTitleList.value[0])
    }, 1000)
  })
})

const reGetNewsTitleList = () => {
  if (newsTitlePage.value >= 5) {
    newsTitlePage.value = 1
    newsTitleTypeid.value = Math.floor(Math.random() * (547 - 532 + 1)) + 532
    getNewsTitleList().then(() => {
      setTimeout(() => {
        getNewsParticular(newsTitleList.value[0])
      }, 1000)
    })
  } else {
    newsTitlePage.value += 1
    getNewsTitleList().then(() => {
      setTimeout(() => {
        getNewsParticular(newsTitleList.value[0])
      }, 1000)
    })
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  height: 50%;
  padding: 3vh 0 2.5vh 0;
  :deep(.el-table__expanded-cell) {
    background-color: transparent !important;
  }

  :deep(.el-table th),
  :deep(.el-table tr),
  :deep(.el-table td) {
    background-color: transparent;
  }
}
</style>
