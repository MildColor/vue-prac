<script lang="ts" setup>
import { useTodoStore } from '@/stores/todos'
import { storeToRefs } from 'pinia'
const store = useTodoStore()
const { todo } = storeToRefs(store)
const { handleSubmit } = store
</script>
<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="todo" placeholder="TODO 입력하기" class="" />
    <button type="submit">입력</button>
  </form>
</template>

<style></style>
