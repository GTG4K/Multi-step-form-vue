<template>
  <base-form>
    <div class="content">
      <img src="@/assets/images/icon-thank-you.svg" alt="" />
      <div class="thank-you">
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremGaming.gg.
        </p>
      </div>
    </div>
  </base-form>
</template>

<script>
export default {};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
.thank-you {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
h1 {
  color: var(--marine-blue);
}
p {
  color: var(--color-light-500);
  text-align: center;
}
</style>
