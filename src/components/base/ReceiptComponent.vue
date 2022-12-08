<template>
  <div class="receipt-item" :class="receiptStyle">
    <h1 class="title">{{ title }}</h1>
    <h1 class="price">{{ price }}</h1>
  </div>
</template>

<script>
export default {
  props: ['title', 'price', 'theme'],
  computed: {
    receiptStyle() {
      return {
        main: this.theme === 'main',
        total: this.theme === 'total',
      };
    },
  },
};
</script>

<style scoped>
.receipt-item {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
}
.main .title {
  font-size: 1.2rem;
  color: var(--marine-blue);
  font-weight: 500;
}
.main .price {
  font-size: 1.2rem;
  color: var(--marine-blue);
  font-weight: 500;
}

.total .price {
  font-size: 1.5rem;
  color: var(--purplish-blue);
  font-weight: 500;
}
.title,
.total .title {
  font-size: 1rem;
  color: var(--color-light-500);
  font-weight: 400;
}
.price {
  font-size: 1rem;
  color: var(--marine-blue);
  font-weight: 400;
}
</style>
