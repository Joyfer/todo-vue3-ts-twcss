<template>
  <div v-bind="$attrs" class="bg-white shadow-md rounded-md">
    <div class="pl-3 pt-2">
      <h1 class="text-xl">Hola amigos de YopuTube</h1>
      <div class="flex items-center justify-center bg-secondary text-white w-1/3 rounded shadow-sm">
        <span class="">Pending</span>
        <SvgIcon :size="18" type="mdi" :path="pendingIcon" class="ml-1" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
// @ts-ignore
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiClockAlertOutline } from "@mdi/js";

export default defineComponent({
  name: "",
  components: {
    SvgIcon,
  },
  setup() {
    const pendingIcon = ref(mdiClockAlertOutline);
    return {
      pendingIcon,
    };
  },
});
</script>

<style scoped>
</style>