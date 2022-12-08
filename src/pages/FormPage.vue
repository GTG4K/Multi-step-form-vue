<template>
  <main>
    <form-steps></form-steps>
    <router-view></router-view>
  </main>
</template>

<script>
import FormSteps from '../components/UI/FormSteps.vue';
export default {
  components: {
    FormSteps,
  },
  created() {
    console.table(this.$store.getters.subscription);
  },
};
</script>

<style scoped>
main {
  display: flex;
  background: var(--color-light-100);
  width: fit-content;
  padding: 1.2rem;
  border-radius: 1.2rem;
  margin: 5rem auto;
}

@media only screen and (max-width: 1000px) {
  main {
    display: block;
    padding: 0;
    margin: 0;
  }
}
</style>
