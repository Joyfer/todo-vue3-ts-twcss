<script lang="ts">
import { ref, defineComponent, reactive, computed } from "vue";
import PrimaryButton from "./resources/buttons/PrimaryButton.vue";
import Card from "./resources/card/Card.vue";
import Label from "./resources/labels/Label.vue";
//MDI
import {
  mdiClockAlertOutline,
  mdiCloseCircle,
  mdiClockCheckOutline,
} from "@mdi/js";

export default defineComponent({
  name: "HelloWorld",
  components: {
    PrimaryButton,
    Card,
    Label,
  },
  setup: () => {
    interface ObjectTodo {
      category: string;
      description: string;
      status: status;
    }

    interface FormAdd {
      name: string;
      value: string;
    }

    enum status {
      Completed = "completed",
      Pending = "pending",
    }

    const icons = reactive({
      clock: mdiClockAlertOutline,
      close: mdiCloseCircle,
      checked: mdiClockCheckOutline,
    });
    const todoList: ObjectTodo[] = reactive([]);
    const queryFilter = ref("");
    const formInputs: FormAdd[] = reactive([
      {
        name: "description",
        value: "",
      },
      {
        name: "category",
        value: "",
      },
    ]);

    const add = (): void => {
      let myNewTodoItem: ObjectTodo = {
        description: formInputs[0].value,
        category: formInputs[1].value,
        status: status.Pending,
      };
      todoList.push(myNewTodoItem);
      formInputs.forEach((el) => (el.value = ""));
    };

    const changeStatus = (index: number): void => {
      todoList[index].status = status.Completed;
    };

    const deleteItem = (index: number): void => {
      todoList.splice(index, 1);
    };

    const variantColor = (statusE: status): string => {
      if (statusE === status.Completed) {
        return "success";
      } else if (statusE === status.Pending) {
        return "primary";
      } else {
        return "none";
      }
    };

    const filteringTodo = computed((): ObjectTodo[] =>
      todoList.filter((el) => el.category.includes(queryFilter.value))
    );

    return {
      icons,
      add,
      filteringTodo,
      variantColor,
      changeStatus,
      deleteItem,
      formInputs,
      queryFilter,
    };
  },
});
</script>

<template>
  <div class="mt-3 mb-6">
    <label for="description">Start adding some item!</label>
    <input
      v-for="({ name }, index) in formInputs"
      :key="index"
      :id="name"
      type="text"
      class="rounded-md w-full mb-2 border-0 shadow focus:ring-primary"
      :placeholder="`Item ${name}`"
      v-model="formInputs[index].value"
    />
    <PrimaryButton class="w-full" @click="add">Add</PrimaryButton>
  </div>
  <hr class="my-5 border-t-2" />
  <Label
    class="mb-3 cursor-pointer"
    @click="queryFilter = ''"
    variant="success"
    :icon="queryFilter != '' ? icons.close : undefined"
    >{{
      queryFilter != ""
        ? `Filtering: "${queryFilter}" - click to stop`
        : "Click category text to filter"
    }}</Label
  >
  <div class="space-y-3">
    <Card
      v-for="({ category, description, status }, index) in filteringTodo"
      :key="index"
    >
      <template #header>
        <h4
          @click="queryFilter = category"
          class="text-gray-500 text-sm cursor-pointer"
        >
          {{ category }}
        </h4>
        <Label :variant="variantColor(status)" :icon="icons.clock">{{
          status
        }}</Label>
      </template>
      <template #default
        ><h2 class="text-xl my-4">{{ description }}</h2></template
      >
      <template #actions>
        <div>
          <PrimaryButton
            @click="deleteItem(index)"
            :text="true"
            class="w-1/2"
            color="secondary"
            >Delete</PrimaryButton
          >
          <PrimaryButton
            v-if="status != 'completed'"
            @click="changeStatus(index)"
            :text="true"
            class="w-1/2"
            color="success"
            >Finished</PrimaryButton
          >
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
label {
  margin: 0 0.5em;
  font-weight: bold;
}
</style>
