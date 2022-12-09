<template>
  <div class="base-text" :class="styleError">
    <div class="tags">
      <label :for="value">{{ label }}</label>
      <span v-if="error.isError"> {{ error.reason }} </span>
    </div>
    <input
      @input="updateValue"
      @blur="storeValue"
      :type="type"
      :id="value"
      :placeholder="placeholder"
      :value="storedValue"
    />
  </div>
</template>

<script>
export default {
  props: ['label', 'value', 'placeholder', 'error', 'modelValue', 'type'],
  emits: ['update:modelValue'],
  data() {
    return {
      storedValue: this.modelValue,
    };
  },
  computed: {
    styleError() {
      return { error: this.error.isError };
    },
  },
  methods: {
    updateValue(e) {
      this.storedValue = e.target.value;
      console.log(this.storedValue);
    },
    storeValue() {
      this.$emit('update:modelValue', this.storedValue);
    },
  },
};
</script>

<style scoped>
.base-text {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
label {
  color: var(--marine-blue);
  font-size: 0.8rem;
  font-weight: 700;
  width: fit-content;
}
input {
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-light-400);
  border-radius: 0.5rem;
  color: var(--marine-blue);
  font-weight: 700;
  outline: none;
  transition: all 0.3s ease;
}
input:hover {
  border-color: var(--purplish-blue-200);
}

input:active,
input:focus {
  border-color: var(--purplish-blue);
}
.error input {
  color: var(--strawberry-red);
  border-color: var(--strawberry-red);
}
span {
  color: var(--strawberry-red);
  width: fit-content;
}
.tags {
  display: flex;
  justify-content: space-between;
}
</style>
