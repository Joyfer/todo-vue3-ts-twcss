<script lang="ts">
import { defineComponent, computed } from "vue";
// @ts-ignore
import SvgIcon from "@jamescoyle/vue-icon";

interface classes {
  [index: string]: boolean;
}

export default defineComponent({
  name: "Label",
  components: {
    SvgIcon,
  },
  props: {
    icon: {
      type: String,
      required: false,
    },
    variant: {
      type: String,
      default: "primary",
    },
  },
  setup(props) {
    const variant = computed(
      (): classes => {
        return {
          "bg-primary": props.variant === "primary",
          "bg-secondary": props.variant === "secondary",
          "bg-success": props.variant === "success"
        };
      }
    );
    return {variant};
  },
});
</script>

<template>
  <div
    class="flex items-center justify-center text-white rounded shadow-sm px-2"
    :class="variant"
  >
    <span>Pending</span>
    <SvgIcon :size="18" type="mdi" :path="icon" class="ml-1" />
  </div>
</template>

<style scoped>
</style>