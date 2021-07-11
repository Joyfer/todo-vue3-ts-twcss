<script lang="ts">
import { ref, defineComponent } from "vue";
import PrimaryButton from "./resources/buttons/PrimaryButton.vue";
import Card from "./resources/card/Card.vue";
import Label from "./resources/labels/Label.vue";
//MDI
import { mdiClockAlertOutline } from "@mdi/js";

export default defineComponent({
  name: "HelloWorld",
  components: {
    PrimaryButton,
    Card,
    Label,
  },
  setup: (props) => {
    const pendingIcon = ref(mdiClockAlertOutline);
    return { pendingIcon };
  },
});
</script>

<template>
  <form action="" class="my-3">
    <label for="description">Start adding some item!</label>
    <input
      id="description"
      type="text"
      class="rounded-md w-full mb-2 border-0 shadow focus:ring-primary"
      placeholder="Item description"
    />
    <input
      id="category"
      type="text"
      class="rounded-md w-full mb-2 border-0 shadow focus:ring-primary"
      placeholder="Item category"
    />
    <PrimaryButton class="w-full" @click.prevent="() => console.log('hola')"
      >Add</PrimaryButton
    >
  </form>
  <Card>
    <template #header>
      <h4 class="text-gray-500 text-sm mt-1">Programación</h4>
      <Label variant="secondary" :icon="pendingIcon">Success</Label>
    </template>
    <template #default><h2 class="text-xl my-4">Ir a casa</h2></template>
    <template #actions>
      <div>
      <PrimaryButton :text="true" class="w-1/2" color="success">Terminado</PrimaryButton>
      <PrimaryButton :text="true" class="w-1/2" color="secondary">Eliminar</PrimaryButton>
      </div>
    </template>
  </Card>
</template>

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
