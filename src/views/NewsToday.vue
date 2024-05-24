<template>
  <el-col :span="9" :offset="3">
    <el-row>
      <div style="width: 22vw; border: var(--main-border); position: relative">
        <el-scrollbar max_height="100%">
          <el-table
            border
            :data="newsTitleList"
            style="width: 100%"
            :show-header="false"
          >
            <el-table-column prop="source" width="80" align="center" />
            <el-table-column prop="title" />
          </el-table>
        </el-scrollbar>
        <el-button
          style="position: absolute; right: 1px; bottom: 1px; z-index: 10000000"
          >f</el-button
        >
      </div>
    </el-row>
    <el-row>
      <div style="width: 22vw; border: var(--main-border)">
        <div
          style="
            border-bottom: 2px solid #bbbbbb;
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
      <div style="width: 22vw"></div>
    </el-row>
    <el-row>
      <div style="width: 22vw; border: var(--main-border)">
        <router-view />
      </div>
    </el-row>
  </el-col>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { newsTitleListType, newsParticularType } from '@/tpyes'
const newsTitleList = ref<newsTitleListType>()
import { getNewTitleListService, getNewsParticularService } from '@/api/roll'
const newsTitleTypeid = ref<number>(532)
const newsTitlePage = ref<number>(1)
const newsParticular = ref<newsParticularType>({ title: '', details: [] })
const getNewsTitleList = async () => {
  const { data } = await getNewTitleListService(
    newsTitleTypeid.value,
    newsTitlePage.value
  )
  newsTitleList.value = data
}

const getNewsParticular = async (news: newsTitleListType) => {
  const { data } = await getNewsParticularService(news.newsId)
  newsParticular.value = { title: news.title, details: data.items }
}

import { onMounted } from 'vue'
onMounted(() => {
  newsTitleTypeid.value = Math.floor(Math.random() * (547 - 532 + 1)) + 532
  getNewsTitleList().then(() => {
    setTimeout(() => {
      getNewsParticular(newsTitleList.value[0])
    }, 1500)
  })
})
</script>

<style lang="scss" scoped>
.el-row {
  height: 50%;
  padding: 3vh 0 2.5vh 0;
}
</style>
