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

<template>
  <div class="container mx-auto px-2 sm:w-10/12 md:w-1/2">
    <div class="sm:w-6/12 md:w-1/2 mx-auto">
      <CatImageSvg />
    </div>
    <h1 class="text-7xl my-3">TODO</h1>
    <h1 class="text-xl">Welcome! Made with Vue 3, TypeScript and Tailwind CSS 🐱‍👓</h1>
    <span class="text-sm">11/7/2021</span>
    <HelloWorld />
  </div>
</template>

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
