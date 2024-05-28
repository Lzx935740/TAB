<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'
import AMapLoader from '@amap/amap-jsapi-loader'

let map: any = null

onMounted(() => {
  ;(window as any)._AMapSecurityConfig = {
    securityJsCode: '76246756a559a952352375e4d4826575'
  }
  AMapLoader.load({
    key: 'ef0a797ea050c156dd2434ecab7c0d83', // 申请好的Web端开发者Key，首次调用 load 时必填
    version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ['AMap.Scale'] //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
  })
    .then((AMap) => {
      map = new AMap.Map('container', {
        zoom: 17,
        pitch: 50, //这个视角就行了
        showBuildingBlock: true,
        showIndoorMap: false,
        showLabel: false, //隐藏文字
        mapStyle: 'amap://styles/light', //light是白天用，dark是晚上用
        features: ['bg', 'point', 'road'],
        viewMode: '3D',
        buildingAnimation: true //楼块出现是否带动画
      })
    })
    .catch((e) => {
      console.log(e)
    })
})

onUnmounted(() => {
  ;(map as any)?.destroy()
})
</script>

<template>
  <div id="container"></div>
</template>

<style lang="scss" scoped>
#container {
  width: 100vw;
  height: 100vh;
  position: absolute;
}
</style>
