# iNovel 基于vue3的在线小说阅读App前端项目

#### web前端/移动端适配/Vue3.2+Vite+Vant4+mockjs+Axios

系统设计与开发实践个人项目练习

本项目开始时间:2024-09-25

## 运行项目

在项目文件夹中执行以下命令:

```cmd
#安装依赖
npm install

#运行
npm run dev
```



## 页面效果展示

**总览动态图**

![](public/GIF 2024-10-4 22-22-06.gif)

![](https://github.com/MIUTEpxx/iNovel_vue3/blob/main/public/GIF%202024-10-4%2022-22-06.gif)

**新增:搜索结果页面**

![](public/GIF 2024-10-9 11-18-42.gif)

![](https://github.com/MIUTEpxx/iNovel_vue3/blob/main/public/GIF%202024-10-9%2011-18-42.gif)

## 目前已完成目标

主要页面的布局和样式

小说搜索

vuex管理底部导航栏的显示

vue-router携带id路由

小说基础信息数据结构

标签信息数据结构

简单的小说阅读器

向后端请求小说基础信息的API

mockjs模拟后端接口,拦截Axios请求

根据标签id,小说id请求对应小说基础信息数据

根据已选择的喜好标签筛选小说

## 待实现目标

用户账号系统

社区系统

福利系统

小说正文和章节数据的获取

热门小说排行算法

## 注意

**小说标签数据和小说基础信息数据储存在mockjs/index.js中:**

```js
const tags2 =[
  {name:'都市',id:1,flag:false},
  {name:'科幻',id:2,flag:false},
  {name:'奇幻',id:3,flag:false},
  {name:'武侠',id:4,flag:false},
  {name:'修仙',id:5,flag:false},
  {name:'穿越',id:6,flag:false},
  {name:'同人',id:7,flag:false},
  {name:'宫斗',id:8,flag:false},
  {name:'末世',id:9,flag:false},
  {name:'魔幻',id:10,flag:false},
  {name:'玄幻',id:11,flag:false},
  {name:'宫廷',id:12,flag:false},
  {name:'纯爱',id:13,flag:false},
  {name:'沙雕',id:14,flag:false},
  {name:'日常',id:15,flag:false},
  {name:'悬疑',id:16,flag:false},
  {name:'恐怖',id:17,flag:false},
  {name:'游戏',id:18,flag:false},
  {name:'爽文',id:19,flag:false},
  {name:'历史',id:19,flag:false},
  {name:'推理',id:19,flag:false},
  {name:'冒险',id:19,flag:false},
]
const novels = [
    {id:10000001,
    title: '荡魔途', 
    author: '4396y', 
    tags: [{name:'奇幻',id:3}, {name:'武侠',id:4}, {name:'修仙',id:5}], 
    img_url: '/src/assets/images/1.png',
    publishDate:'2021-03-28',
    summary:'杨凡无意间穿越到异世荒天大陆，这是一片属于修行者的世界，一切实力为尊，两世为人以身契魔，誓荡尽天下魔——多年后忆往昔峥嵘岁月，三十年太久只争朝夕。',
    Likes:13000,
    goldticket:6607,
    views:42000,
    num:4650000},
...
    }
```

**所有界面的样式均位于src\assets\css\index.css中**

## 关于为什么做移动端?

原本是想做pc端小说网站的,但是想想这年头身边朋友用电脑看电子小说的几乎没有,包括我自己,更多的是用移动设备,毕竟随时随地都能用手机看小说来打发时间

用专业点的说法就是:根据对目标用户进行的市场需求分析可知,相比pc端的小说网站,移动端小说网站具有便利性,快捷性,更受用户青睐

------

叠甲:由于我专业是c++视觉计算方向,此前关于前端的知识止步于前端三件套基础(html,css,js),为了完成该项目,我花了半个月不到的恶补了前后端相关知识技术,因此虽然我已经尽力了,但不得不说该项目做得很烂完成度较低,后续我会再接再厉完善该项目
