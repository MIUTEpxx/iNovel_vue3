import Mock from 'mockjs';

// 创建一个包含特定标签的数组
const tags = [
  '奇幻', '武侠', '都市', '言情', '历史', '军事', '科幻', '悬疑', '推理', '游戏','恐怖','修仙','同人','冒险', '宫廷','穿越',
];

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

//模拟小说所有数据
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

    {id:10000002,
    title: '天幕 暗黑丛林', 
    author: '楼笑羽', 
    tags: [{name:'奇幻',id:3}, {name:'科幻',id:2},{name:'推理',id:19}], 
    img_url: '/src/assets/images/2.png',
    publishDate:'2020-04-22',
    summary:'这个世界中，忽然降临了一个名为天幕的小世界！ 在这个天幕世界中，有这各种的机遇和危险！ 而主角千叶在天幕世界中，理解了人性的丑恶，化为魔神！ 开始，屠杀！',
    Likes:11000,
    goldticket:4607,
    views:52000,
    num:2180000},   

    {id:10000003,
    title: '镜之森', 
    author: '（日）大崎梢', 
    tags: [{name:'恐怖',id:17}, {name:'悬疑',id:16}, {name:'校园',id:23}], 
    img_url: '/src/assets/images/7.png',
    publishDate:'2014-08-03',
    summary:'第一次担当班主任的片野厚介，从班上两个调皮的男生那里看到一张神秘的照片，照片中豪华的神社宫殿与狼的雕像让人心生向往。厚介从二人口中得知，他们是在山林间探险时无意中发现这座宫殿的，可周围的人却对此讳莫如深，仿佛那是不祥的事物。踏上山间探险之路的厚介他们，遇到了一群浑身包着白绷带的怪人，这帮人似乎也对神秘的宫殿感兴趣。此后，邻校的美少女、怪异的宗教团体、当地的神职人员等接连卷入这场争夺战。危机一触即发，守护秘密宫殿的人究竟是谁?',
    Likes:11000,
    goldticket:4607,
    views:52000,
    num:2180000},   

    {id:10000004,
    title: '樱花咒之命运的转轮',
    author: '洛涟漪',
    tags: [{name:'言情', id:25}, {name:'同人', id:7}, {name:'都市', id:1}],
    img_url: '/src/assets/images/5.png',
    publishDate:'已完结',
    summary:'高仓思樱，一个天生红瞳的女孩，与少年间的情感纠葛，面对家族诅咒和命运的挑战。',
    Likes:11000,
    goldticket:4607,
    views:52000,
    num:2180000},

    {id: 10000005,
    title: '梦幻仙途',
    author: '梦笔生花',
    tags: [{name:'玄幻', id:11}, {name:'修仙', id:5}, {name:'冒险', id:22}],
    img_url: '/src/assets/images/9.png',
    publishDate: '2022-06-15',
    summary: '在一个名为梦幻大陆的世界里，主角林轩偶得神秘玉佩，从此踏上了修仙之路，历经千难万险，只为追寻那传说中的永生之谜。',
    Likes:11000,
    goldticket:4607,
    views:52000,
    num:2180000},

    {id: 10000006,
    title: '月影星尘',
    author: '夜空中最亮的星',
    tags: [{name:'玄幻', id:11}, {name:'言情', id:25}, {name:'修仙', id:5}],
    img_url: '/src/assets/images/8.png',
    publishDate: '2023-01-10',
    summary: '在星辰璀璨的修真世界，少年月影偶得星尘传承，与命运中的她相遇相知，共同演绎一段跨越时空的爱恋与奋斗。',
    Likes:11000,
    goldticket:4607,
    views:52000,
    num:2180000},

    {id: 10000007,
    title: '清晏',
    author: '碧波荡漾',
    tags: [{name:'历史', id:20}, {name:'言情', id:25}, {name:'宫斗', id:8}],
    img_url: '/src/assets/images/6.png',
    publishDate: '2021-09-20',
    summary: '在古代宫廷的深处，清晏公主的命运如同她的名字一般，清澈而宁静。然而，宫廷的权力斗争和爱情的纠葛，却让她的人生之路充满了波澜。',
    Likes:11000,
    goldticket:4607,
    views:52000,
    num:2180000},

    {id: 10000008,
    title: '腹黑郡王妃',
    author: '紫烟飘渺',
    tags: [{name:'穿越', id:6}, {name:'言情', id:25}, {name:'宫廷', id:12}],
    img_url: '/src/assets/images/10.png',
    publishDate: '2022-01-15',
    summary: '她，现代女强人，意外穿越成为腹黑郡王的王妃。面对王府的明争暗斗，她凭借智慧和勇气，一步步站稳脚跟，最终赢得了郡王的真心与尊重。',
    Likes:11000,
    goldticket:4607,
    views:52000,
    num:2180000},

    {id: 10000009,
    title: '万古战纪',
    author: '虚空辰曲',
    tags: [{name: '穿越', id: 6},{name: '修仙', id: 5},{name: '奇幻', id: 3},{name: '武侠', id: 4}],
    
    img_url: '/src/assets/images/11.png',
    publishDate: '2022-01-15',
    summary: '吾本凡人叹浮生，一曲凡音诉苍生；世事变迁待几时？凡人依旧醉红尘。星河斗转虚空谱，宇内奏鸣星辰曲；浊酒沉浮世事空，月隐苍茫万古情。一曲战歌青冥血，红颜盼首青丝雪；当时柔情今何在？不老仙神空幻梦。青丝化雪道成空，空悲切！谈何前世今生轮回事？何来羡仙神？猜不透的凡尘，这世间事谁能了？……唉……一声叹息万般休，哈哈哈哈！叹叹叹！星河斗转，岁月如梭；一眼苍茫，万古皆空。',
    Likes:11000,
    goldticket:4607,
    views:52000,
    num:2180000},

]
// const imgs=[
//     '/src/assets/images/1.jpg','/src/assets/images/2.jpg','/src/assets/images/3.jpg','/src/assets/images/4.jpg','/src/assets/images/5.jpg','/src/assets/images/6.jpg','/src/assets/7.jpg','/src/assets/images/8.jpg','/src/assets/images/9.jpg'
// ]

