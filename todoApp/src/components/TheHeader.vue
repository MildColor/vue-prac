<script lang="ts" setup></script>
<template>
  <header class="header">
    <slot></slot>
  </header>
</template>

<style>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  background-color: #f1f1f1;
}
</style>
