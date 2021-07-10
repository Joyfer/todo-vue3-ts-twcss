<template>
  <h1>{{ msg }}</h1>
  <h2>{{ count }}</h2>
  <PrimaryButton @click="sumar" :color="text" />
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
    const count = ref(0);
    const text = ref("primary");
    const sumar = (): void => {
      count.value++;
      text.value = "secondary";
    };

    return { count, sumar, text };
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
