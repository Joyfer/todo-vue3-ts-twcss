<template>
  <h1 class="text-7xl mb-3">TODO</h1>
  <h1 class="text-xl">{{ msg }}</h1>
  <div class="mt-3">
    <label for="add">Start adding some item!</label>
    <input id="add" type="text" class="rounded-md w-full mb-2 border-0 shadow focus:ring-primary" />
  </div>
  <PrimaryButton class="w-full">Add</PrimaryButton>
  <Card />
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import PrimaryButton from "./resources/buttons/PrimaryButton.vue";
import Card from "./resources/card/Card.vue"

export default defineComponent({
  name: "HelloWorld",
  components: {
    PrimaryButton,
    Card
  },

  setup: () => {
    return {};
  },

  props: {
    msg: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
