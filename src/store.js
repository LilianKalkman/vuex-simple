import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2;
    },
    stringCounter: state => {
      return state.counter + " Clicks";
    }
  },
  mutations: {
    // directly mutates state
    increment: (state, payload) => {
      state.counter += payload;
    },
    decrement: state => {
      state.counter--;
    }
  },
  actions: {
    // hier kan je ook async functions doen
    increment: (context, payload) => {
      context.commit("increment", payload);
    },
    decrement: context => {
      context.commit("decrement");
    }
  }
});
