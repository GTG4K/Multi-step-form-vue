<template>
  <button type="button" :class="buttonTheme">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['theme'],
  computed: {
    buttonTheme() {
      return { light: this.theme === 'light', violet: this.theme === 'violet' };
    },
  },
};
</script>

<style scoped>
button {
  color: var(--color-light-100);
  background: var(--marine-blue);
  padding: 0.8rem 1.5rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: 0.8rem;
  border: none;
}
button:hover {
  background: var(--marine-blue-200);
}
button.light {
  color: var(--marine-blue);
  padding: 0.8rem;
  font-weight: 700;
  background: none;
}
button.light:hover {
  color: var(--marine-blue-200);
}

button.violet {
  background: var(--purplish-blue);
}
button.violet:hover {
  background: var(--purplish-blue-200);
}
</style>
