<template>
  <div class="option" :class="computedStyle">
    <slot></slot>
    <div class="plan-description">
      <h1>{{ computedTitle }}</h1>
      <p>{{ computedPrice }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'price', 'plan', 'active'],
  computed: {
    computedTitle() {
      return this.title;
    },
    computedPrice() {
      const planShort = this.plan === 'yearly' ? 'year' : 'mo';
      if (this.plan === 'yearly') {
        return `$${this.price * 12}/${planShort}`;
      }
      return `$${this.price}/${planShort}`;
    },
    computedStyle() {
      return { active: this.active };
    },
  },
};
</script>

<style scoped>
.option {
  padding: 1rem 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  border-radius: 0.8rem;
  border: 1px solid var(--color-light-400);
  cursor: pointer;
  transition: all 0.3s ease;
}
.option:hover {
  border-color: var(--purplish-blue-200);
}
.plan-description {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.active.option {
  border-color: var(--purplish-blue);
}
h1 {
  font-size: 1rem;
  color: var(--marine-blue);
  font-weight: 700;
}
p {
  font-size: 0.8rem;
  color: var(--color-light-500);
}
</style>
