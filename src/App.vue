<template>
  <div class="container mx-auto px-2">
    <CatImageSvg />
    <h1 class="text-7xl my-3">TODO</h1>
    <h1 class="text-xl">Welcome to my TODO with Vue 3, TS and TWCSS</h1>
    <HelloWorld/>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import CatImageSvg from "./components/CatImage/CatImageSvg.vue";
export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    CatImageSvg,
  },
});
</script>

<style>
body {
  background: rgb(238, 242, 243);
}
#app {
  font-family: "Rubik", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
