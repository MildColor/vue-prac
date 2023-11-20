<script lang="ts" setup></script>
<template>
  <section class="poke-list-container">
    <ul class="poke-list">
      <slot name="card"></slot>
    </ul>
  </section>
</template>

<style scoped>
.poke-list_container {
}

.poke-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
}
</style>
