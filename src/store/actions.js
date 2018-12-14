// import { L } from 'vue2-leaflet'

export default {
  loadJSON ({ commit, state }) {
    console.log('state', state)
  },
  setCurrentTrajeto ({state}, data) {
    state.data.currentTrajeto = data
  },
  fetchTrajeto ({state}, id) {
    return state.data.trajetos[id] || false
  },
  setCurrentMarkers ({state, commit}, pontos) {
    commit('set_current_markers', pontos)
  }
}
