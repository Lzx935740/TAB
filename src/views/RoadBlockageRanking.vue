<template>
  <el-col :span="9" :offset="3">
    <el-row>
      <div style="width: 22vw; border: var(--main-border)"></div>
    </el-row>
    <el-row>
      <div style="width: 22vw; border: var(--main-border)"></div>
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

<script lang="ts" setup></script>

<style lang="scss" scoped>
.el-row {
  height: 50%;
  padding: 3vh 0 2.5vh 0;
}
</style>
