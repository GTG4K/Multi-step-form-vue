<template>
  <div class="base-form">
    <div class="content">
      <div class="form-header">
        <slot name="form-header"></slot>
      </div>
      <slot></slot>
    </div>
    <div v-if="width > 1000" class="action-buttons">
      <slot name="action-buttons"></slot>
    </div>
  </div>
  <div v-if="width <= 1000" class="action-buttons">
    <slot name="action-buttons"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
.base-form {
  padding: 1.8rem 6rem;
  width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
.form-header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.action-buttons {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}

@media only screen and (max-width: 1000px) {
  .content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .base-form {
    position: fixed;
    width: calc(100% - 30px);
    height: fit-content;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 0);
    background: var(--color-light-100);
    border-radius: 10px;
    padding: 2rem 1.2rem;
  }
  .action-buttons {
    position: fixed;
    bottom: 0;
    width: 100vw;
    padding: 1rem;
    height: fit-content;
    background: var(--color-light-100);
  }
}
</style>
