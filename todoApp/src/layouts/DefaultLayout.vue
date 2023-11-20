<script lang="ts" setup>
import TheHeader from '@/components/TheHeader.vue'

import SearchInput from '@/components/SearchInput.vue'
</script>

<template>
  <div class="default-layout">
    <the-header>
      <search-input />
    </the-header>

    <slot></slot>
  </div>
</template>

<style>
.default-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
