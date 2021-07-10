<template>
  <h1>{{ msg }}</h1>
  <h2 class="mt-3">Start adding some item!</h2>
 <input type="text" class="rounded w-full mb-2 border-0 shadow" />
  <PrimaryButton class="w-full">Add</PrimaryButton>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import PrimaryButton from "./resources/buttons/PrimaryButton.vue";

export default defineComponent({
  name: "HelloWorld",
  components: {
    PrimaryButton,
  },

  setup: () => {

    return { };
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
