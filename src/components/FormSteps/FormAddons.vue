<template>
  <base-form>
    <template v-slot:form-header>
      <h1>Pick Add-ons</h1>
      <p>Add-ons help enhance your gaming experience</p>
    </template>
    <div class="content">
      <base-select
        v-for="addon in addons"
        :key="addon.title"
        :title="addon.title"
        :description="addon.desctiption"
        :price="addon.price"
        @click="toggleAddon(addon.title)"
        v-model="selectedAddons"
      ></base-select>
    </div>
    <template v-slot:action-buttons>
      <base-button @click="nextForm">Next Step</base-button>
      <base-button @click="previousForm" theme="light">Go back</base-button>
    </template>
  </base-form>
</template>

<script>
export default {
  data() {
    return {
      addons: [
        {
          title: 'Online service',
          desctiption: 'Access to multiplayer games',
          price: 1,
        },
        {
          title: 'Larger storage',
          desctiption: 'Extra 1TB of cloud save',
          price: 2,
        },
        {
          title: 'Customizable Profile',
          desctiption: 'Custom theme on your profile',
          price: 2,
        },
      ],
      selectedAddons: [],
    };
  },
  watch: {},
  methods: {
    toggleAddon(addon) {
      let selected = false;
      for (let i = 0; i < this.selectedAddons.length; i++) {
        if (addon === this.selectedAddons[i]) {
          selected = true;
        }
      }

      //remove
      if (selected) {
        for (let i = 0; i < this.selectedAddons.length; i++) {
          if (addon === this.selectedAddons[i]) {
            this.selectedAddons.splice(i, 1);
          }
        }
      } else {
        //add
        this.selectedAddons.push(addon);
      }
      this.$store.commit('toggleAddon', { addon });
    },
    previousForm() {
      this.$router.back();
    },
    nextForm() {
      this.$router.push('/new/summary');
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
  gap: 1rem;
}
@media only screen and (max-width: 1000px) {
  h1 {
    font-weight: 500;
    font-size: 1.8rem;
  }
  p {
    color: var(--color-light-500);
  }
}
</style>
