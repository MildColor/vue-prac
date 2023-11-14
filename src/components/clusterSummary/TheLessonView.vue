<script setup lang="ts">
import { log } from "console";
import { watch } from "vue";
import { ref } from "vue";
import Header from "@/components/clusterSummary/components/Header/TheHeader.vue";
import DnDWords from "@/components/ClusterSummary/components/DnD/DnDWords.vue";
import DnDAnswer from "@/components/ClusterSummary/components/DnD/DnDAnswer.vue";
import useDnD from "@/composable/utils/useDnD.ts";

const BLANK_SPAN_STRING = `<template>
    <span class='blank'
    @drop.prevent="onDrop($event)"
    @dragenter.prevent
    @dragover.prevent
    @dragstart="onDrag($event, item)"
    draggable="true"
    ref="(el)=> add(el)"
    ></span>
    </template>
    `;

const REPLACE_SPAN_STRING = (word: string) => `<span class="blank"
          @drop.prevent="onDrop($event)"
          @dragenter.prevent
          @dragover.prevent>${word}</span>`;

const textWithBlanks =
  ref(`옛날 옛적에 숲 속에 BLANK_SPAN_STRING와 BLANK_SPAN_STRING가 살았습니다. 호랑이는 크고 강한 동물이었지만, 그의 마음은 따뜻하고
  친절했습니다. 반면에 토끼는 작고 소심한 토끼지만, 누구보다도 영리하고
    상냥한 친구였습니다.`);
const draggableWords = ref(["토끼", "호랑이", "헬리코박터프로젝트윌"]);

const { answerOrder, onDrop, onDrag } = useDnD();

watch(answerOrder.value, () => {
  //   console.log("answerOrder: " + answerOrder.value);
});
</script>
<template>
  <section class="drag-and-drop-app">
    <Header>
      <template v-slot:question>
        Q. 다음에 들어갈 알맞은 말을 골라 넣으시오.
      </template>
    </Header>

    <div class="image-container">
      <img class="your-image-class" src="your-image-path" alt="Description" />
    </div>

    <DnDAnswer :text-with-blanks="textWithBlanks" :onDrop="onDrop"></DnDAnswer>
    <DnDWords :word-list="draggableWords" :onDrag="onDrag"></DnDWords>
  </section>
</template>
<style scoped>
.drag-and-drop-app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Arial", sans-serif;
}

.image-container {
  /* 이미지 스타일링을 원하는 대로 추가하세요 */
  border: 1px solid #ccc;
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
}
</style>
