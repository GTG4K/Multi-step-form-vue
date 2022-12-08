<template>
  <div class="form-step" :class="active">
    <span>{{ stepId }}</span>
    <div class="form-details">
      <h1>{{ step }}</h1>
      <p>{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stepId', 'stepTitle'],
  data() {
    return {
      currentStepId: null,
    };
  },
  created() {
    this.getRoute();
  },
  watch: {
    $route() {
      this.getRoute();
    },
  },
  computed: {
    step() {
      return `STEP ${this.stepId}`;
    },
    title() {
      return this.stepTitle.toUpperCase();
    },
    active() {
      return { active: Number(this.stepId) === this.currentStepId };
    },
  },
  methods: {
    getRoute() {
      const path = this.$route.path;
      const [, , current] = path.split('/');

      switch (current) {
        case 'info':
          this.currentStepId = 1;
          break;
        case 'plan':
          this.currentStepId = 2;
          break;
        case 'addons':
          this.currentStepId = 3;
          break;
        case 'summary':
          this.currentStepId = 4;
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style scoped>
.form-step {
  display: flex;
  gap: 1.2rem;
  align-items: center;
}
.form-details {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
span {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-light-100);
  font-weight: 700;
  font-size: 1.1rem;
  border: 1px solid;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
.active span {
  color: var(--color-black);
  background: var(--light-blue);
  border-color: var(--pastel-blue);
}

h1 {
  color: var(--color-light-400);
  font-size: 0.9rem;
  font-weight: 300;
}
p {
  color: var(--color-light-100);
  font-weight: 700;
}
@media only screen and (max-width: 1000px) {
  .form-details {
    display: none;
  }
}
</style>
