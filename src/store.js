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
    },
    counter: state => {
      return state.counter;
    }
  },
  mutations: {
    // directly mutates state
    increment: (state, payload) => {
      state.counter += payload;
    },
    decrement: (state, payload) => {
      state.counter -= payload;
    },
    updateCounter: (state, payload) => {
      state.counter = payload;
    }
  },
  actions: {
    // hier kan je ook async functions doen
    increment: (context, payload) => {
      context.commit("increment", payload);
    },
    decrement: (context, payload) => {
      context.commit("decrement", payload);
    },
    update: (context, payload) => {
      context.commit("updateCounter", payload);
    }
  }
});
