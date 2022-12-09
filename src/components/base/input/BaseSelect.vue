<template>
  <div class="checkbox-body" :class="computedStyle" @click="toggleCheck">
    <div class="checkbox-details">
      <div class="checkbox">
        <img src="@/assets/images/icon-checkmark.svg" alt="" />
      </div>
      <div class="checkbox-details-text">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </div>
    </div>
    <h2>{{ computedPrice }}</h2>
  </div>
</template>

<script>
export default {
  props: ['title', 'description', 'price', 'modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {
      active: this.modelValue,
    };
  },
  methods: {
    toggleCheck() {
      this.active = !this.active;
    },
  },
  computed: {
    computedPrice() {
      return `+$${this.price}/mo`;
    },
    computedStyle() {
      return { active: this.active };
    },
  },
};
</script>

<style scoped>
.checkbox-body {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  border-radius: 0.8rem;
  border: 1px solid var(--color-light-400);
  cursor: pointer;
  transition: all 0.3s ease;
  height: 90px;
}
.checkbox-body:hover {
  border-color: var(--purplish-blue-200);
}

.checkbox-body.active {
  border-color: var(--purplish-blue);
}
.checkbox-details {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.checkbox-details-text {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.checkbox {
  width: 22px;
  height: 22px;
  border-radius: 0.3rem;
  background: none;
  border: 1px solid var(--color-light-400);
  display: flex;
  align-items: center;
  justify-content: center;
}
.active .checkbox {
  border: none;
  background: var(--purplish-blue);
}
h1 {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--marine-blue);
}

p {
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--color-light-500);
}

h2 {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--purplish-blue);
}
@media only screen and (max-width: 1000px) {
  .checkbox-body {
    height: fit-content;
  }
  .checkbox-details {
    gap: 0.6rem;
  }
  h1 {
    font-size: 1rem;
  }
  p {
    font-size: 0.8rem;
  }
}
</style>
