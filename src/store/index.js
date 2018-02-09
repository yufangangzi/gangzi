import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const state = {
  totalTime: 0,
  list: [],
  age:45,
  zanNum:0,
  numZAN:0
};
const getters={
  addAge:(state)=>{
      return state.age++
  },
  eventZAN (state){
    state.numZAN++
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

