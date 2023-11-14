<script lang="ts" setup>
const props = defineProps(["wordList", "onDrag"]);
</script>
<template>
  <div class="draggable-words-container">
    <div
      v-for="(item, idx) in wordList"
      :key="idx"
      class="draggable-word"
      @dragstart="onDrag($event, item)"
      draggable="true"
    >
      {{ item }}
    </div>
  </div>
</template>

<style>
.draggable-words-container {
  display: flex;
  flex-wrap: wrap;
}

.draggable-word {
  margin: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  cursor: move;
}
</style>
