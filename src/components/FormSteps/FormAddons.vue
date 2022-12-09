<template>
  <base-form>
    <template v-slot:form-header>
      <h1>Pick Add-ons</h1>
      <p>Add-ons help enhance your gaming experience</p>
    </template>
    <div class="content">
      <base-select
        :title="addons[0].title"
        :description="addons[0].desctiption"
        :price="addons[0].price"
        @click="toggleAddon(addons[0].title)"
        v-model="onlineService"
      ></base-select>
      <base-select
        :title="addons[1].title"
        :description="addons[1].desctiption"
        :price="addons[1].price"
        @click="toggleAddon(addons[1].title)"
        v-model="largerStorage"
      ></base-select>
      <base-select
        :title="addons[2].title"
        :description="addons[2].desctiption"
        :price="addons[2].price"
        @click="toggleAddon(addons[2].title)"
        v-model="customizableProfile"
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
      onlineService: false,
      largerStorage: false,
      customizableProfile: false,
      selectedAddons: [],
    };
  },
  created() {
    const vuexAddons = this.$store.getters.getAddons;
    for (const addon of vuexAddons) {
      if (addon.name === 'Online service') {
        this.onlineService = true;
      }
      if (addon.name === 'Larger storage') {
        this.largerStorage = true;
      }
      if (addon.name === 'Customizable Profile') {
        this.customizableProfile = true;
      }
    }
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
