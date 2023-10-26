TODO: CAMBIARE 404
<template>
  <div class="error-page container all-center bck">
    <div class="error-page__container">
      <div class="error-page__container__logo">
        <img src="@/assets/img/logo.png" alt="logo" />
      </div>
      <div class="error-page__container__text">
        <h3>Ops! Something went wrong</h3>
      </div>
      <div class="btn" text="Torna alla home" @click="this.goToHome">
        GO TO HOME
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorView",
  methods: {
    goToHome() {
      this.$router.push({ name: "HomeView" });
    },
  },
};
</script>

<style>
.error-page__container {
  border-radius: 1rem;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.error-page__container__logo {
  width: 100%;
  max-width: 200px;
  margin-bottom: 2rem;
}
.error-page__container__logo img {
  width: 100%;
}
.error-page__container__text {
  margin-bottom: 2rem;
}
</style>
