<script lang="ts">
import { ref, defineComponent, reactive, computed, onMounted } from "vue";
import PrimaryButton from "./resources/buttons/PrimaryButton.vue";
import Card from "./resources/card/Card.vue";
import Label from "./resources/labels/Label.vue";
import { Todo } from "../composable/InterfacesEnums";
import useLocalStorage from "../composable/useLocalStorage";
//MDI
import {
  mdiClockAlertOutline,
  mdiCloseCircle,
  mdiClockCheckOutline,
  mdiTrashCanOutline,
} from "@mdi/js";

export default defineComponent({
  name: "HelloWorld",
  components: {
    PrimaryButton,
    Card,
    Label,
  },
  setup: () => {
    const icons = reactive({
      clock: mdiClockAlertOutline,
      close: mdiCloseCircle,
      checked: mdiClockCheckOutline,
      trash: mdiTrashCanOutline,
    });

    const todoList: Todo.JSONObj = reactive({
      data: [
        { category: "hi", description: "nicee", status: Todo.status.Completed },
      ],
    });
    const queryFilter = ref("");
    const formInputs: Todo.FormAdd[] = reactive([
      {
        name: "description",
        value: "",
      },
      {
        name: "category",
        value: "",
      },
    ]);

    const { getLocalStorage, setLocalStorage } = useLocalStorage("todo");

    const getTodoLocalStorage = async (): Promise<void> => {
      let gettingObjects = getLocalStorage(),
        parsed = await JSON.parse(gettingObjects);
      todoList.data.push(parsed.data);
    };

    onMounted(getTodoLocalStorage);

    const add = (): void => {
      let myNewTodoItem = {
        description: formInputs[0].value,
        category: formInputs[1].value,
        status: Todo.status.Pending,
      };
      todoList.data.push(myNewTodoItem);
      formInputs.forEach((el) => (el.value = ""));
      setLocalStorage(todoList);
    };

    const changeStatus = (index: number): void => {
      todoList.data[index].status = Todo.status.Completed;
      todoList.data.push(todoList.data[index]);
      todoList.data.splice(index, 1);
    };

    const deleteItem = (index: number): void => {
      todoList.data.splice(index, 1);
    };

    const variantColor = (statusE: Todo.status): string => {
      if (statusE === Todo.status.Completed) {
        return "success";
      } else if (statusE === Todo.status.Pending) {
        return "primary";
      } else {
        return "none";
      }
    };

    const filteringTodo = computed(() => {
      if (queryFilter.value.length > 0) {
        return todoList.data.filter((el) =>
          el.category.includes(queryFilter.value)
        );
      } else {
        return todoList.data;
      }
    });

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
    <transition-group name="list">
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
          <div class="flex justify-end">
            <PrimaryButton
              @click="deleteItem(index)"
              :text="true"
              class="md:w-1/4"
              color="secondary"
              :icon="icons.trash"
              >Delete</PrimaryButton
            >
            <PrimaryButton
              v-if="status != 'completed'"
              @click="changeStatus(index)"
              :text="true"
              class="md:w-1/4"
              color="success"
              :icon="icons.checked"
              >Finished</PrimaryButton
            >
          </div>
        </template>
      </Card>
    </transition-group>
  </div>
</template>

<style scoped>
label {
  margin: 0 0.5em;
  font-weight: bold;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
