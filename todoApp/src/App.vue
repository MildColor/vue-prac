<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import GlobalModal from '@/components/Modal/GlobalModal.vue'

import './index.css'
import 'tailwindcss/tailwind.css'
</script>

<template>
  <RouterView />
  <global-modal></global-modal>
</template>

<style scoped></style>
