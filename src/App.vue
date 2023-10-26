<template>
  <transition name="fade" appear>
    <router-view v-slot="{ Component }">
      <transition name="fade" @before-enter="scrollTop" mode="out-in" appear>
        <keep-alive include="HomeView">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </transition>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import "css/animation.css";
@import "css/main.css";
</style>
