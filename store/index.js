export const state = () => ({
  style: {},
  xml: null,
})

export const mutations = {
  setStyle(state, value) {
    state.style = value
  },
  setXml(state, value) {
    state.xml = value
  },
}

export const getters = {
  getStyle(state) {
    return state.style
  },
  getXml(state) {
    return state.xml
  },
}
