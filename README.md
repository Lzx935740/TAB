# Travel Advice Board——TAB：智慧出行建议面板
出门记得看赛博老黄历(doge)


# 项目说明：
---
本项目是一个基于Vue的前端web界面，旨在为用户出门提供当日的相关信息（如天气、交通、万年历等）

# 快速部署：
---
参考文献：
[快速上手 | Vue.js (vuejs.org)](https://cn.vuejs.org/guide/quick-start.html)
1. 首先安装[Node.js](https://nodejs.org/en)(18.3 或更高版本)
2. 在项目文件夹运行cmd等命令行
3. 运行指令：
    ```bash
    npm install
    npm run dev
    ```
4. 访问 http://localhost:5173/

# 版面介绍：
---
Web页面内容也可以分为四个板块：
右侧两块板块负责显示天气相关信息，其中右侧上部只负责显示实时天气图标，下部可切换四个与天气相关的模块：

# 项目功能：
---
## 天气信息展示
> 数据来源：[彩云天气API](https://caiyunapp.com/index.html#api)

对于经常出门的人来说，户外的天气信息是必须密切关注的，所以本项目单独为了天气信息开了专门的版面（整个右侧面板）
### 实时天气：
根据当前的天气现象显示与之相对的天气图标，由于信息权重高，实时天气面板占据了整个右上角面板。
### 实况数据：
详细展示当前的各项数据，如体感温度，相对湿度等
### 预计降水：
展示未来6小时内的降水概率和气象预警信息
### 生活指数：
展示彩云天气提供的先关指数（如舒适度指数，感冒指数，洗车指数等）

## 今日新闻：
> 数据来源：[ROLL_API-每日最新新闻](https://www.mxnzp.com/doc/detail?id=12)
### 新闻标题：
展示本日的部分新闻标题和新闻来源
### 新闻内容
展示新闻的正文

## 万年历：
> 数据来源：[ROLL_API-节假日/万年历](https://www.mxnzp.com/doc/detail?id=1)

### 日历
展示本月的日历列表
### 本日万年历
展示今日的相关信息

## 每日一言
> 数据来源：[ROLL_API-每日一句 ](https://www.mxnzp.com/doc/detail?id=25)

位于页脚，生成本日的每日一句话


# 技术实现
---
本项目基于[Vue.js](https://cn.vuejs.org/)框架搭建，使用[ Element Plus ](https://element-plus.org/zh-CN/)组件进行前端布局

## 开发环境：
+ [Node.js](https://nodejs.org/en/)（18.3 或更高版本）
+ [Vue.js](https://cn.vuejs.org/)（Vue3版本）

## 使用语言：
+ CSS
+ HTML
+ TypeScript

# 项目理想使用场景示例
---
## 1. 作为智能家居的出行建议页面使用

## 2. 作为桌面副屏使用

---
古人出门看老黄历，当代人出门看赛博老黄历（乐）