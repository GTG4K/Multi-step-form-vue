<template>
  <div class="switch-body" :class="active" @click="toggleSwitch">
    <div class="switch-toggle"></div>
  </div>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {
      isActive: this.modelValue,
    };
  },
  methods: {
    toggleSwitch() {
      this.isActive = !this.isActive;
      this.$emit('update:modelValue', this.isActive);
    },
  },
  computed: {
    active() {
      return { active: this.isActive };
    },
  },
};
</script>

<style scoped>
.switch-body {
  width: 45px;
  height: 20px;
  border-radius: 10px;
  background: var(--marine-blue);
  position: relative;
}
.switch-toggle {
  position: absolute;
  top: 50%;
  left: 5px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: var(--color-light-100);
  transform: translate(0, -50%);
  transition: all 0.5s ease;
}
.active .switch-toggle {
  left: calc(100% - 5px);
  transform: translate(-100%, -50%);
}
</style>
