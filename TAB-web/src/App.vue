<script setup lang="ts">
import { zhCn } from 'element-plus/es/locale/index.mjs'
</script>

<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<style scoped></style>
