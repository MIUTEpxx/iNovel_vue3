import { createStore } from 'vuex'

export default createStore({
  state: {
    // 图片的基础 URL
    picUrl: "https://images.sanyeex.top/novelPic/",
    //板块图片的基础 URL
    plateUrl: "https://images.sanyeex.top/novelPicture/",
    //是否显示底部导航栏
    tabBarShow: false,
    //搜索页面的滚动条位置
    searchScroll: 0
  },
  getters: {
  },
  mutations: {
    // 修改是否显示底部导航栏
    setTabBarShow(state, show) {
        state.tabBarShow = show;
      },

    // 修改搜索滚动条位置
    setSearchScroll(state,value) {
      state.searchScroll = value
    }
  },
  actions: {
  },
  modules: {
  }
})
