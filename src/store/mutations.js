export default {
  updateName(state, payload) {
    state.subscription.name = payload.name;
    console.table(state.subscription);
  },
  updateEmail(state, payload) {
    state.subscription.email = payload.email;
    console.table(state.subscription);
  },
  updateNumber(state, payload) {
    state.subscription.number = payload.number;
    console.table(state.subscription);
  },
  updatePlan(state, payload) {
    state.subscription.plan = payload.plan;
    console.table(state.subscription);
  },
  updatePlanLength(state, payload) {
    state.subscription.planLength = payload.planLength;
    console.table(state.subscription);
  },
  toggleAddon(state, payload) {
    const addons = state.subscription.addons;
    let selected = state.selected;
    const addon = payload.addon;

    let price = 0;
    if (addon === 'Online service') {
      price = 1;
    } else if (addon === 'Larger storage') {
      price = 2;
    } else if (addon === 'Customizable Profile') {
      price = 2;
    }

    selected = false;
    for (let i = 0; i < addons.length; i++) {
      if (addon === addons[i].name) {
        selected = true;
      }
    }

    //remove
    if (selected) {
      for (let i = 0; i < addons.length; i++) {
        if (addon === addons[i].name) {
          console.log('we good');
          addons.splice(i, 1);
        }
      }
    } else {
      //add
      addons.push({ name: addon, price });
    }

    console.table(state.subscription);
  },
};
