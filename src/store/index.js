import { createStore } from 'vuex';

import mutations from './mutations.js';
import getters from './getters.js';
import actions from './actions.js';

const store = createStore({
  state() {
    return {
      subscription: {
        name: null,
        email: null,
        number: null,
        plan: null,
        planLength: 'monthly',
        addons: [],
      },
      selected: false,
    };
  },
  mutations,
  getters,
  actions,
});

export default store;
