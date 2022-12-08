export default {
  subscription(state) {
    return state.subscription;
  },
  getName(state) {
    return state.subscription.name;
  },
  getEmail(state) {
    return state.subscription.email;
  },
  getNumber(state) {
    return state.subscription.number;
  },
  getPlan(state) {
    return state.subscription.plan;
  },
  getPlanLength(state) {
    return state.subscription.planLength;
  },
  getAddons(state) {
    return state.subscription.addons;
  },
};
