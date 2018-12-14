export default {
  getProjectTitle (state) {
    return state.data.title
  },
  getTrajetos (state) {
    return state.data.trajetos
  },
  getCurrentTrajeto (state) {
    return state.currentTrajeto
  },
  getCurrentMarkers (state) {
    return state.currentMarkers
  }
}
