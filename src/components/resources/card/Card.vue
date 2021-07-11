<script lang="ts">
import { defineComponent } from "vue";
// MDI

export default defineComponent({
  name: "",
  components: {},
});
</script>

<template>
  <div class="bg-white shadow-md rounded-md p-4">
    <header>
      <div class="flex justify-between">
        <slot name="header"></slot>
      </div>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <div class="space-y-2 py-2">
        <slot name="actions"></slot>
      </div>
    </footer>
  </div>
</template>

<style scoped>
</style>