<template>
  <button
    class="px-4 py-2 rounded focus:outline-none focus:none"
    :class="[colors, textButton]"
  >
    Sumar
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

interface classes {
  [index: string]: boolean;
}

export default defineComponent({
  name: "PrimaryButton",
  setup: (props) => {
    const colors = computed(
      (): classes => {
        return {
          "bg-primary hover:bg-primary-light text-white":
            props.color === "primary" && props.text === false,
          "bg-secondary hover:bg-secondary-light text-white":
            props.color === "secondary" && props.text === false,
        };
      }
    );

    const textButton = computed(
      (): classes => {
        return {
          "text-primary hover:bg-primary-light hover:bg-opacity-10":
            props.text && props.color === "primary",
          "text-secondary hover:bg-secondary-light hover:bg-opacity-10":
            props.text && props.color === "secondary",
        };
      }
    );

    return { colors, textButton };
  },
  props: {
    color: {
      type: String,
      required: false,
      default: "primary",
      validator: (val: string) => ["primary", "secondary"].includes(val),
    },
    text: { type: Boolean, required: false, default: false },
  },
});
</script>

<style scoped>
</style>