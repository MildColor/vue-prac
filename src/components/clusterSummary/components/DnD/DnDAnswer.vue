<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";

const props = defineProps(["textWithBlanks", "onDrop"]);
const pTag = ref(null);
const blankSpan = ref();

const add = (el) => {
  blankSpan.value.push(el);
};

onMounted(() => {
  console.log("pTag", pTag.value);
  console.log("blankSpan", blankSpan.value);
});

watch(blankSpan.value, () => {
  console.log("blankSpan", blankSpan.value);
});
</script>
<template>
  <div class="text-container">
    <p
      ref="pTag"
      class="text-with-blanks"
      v-html="textWithBlanks"
      @drop.prevent="onDrop($event)"
      @dragover.prevent
    />
  </div>
</template>

<style>
.text-container {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
}

.text-with-blanks {
  /* 텍스트 스타일링을 원하는 대로 추가하세요 */
  .blank {
    display: inline-flex;
    min-width: 70px;
    height: 18px;
    margin: 5px;
    border: 1px solid #ccc;
    cursor: move;
    vertical-align: bottom;
  }
}
</style>
