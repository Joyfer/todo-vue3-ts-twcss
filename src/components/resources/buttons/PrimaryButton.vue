<script lang="ts">
import { defineComponent, computed } from "vue";

interface classes {
  [index: string]: boolean;
}

export default defineComponent({
  name: "PrimaryButton",
  props: {
    color: {
      type: String,
      required: false,
      default: "primary",
      validator: (val: string) =>
        ["primary", "secondary", "success"].includes(val),
    },
    text: { type: Boolean, required: false, default: false },
  },

  setup: (props) => {
    const colors = computed(
      (): classes => {
        return {
          "bg-primary hover:bg-primary-light text-white shadow":
            props.color === "primary" && props.text === false,
          "bg-secondary hover:bg-secondary-light text-white shadow":
            props.color === "secondary" && props.text === false,
          "bg-success hover:bg-success-light text-white shadow":
            props.color === "success" && props.text === false,
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
          "text-success hover:bg-success-light hover:bg-opacity-10":
            props.text && props.color === "success",
        };
      }
    );

    return { colors, textButton };
  },
});
</script>

<template>
  <button
    class="px-4 py-2 rounded focus:outline-none focus:none font-bold uppercase active:none"
    :class="[colors, textButton]"
  >
    <slot>Sumar</slot>
  </button>
</template>

<style scoped>
</style>