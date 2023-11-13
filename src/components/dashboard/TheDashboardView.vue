<script lang="ts" setup>
import AgTable from "../common/Table/AgTable.vue";
import { columnDefs } from "@/constants/columnDefs";
import { watch } from "vue";
import { useAsyncState } from "@vueuse/core";
import { clusterApis } from "@/server/cluster";
import { statisticsApis } from "@/server/statistic";
import getFormattedDate from "@/utils/getFormattedDate";

import { onMounted } from "vue";
import { ref } from "vue";

const tab = ref(null);
// const menuItems = ref(["클러스터", "인기검색어", "검색추이"]);
const panel = ref(["클러스터", "인기검색어", "검색추이"]);

const date = new Date();
const from = getFormattedDate(date, 7);
const to = date.toISOString().slice(0, 10);

const { state: clusterSummary } = useAsyncState(
  async (args) => await clusterApis.getClusterTotal(),
  null
);

const { state: topQuery } = useAsyncState(
  async (args) =>
    await statisticsApis.getTopQuery({
      from,
      to,
      size: 10,
    }),
  null
);

// onMounted(() => {
//   const delay = 0;
//   const params = null;
//   execute(delay, params);
// }),

watch(topQuery, () => {
  // console.log(
  //   "useGetClusterTotal",
  //   clusterSummary.value?.data?.data?.hitsData?.[0],
  //   isReady.value,
  //   isLoading.value
  // );

  console.log("trends", topQuery.value);
});
watch(tab, () => {
  // console.log(
  //   "useGetClusterTotal",
  //   clusterSummary.value?.data?.data?.hitsData?.[0],
  //   isReady.value,
  //   isLoading.value
  // );

  console.log("tab", tab.value);
});
</script>
<template>
  <v-expansion-panels v-model="panel" multiple>
    <v-expansion-panel>
      <v-expansion-panel-title> 클러스터 </v-expansion-panel-title>
      <v-expansion-panel-text class="w-100">
        <AgTable
          :column-defs="columnDefs.clusterColDefs.slice(0, 3)"
          :row-data="[clusterSummary?.data?.data?.hitsData?.[0]]"
          variant="compact"
          style="width: auto; height: 100px"
        />
        <AgTable
          :column-defs="columnDefs.clusterColDefs.slice(3, 6)"
          :row-data="[clusterSummary?.data?.data?.hitsData?.[0]]"
          variant="compact"
          style="width: 100%; height: 100px"
        />
      </v-expansion-panel-text>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-title> 인기검색어 </v-expansion-panel-title>

      <v-expansion-panel-text class="w-100">
        <AgTable
          :column-defs="columnDefs.topQueryBoardColDefs"
          :row-data="topQuery?.data.data.keywords"
          variant="compact"
          style="width: auto; height: 300px"
        />
      </v-expansion-panel-text>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-title> 검색추이 </v-expansion-panel-title>
    </v-expansion-panel>
  </v-expansion-panels>

  <!-- <v-tabs v-model="tab" align-tabs="title">
    <v-tab
      v-for="item in menuItems"
      :key="item"
      :value="item"
      class="ma-0"
      density="compact"
    >
      {{ item }}
    </v-tab>
  </v-tabs>
  <v-window v-model="tab">
    <v-window-item v-for="item in menuItems" :key="item" :value="item">
      <v-card>
        <v-card class="h-100 justify-center pa-2">
          <v-card-title> {{ tab }} </v-card-title>
          <slot :name="[tab]"> </slot>

          <AgTable
            :column-defs="columnDefs.clusterColDefs.slice(0, 3)"
            :row-data="[clusterSummary?.data?.data?.hitsData?.[0]]"
            variant="compact"
            style="width: 350px; height: 100px"
          />
          <AgTable
            :column-defs="columnDefs.clusterColDefs.slice(3, 6)"
            :row-data="[clusterSummary?.data?.data?.hitsData?.[0]]"
            variant="compact"
            style="width: 350px; height: 100px"
          />
        </v-card>
      </v-card>
    </v-window-item>
  </v-window> -->
</template>
<style></style>
