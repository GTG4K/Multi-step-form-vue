<template>
  <div class="base-form">
    <div class="content">
      <div class="form-header">
        <slot name="form-header"></slot>
      </div>
      <slot></slot>
    </div>
    <div class="action-buttons">
      <slot name="action-buttons"></slot>
    </div>
  </div>
</template>

<script>
export default {};
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
</style>
