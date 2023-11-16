<script lang="ts" setup>
import TodoInput from '@/components/TodoInput.vue'
import TodoBoxList from '@/components/TodoBox.vue'
</script>
<template>
  <main>
    <header class="flex justify-items-center items-center w-full">
      <todo-input></todo-input>
    </header>

    <section>
      <ul class="box-container">
        <todo-box-list></todo-box-list>
      </ul>
    </section>
  </main>
</template>

<style>
.box-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>
