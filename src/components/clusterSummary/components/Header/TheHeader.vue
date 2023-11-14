<script lang="ts" setup>
const props = defineProps(["text"]);
</script>
<template>
  <header class="header"><slot name="question"></slot></header>
</template>

<style>
.header {
  text-align: center;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  padding: 15px;
  border: 1px solid #ccc;
}
</style>
