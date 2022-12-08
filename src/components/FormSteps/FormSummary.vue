<template>
  <base-form>
    <template v-slot:form-header>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
    </template>
    <div class="content">
      <div class="receipt">
        <receipt-component
          :title="mainPlanHeader"
          :price="mainPlanPrice"
          theme="main"
        ></receipt-component>
        <div class="separator"></div>
        <receipt-component
          v-for="addon in getAddons"
          :key="addon.name"
          :title="addon.name"
          :price="addon.price"
        ></receipt-component>
      </div>
      <receipt-component
        title="Total (per month)"
        :price="totalPrice"
        theme="total"
      ></receipt-component>
    </div>
    <template v-slot:action-buttons>
      <base-button @click="nextForm" theme="violet">Submit Form</base-button>
      <base-button @click="previousForm" theme="light">Go back</base-button>
    </template>
  </base-form>
</template>

<script>
import ReceiptComponent from '../base/ReceiptComponent.vue';

export default {
  data() {
    return {
      plan: {
        Arcade: 9,
        Advanced: 12,
        Pro: 15,
      },
    };
  },
  components: {
    ReceiptComponent,
  },
  methods: {
    previousForm() {
      this.$router.back();
    },
    nextForm() {
      this.$router.push('/new/summary');
    },
  },
  computed: {
    getAddons() {
      const addOns = this.$store.getters.getAddons;
      const newAddOns = [];

      for (let i = 0; i < addOns.length; i++) {
        const returnValue = `${addOns[i].name}`;
        const newPrice = `+${addOns[i].price}/mo`;
        newAddOns.push({ name: returnValue, price: newPrice });
      }

      return newAddOns ? newAddOns : { name: 'nothin', price: 0 };
    },
    mainPlanHeader() {
      const subscription = this.$store.getters.subscription;
      const returnValue = `${subscription.plan} (${subscription.planLength})`;
      return returnValue;
    },
    mainPlanPrice() {
      const subscription = this.$store.getters.subscription;
      const price = this.plan[subscription.plan];

      return `+${price}/mo`;
    },
    totalPrice() {
      const addOns = this.$store.getters.getAddons;
      const subscription = this.$store.getters.subscription;
      const price = this.plan[subscription.plan];

      let total = price;
      for (let i = 0; i < addOns.length; i++) {
        total += addOns[i].price;
      }

      return `+${total}/mo`;
    },
  },
};
</script>

<style scoped>
h1 {
  color: var(--marine-blue);
  font-weight: 700;
  font-size: 2.2rem;
}
p {
  color: var(--color-light-500);
}
.content {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.receipt {
  background: var(--color-light-300);
  border-radius: 8px;
}
.separator {
  background: var(--color-light-400);
  width: calc(100% - 2rem);
  margin: auto;
  height: 1px;
}
</style>
