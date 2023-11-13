<script lang="ts" setup>
import { AgGridVue } from "ag-grid-vue3"; // the AG Grid Vue Component
import { watch } from "vue";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import "@/components/common/Table/styles.css";

import { ref } from "vue";
import { onBeforeMount } from "vue";
import { onMounted } from "vue";
import { GridApi } from "ag-grid-community";

const props = defineProps(["columnDefs", "rowData", "variant", "style"]);
const theme = ref("ag-theme-material");
const defaultColDef = ref({
  resizable: true,
});
const gridApi = ref<GridApi | null>(null);

const onGridReady = (params: any) => {
  gridApi.value = params.api;
};

const sizeToFit = () => {
  if (gridApi.value) gridApi.value.sizeColumnsToFit();
};

// watch(props, () => {
//   // console.log("ag-grid", props?.rowData);
//   // console.log("ag-onGridReady", gridApi.value);

//   sizeToFit();
// });

watch(gridApi, () => {
  sizeToFit();
});
</script>
<template>
  <div :class="[theme, variant]">
    <ag-grid-vue
      :columnDefs="props.columnDefs"
      :rowData="props.rowData"
      :defaultColDef="defaultColDef"
      :style="props.style"
      @grid-ready="onGridReady"
    />
  </div>
</template>
<style></style>