// 设置 Mock.js 的响应延时
// Mock.setup({
//     timeout: '200-600'
//   });

// 使用 Mock.mock 来模拟获取所有小说标签的接口
Mock.mock('/novelTags', 'get', () => {
    // 返回包含所有标签的响应
    return {
      'status': 'success', // 假设所有请求都成功
      'message': '获取小说标签成功', // 成功消息
      'data': tags2 // 返回 tags 数组作为数据
    };
  });



// 模拟获取所有小说基本信息的接口
Mock.mock('/novelsInfo', 'get', () => {
    // console.log("2333333");
    return ({
      'status': 'success',
      'message': '获取小说信息成功',
      'data': novels
    });
});

// 模拟的根据标签id获取小说信息的API
Mock.mock(/\/novelsByTag(.*)/, 'get', (options) => {
    // console.log(options);
    // console.log(options.url);
    const tag = parseInt(options.url.split('?')[1].split('=')[1], 10); // 从URL中提取标签参数并转换为整数
    // const tag1 = tag ? decodeURIComponent(tag) : null;//将乱码转为中文
    console.log(typeof(tag));
    const filteredNovels = novels.filter(novel => 
      novel.tags.some(tagObj => tagObj.id === tag)
    );

    return {
      status: 'success',
      message: '获取小说信息成功',
      data: filteredNovels // 如果没有找到，则返回空对象
    };
  });
  
  // 模拟的根据ID获取小说信息的API
  Mock.mock(/\/novelById(.*)/, 'get', (options) => {
    console.log(options);
    const id = parseInt(options.url.split('?')[1].split('=')[1]); // 从URL中提取ID参数
    const novel = novels.find(novel => novel.id === id);
    return {
      status: 'success',
      message: '获取小说信息成功',
      data: novel || {} // 如果没有找到，则返回空对象
    };
  });
  // 导出 Mock 数据，以便在其他地方使用
export default Mock;