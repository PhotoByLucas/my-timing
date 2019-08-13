/**
 * home.js
 * 用于home模块的状态管理
 */
const home = {
  state: {
  },
  mutations: {
  },
  actions: {},
  getters: { // 定义getters，可以通过mapGetters拓展函数调用
    number: state => {
      return state.number
    }
  }
}
export default home // 输出home模块
