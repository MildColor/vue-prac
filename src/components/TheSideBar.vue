<script setup lang="ts">
import { ref } from "vue";
import { useMenuStore } from "@/store/menu";
import { useRouter } from "vue-router";
import routes from "@/router/routes";
import { useUserStore } from "@/store/user";
import { computed } from "vue";

const menuStore = useMenuStore();
const userStore = useUserStore();
const panel = ref({
  panel: [0, 1],
  disabled: false,
});

const router = useRouter();

const handleRouteClick = (path: string) => {
  router.push(path);
  menuStore.close();
};

const filteredRoutes = computed(() => {
  // '로그인' 라우트를 필터링하여 반환
  return routes[0].children?.filter((route) => route.name !== "로그인");
});
</script>

<template>
  <v-overlay v-model="menuStore.isOpen" contained>
    <v-col class="drawer">
      <v-expansion-panels v-model="panel" variant="accordion">
        <v-col class="profile">5works Admin</v-col>

        <!-- 로그인한 경우에만 렌더링 -->
        <v-expansion-panel
          class="expansion-panel"
          v-for="route in filteredRoutes"
          :key="route.path"
          elevation="0"
          @click="!route.children && handleRouteClick(`/` + route.path)"
        >
          <v-expansion-panel-title>{{ route.name }}</v-expansion-panel-title>
          <v-expansion-panel-text v-if="route.children">
            <!-- 하위 라우트를 생성 -->
            <v-expansion-panel-text
              v-for="childRoute in route.children"
              :key="childRoute.path"
              @click="
                handleRouteClick(`/` + route.path + '/' + childRoute.path)
              "
            >
              {{ childRoute.name }}
            </v-expansion-panel-text>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-overlay>
</template>

<style>
.drawer {
  width: 300px;
  height: 100vh;
  background-color: white;
  padding: 0;
}

.profile {
  width: 100%;
  height: 50px;
  background-color: white;
}
</style>
