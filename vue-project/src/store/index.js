import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //相当于 data
  state: {
    count: 0,
    num:10,
  },
  getters:{
    result(state) {
      return state.count * state.num;
    },
  },
  //相当于 methods，用来处理同步的方法
  mutations: {
    add(){
      this.state.count++;
    },
    addNum(state, num) {
      state.count += num;
    },
    reduce(state){
      state.count--;
    }
  },
  //用来处理异步的方法
  actions: {
    reduceFun(){
      setTimeout(() => {
        this.commit('reduce')
      }, 1000);
    }
  },
  modules: {
  }
})
