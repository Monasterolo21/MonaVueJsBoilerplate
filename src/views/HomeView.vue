<!-- TODO: CHANGE CLASS -->
<template>
  <div class="container all-center bck">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <div class="btn" @click="sayHello">Click me!</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "My Vue.js App",
      message: "",
    };
  },
  methods: {
    sayHello() {
      this.message = "Hello!";
    },
  },
};
</script>
