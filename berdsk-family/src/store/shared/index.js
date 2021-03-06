export default {
  // State ---------------------------------------------------
  state: {
    loading: false,
    error: null
  },
  // Mutations ---------------------------------------------------
  mutations: { // to change state
    setLoading:
      (state, payload) => {
        state.loading = payload
      },
    setError:
      (state, payload) => {
        state.error = payload
      },
    clearError:
      (state) => {
        state.error = null
      }
  },
  // Actions ---------------------------------------------------
  actions: { // specify the mutation
    clearError:
      ({commit}) => {
        commit('clearError')
      },
    setError:
      ({commit}, payload) => {
        commit('setError', payload)
      }
  },
// Getters  ---------------------------------------------------
  getters: {
    loading:
      state => {
        return state.loading
      },
    error:
      state => {
        return state.error
      }
  }
}
