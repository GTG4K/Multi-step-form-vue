<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
:root {
  --font-family: 'Ubuntu', sans-serif;
  font-size: 16px;

  /* Primary colors */
  --marine-blue: hsl(213, 96%, 20%);
  --marine-blue-200: hsl(213, 96%, 30%);

  --purplish-blue: hsl(243, 100%, 60%);
  --purplish-blue-200: hsl(243, 100%, 70%);

  --pastel-blue: hsl(228, 100%, 84%);
  --light-blue: hsl(206, 94%, 87%);
  --strawberry-red: hsl(354, 84%, 57%);

  /* Neutral colors */
  --color-light-100: hsl(0, 0%, 100%);
  --color-light-200: hsl(231, 100%, 99%);
  --color-light-300: hsl(217, 100%, 97%);
  --color-light-400: hsl(229, 24%, 87%);
  --color-light-500: hsl(231, 11%, 63%);

  --color-black: hsl(0, 0%, 0%);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--font-family);
}

body {
  background: var(--color-light-400);
}
</style>
