export const state = () => ({
  counter: 0,
  perSecond: 0
});

export const mutations = {
  INCREMENT_COUNT (state, value) {
    state.counter += value;
  },
  INCREMENT_PER_SECOND (state, value) {
    state.perSecond += value;
  }
};

export const actions = {
  increment({commit}, value){
  commit('INCREMENT_COUNT', value);
  },

  incrementPerSecond({commit}, value){
  commit('INCREMENT_PER_SECOND', value);
  }
};
