1. 使用IP地址获取地理信息（只能到市级）
	里面给了所在城市范围的左下右上对标对
2. 如果非高德坐标系需要转换
3. //通过城市查询获取行政区边界（用来给交通路况查询画矩形边框）

---
# 需要的额API手册
WebAPI：https://lbs.amap.com/api/webservice/summary

jsAPI:https://lbs.amap.com/api/javascript-api-v2/summary

~~LocalAPI（数据可视化）：~~//已放弃，无法使用
https://lbs.amap.com/api/loca-v2/intro

---
# 矩形区域内交通态势查询：
https://lbs.amap.com/api/webservice/guide/api-advanced/traffic-situation-inquiry
有配额限制，每小时查一次或每15分钟查一次
输出是xml或json

---
# 背景地图jsAPI脚本
https://lbs.amap.com/demo/javascript-api-v2/example/map-lifecycle/map-show

初始化地图
```javascript
    var map = new AMap.Map("container", {
        zoom:17,
        pitch:50,//这个视角就行了
        showBuildingBlock: true,
        showIndoorMap:false,
        showLabel:false,//隐藏文字
        mapStyle:'amap://styles/light',//light是白天用，dark是晚上用
        center:[116.472268,39.995693],
        features:['bg','point','road'],
        viewMode:'3D',
	    buildingAnimation:true,//楼块出现是否带动画
    })
```
---
贴地呼吸点地图（ScatterLayer 贴地呼吸点）
[概述-LOCA 数据可视化 API 2.0|高德地图API (amap.com)](https://lbs.amap.com/api/loca-v2/intro)
[深圳高峰期路口-贴地点-示例详情-Loca API 2.0 | 高德地图API (amap.com)](https://lbs.amap.com/demo/loca-v2/demos/cat-scatter/sz-road)
## 总结：做不到，老老实实调用路况地图吧。
---
# 实时交通图层
https://lbs.amap.com/api/javascript-api-v2/guide/layers/official-layers#t3
视角
```javascript
 var map = new AMap.Map('container', {
        center: [116.397428, 39.90923],
        zoom: 10
    });
```
实时路况图层
```javascript
    var trafficLayer = new AMap.TileLayer.Traffic({
        zIndex: 10,
        zooms: [7, 22],
    });

    trafficLayer.setMap(map);

    var isVisible = true;
    function toggle() {
        if (isVisible) {
            trafficLayer.hide();
            isVisible = false;
        } else {
            trafficLayer.show();
            isVisible = true;
        }
    }
```