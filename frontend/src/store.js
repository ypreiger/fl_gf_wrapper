import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    airportsList: []
  },
  mutations: {
    setAirportsList(state, list) {
      state.airportsList = list;
    }
  },
  getters: {
    airports: state => state.airportsList
  },
  actions: {}
});
