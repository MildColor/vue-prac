<script lang="ts" setup></script>

<template>
  <div class="default-layout">
    <slot name="header"></slot>

    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<style>
.default-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
