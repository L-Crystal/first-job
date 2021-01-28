import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curMenu:{
      name:'剧集',
      bgColor:'rgb(117, 38, 38)',
      path:'/menu.path'
    }
  },
  mutations: {
    setCurMenu(state,data){
      state.curMenu = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
