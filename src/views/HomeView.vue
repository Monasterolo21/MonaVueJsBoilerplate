<!-- TODO: CHANGE CLASS -->
<template>
  <div class="container all-center bck">
    <h1>{{ title }}</h1>
    <p v-motion-slide-bottom>{{ message }}</p>
    <div class="btn-group">
      <div class="btn" @click="sayHello">Fade!</div>
      <div class="btn secondary" @click="toast">Toast!</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Mona VUE Template 🌴",
      message: "",
    };
  },
  methods: {
    sayHello() {
      this.message = "Hello!";
    },
    toast() {
      this.$toast.success("Hello!");
    },
  },
};
</script>
