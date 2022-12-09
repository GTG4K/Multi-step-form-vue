<template>
  <base-form>
    <template v-slot:form-header>
      <h1>Personal info</h1>
      <p>Please provide your name, Email address, and phone number</p>
    </template>
    <div class="content">
      <base-text
        label="Name"
        placeholder="e.g. Tarkhna"
        type="text"
        v-model="name"
        :error="nameError"
      ></base-text>
      <base-text
        label="Email Address"
        placeholder="e.g. Tarkhna@gmail.com"
        type="email"
        v-model="email"
        :error="emailError"
      ></base-text>
      <base-text
        label="Phone Number"
        placeholder="e.g. +1 234 567 890"
        type="number"
        v-model="number"
        :error="numberError"
      ></base-text>
    </div>
    <template v-slot:action-buttons>
      <base-button @click="nextForm">Next Step</base-button>
    </template>
  </base-form>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      number: null,
    };
  },
  created() {
    if (this.$store.getters.getName != null) {
      this.name = this.$store.getters.getName;
    }
    if (this.$store.getters.getEmail != null) {
      this.email = this.$store.getters.getEmail;
    }
    if (this.$store.getters.getNumber != null) {
      this.number = this.$store.getters.getNumber;
    }
  },

  watch: {
    name() {
      this.$store.commit('updateName', { name: this.name });
    },
    email() {
      this.$store.commit('updateEmail', { email: this.email });
    },
    number() {
      this.$store.commit('updateNumber', { number: this.number });
    },
  },
  methods: {
    nextForm() {
      this.$router.push('/new/plan');
    },
  },
  computed: {
    nameError() {
      const name = this.name;
      if (name === null) {
        return { isError: false, reason: '' };
      }

      if (name === '') {
        return { isError: true, reason: 'No empty fields' };
      }
      return { isError: false, reason: '' };
    },
    emailError() {
      const email = this.email;
      if (email === null) {
        return { isError: false, reason: '' };
      }

      if (email.trim() === '') {
        return { isError: true, reason: 'No empty fields' };
      }
      return { isError: false, reason: '' };
    },
    numberError() {
      const number = this.number;
      // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
      if (number === null) {
        return { isError: false, reason: '' };
      }

      // for (let i = 0; i < number.length; i++) {
      //   for (let j = 0; j < numbers.length; j++) {
      //     if (number[i] != numbers[j]) {
      //       return { isError: true, reason: 'Enter a valid number format' };
      //     }
      //   }
      // }

      if (number.trim() === '') {
        return { isError: true, reason: 'No empty fields' };
      }
      return { isError: false, reason: '' };
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
