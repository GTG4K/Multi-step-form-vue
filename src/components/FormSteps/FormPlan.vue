<template>
  <base-form>
    <template v-slot:form-header>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing</p>
    </template>
    <div class="content">
      <div class="selectors">
        <base-option
          title="Arcade"
          price="9"
          :plan="selectedPlan"
          @click="selected('Arcade')"
          :active="selectedOption === 'Arcade'"
        >
          <img src="@/assets/images/icon-arcade.svg" alt="" />
        </base-option>
        <base-option
          title="Advanced"
          price="12"
          :plan="selectedPlan"
          @click="selected('Advanced')"
          :active="selectedOption === 'Advanced'"
        >
          <img src="@/assets/images/icon-advanced.svg" alt="" />
        </base-option>
        <base-option
          title="Pro"
          price="15"
          :plan="selectedPlan"
          @click="selected('Pro')"
          :active="selectedOption === 'Pro'"
        >
          <img src="@/assets/images/icon-pro.svg" alt="" />
        </base-option>
      </div>
      <div class="plan-switch">
        <h2 :class="{ active: !planSwitch }">Monthly</h2>
        <base-switch v-model="planSwitch"></base-switch>
        <h2 :class="{ active: planSwitch }">Yearly</h2>
      </div>
    </div>
    <template v-slot:action-buttons>
      <base-button @click="nextForm">Next Step</base-button>
      <base-button @click="previousForm" theme="light">Go back</base-button>
    </template>
  </base-form>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: null,
      planSwitch: true,
    };
  },
  created() {
    if (this.$store.getters.getPlan) {
      this.selectedOption = this.$store.getters.getPlan;
    }
    this.$store.getters.getPlanLength === 'monthly'
      ? (this.planSwitch = false)
      : (this.planSwitch = true);
  },
  watch: {
    planSwitch() {
      this.$store.commit('updatePlanLength', {
        planLength: this.planSwitch ? 'yearly' : 'monthly',
      });
    },
  },
  methods: {
    selected(option) {
      this.selectedOption = option;
      this.$store.commit('updatePlan', { plan: this.selectedOption });
    },
    previousForm() {
      this.$router.back();
    },
    nextForm() {
      if (this.selectedOption) {
        this.$router.push('/new/addons');
      }
    },
  },
  computed: {
    selectedPlan() {
      return this.planSwitch ? 'yearly' : 'monthly';
    },
  },
};
</script>

<style scoped>
h1 {
  color: var(--marine-blue);
  font-weight: 700;
  font-size: 2.2rem;
}
h2 {
  color: var(--color-light-500);
  font-weight: 500;
  font-size: 1rem;
}
h2.active {
  color: var(--marine-blue);
}
p {
  color: var(--color-light-500);
}

img {
  width: 40px;
  height: 40px;
}
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.selectors {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}
.plan-switch {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-light-300);
  padding: 0.5rem;
  border-radius: 8px;
  gap: 1rem;
}
@media only screen and (max-width: 1000px) {
  h1 {
    font-weight: 500;
    font-size: 1.8rem;
  }
  p {
    color: var(--color-light-500);
  }
  .selectors {
    grid-template-columns: 1fr;
  }
}
</style>
