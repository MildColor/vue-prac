<script lang="ts" setup>
import TheSideBar from "@/components/TheSideBar.vue";
import { useMenuStore } from "@/store/menu";
import { useRoute } from "vue-router";

const store = useMenuStore();
const currentRoute = useRoute();
</script>

<template>
  <v-app-bar flat :elevation="2">
    <v-app-bar-title>
      <v-btn icon="mdi-menu" @click="store.toggle" variant="text" />
      {{ currentRoute.name }}
    </v-app-bar-title>
  </v-app-bar>
  <the-side-bar :isOpen="store.isOpen" />
</template>
