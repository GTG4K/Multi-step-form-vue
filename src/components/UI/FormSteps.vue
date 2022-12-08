<template>
  <aside>
    <img src="@/assets/images/bg-sidebar-desktop.svg" alt="" />
    <nav>
      <form-step
        v-for="step in steps"
        :key="step.id"
        :stepId="step.id"
        :stepTitle="step.title"
      ></form-step>
    </nav>
  </aside>
</template>

<script>
import FormStep from './FormStep.vue';

export default {
  components: { FormStep },
  data() {
    return {
      steps: [
        { id: 1, title: 'Your Info' },
        { id: 2, title: 'Select Plan' },
        { id: 3, title: 'Add-Ons' },
        { id: 4, title: 'Summary' },
      ],
    };
  },
};
</script>

<style scoped>
aside {
  position: relative;
}
nav {
  position: absolute;
  top: 2rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
}
img {
  border-radius: 1.2rem;
}
</style>
