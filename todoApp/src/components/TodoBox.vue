<script lang="ts" setup>
import { useTodoStore } from '@/stores/todos'
import { storeToRefs } from 'pinia'
const store = useTodoStore()

const { todoList } = storeToRefs(store)
const { handleDeleteTodo } = store
</script>
<template>
  <li v-for="(item, idx) in todoList" :key="idx" class="todo-box">
    {{ item }}
    <button @click="() => handleDeleteTodo(idx)" class="todo-box__delete">x</button>
  </li>
</template>

<style>
.todo-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 100px;
  background-color: indianred;
}
</style>
