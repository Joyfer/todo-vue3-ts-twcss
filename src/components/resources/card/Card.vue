<template>
  <div v-bind="$attrs" class="bg-white shadow-md rounded-md p-4">
    <div class="flex justify-between">
      <div>
        <h4 class="text-gray-500 text-sm">Programación</h4>
      </div>
      <Label :icon="pendingIcon" />
    </div>
    <h2 class="text-xl my-4">Comprar pan</h2>
    <PrimaryButton class="w-full mb-2" color="success">Terminado</PrimaryButton>
    <PrimaryButton class="w-full" color="secondary">Eliminar</PrimaryButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
//Component
import PrimaryButton from "../buttons/PrimaryButton.vue";
import Label from "../labels/Label.vue";
// MDI
import { mdiClockAlertOutline } from "@mdi/js";

export default defineComponent({
  name: "",
  components: {
    PrimaryButton,
    Label,
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