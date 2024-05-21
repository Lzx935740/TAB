# 粒子动画解析用图标说明：
**文字和图标都已按下文天气代码改好文件名**
+ 文字图片在font_cn-png-black/white文件夹下
+ 气象图标图片在font_cn-png-black/white文件夹下
**black字样的是黑色**
**white字样的是白色**

> 使用前注意检查文件名有没有写错，防止调用失败
---
# 天气现象参考
|天气现象|代码|备注|
|---|---|---|
|晴（白天）|CLEAR_DAY|cloudrate < 0.2|
|晴（夜间）|CLEAR_NIGHT|cloudrate < 0.2|
|多云（白天）|PARTLY_CLOUDY_DAY|0.8 >= cloudrate > 0.2|
|多云（夜间）|PARTLY_CLOUDY_NIGHT|0.8 >= cloudrate > 0.2|
|阴|CLOUDY|cloudrate > 0.8|
|轻度雾霾|LIGHT_HAZE|PM2.5 100~150|
|中度雾霾|MODERATE_HAZE|PM2.5 150~200|
|重度雾霾|HEAVY_HAZE|PM2.5 > 200|
|小雨|LIGHT_RAIN|见 [降水强度](https://docs.caiyunapp.com/weather-api/v2/v2.6/tables/precip.html)|
|中雨|MODERATE_RAIN|见 [降水强度](https://docs.caiyunapp.com/weather-api/v2/v2.6/tables/precip.html)|
|大雨|HEAVY_RAIN|见 [降水强度](https://docs.caiyunapp.com/weather-api/v2/v2.6/tables/precip.html)|
|暴雨|STORM_RAIN|见 [降水强度](https://docs.caiyunapp.com/weather-api/v2/v2.6/tables/precip.html)|
|雾|FOG|能见度低，湿度高，风速低，温度低|
|小雪|LIGHT_SNOW|见 [降水强度](https://docs.caiyunapp.com/weather-api/v2/v2.6/tables/precip.html)|
|中雪|MODERATE_SNOW|见 [降水强度](https://docs.caiyunapp.com/weather-api/v2/v2.6/tables/precip.html)|
|大雪|HEAVY_SNOW|见 [降水强度](https://docs.caiyunapp.com/weather-api/v2/v2.6/tables/precip.html)|
|暴雪|STORM_SNOW|见 [降水强度](https://docs.caiyunapp.com/weather-api/v2/v2.6/tables/precip.html)|
|浮尘|DUST|AQI > 150, PM10 > 150，湿度 < 30%，风速 < 6 m/s|
|沙尘|SAND|AQI > 150, PM10> 150，湿度 < 30%，风速 > 6 m/s|
|大风|WIND|