import * as types from './mutation-types'

export default {

  addTotalTime({ commit }, time) {
    commit(types.ADD_TOTAL_TIME, time)
  },
  decTotalTime({ commit }, time) {
    commit(types.DEC_TOTAL_TIME, time)
  },
  savePlan({ commit }, plan) {
    commit(types.SAVE_PLAN, plan);
  },
  deletePlan({ commit }, plan) {
    commit(types.DELETE_PLAN, plan)
  },
  changeAge({commit}){
    commit('changeAge')
  },
  reduce({commit}){
    commit('reduce')
  },
  addZAN({commit}){
    commit(types.ADD_ZAN)
  },
  eventZAN({commit},data){
    commit('eventZAN',data)

  }


};
