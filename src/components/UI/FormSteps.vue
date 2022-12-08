<template>
  <aside>
    <img
      v-if="width > 1000"
      src="@/assets/images/bg-sidebar-desktop.svg"
      alt=""
    />
    <img v-else src="@/assets/images/bg-sidebar-mobile.svg" alt="" />
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
      width: window.innerWidth,
    };
  },
  created() {
    window.addEventListener('resize', this.resizeListener);
  },
  methods: {
    resizeListener() {
      this.width = window.innerWidth;
    },
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

@media only screen and (max-width: 1000px) {
  img {
    position: fixed;
    top: 0;

    border-radius: 0;
    width: 100%;
    height: 200px;
    z-index: 0;
    object-fit: cover;
  }
  aside {
    width: 100vw;
  }
  nav {
    flex-direction: row;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
</style>
