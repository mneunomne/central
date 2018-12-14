import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import data from '../../static/central.json'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    data: data,
    currentTrajeto: {},
    currentMarkers: [],
    currentPonto: {}
  },
  actions,
  getters,
  mutations,
  strict: debug
})
