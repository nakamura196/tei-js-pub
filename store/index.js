export const state = () => ({
  style: {},
  xml: null,
  result: null,
})

export const mutations = {
  setStyle(state, value) {
    state.style = value
  },
  setXml(state, value) {
    state.xml = value
  },
  setResult(state, value) {
    state.result = value
  },
}

export const getters = {
  getStyle(state) {
    return state.style
  },
  getXml(state) {
    return state.xml
  },
  getResult(state) {
    return state.result
  },
}
