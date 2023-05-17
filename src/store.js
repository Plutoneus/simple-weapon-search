import { createStore } from 'vuex';

export default createStore({
  state: {
    characterStats: {
      str: 0,
      dex: 0,
      int: 0,
      fai: 0,
      arc: 0,
    },
  },
  mutations: {
    updateCharacterStats(state, stats) {
      state.characterStats = stats;
      console.log("UPDATED STATS: ", stats)
    },
  },
});
