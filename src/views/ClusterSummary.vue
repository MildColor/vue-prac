<script setup lang="ts">
import { watch } from "vue";
import { ref } from "vue";

// const lists = ref([
//   {
//     id: 1,
//     numberList: [{ content: 1 }, { content: 2 }],
//   },
//   {
//     id: 2,
//     numberList: [
//       { content: 3 },
//       { content: 4 },
//       { content: 5 },
//       { content: 6 },
//     ],
//   },
//   {
//     id: 3,
//     numberList: [{ content: 7 }, { content: 8 }, { content: 9 }],
//   },
// ]);

const textWithBlack = ref();
const lists = ref([
  {
    id: "textBlanks",
    contents: [
      { id: 1, content: "토끼" },
      { id: 2, content: "호랑이" },
    ],
  },
]);

const startDrag = (event: any, item: any) => {
  console.log("startDrag", event.dataTransfer.setData);

  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("selectedItem", item.content);
};

const onDrop = (event: any, colNum: any) => {
  const selectedItem = event.dataTransfer.getData("selectedItem");
  console.log("selectedItem", selectedItem);
  console.log("onDrop", event.target.name);

  const {
    target: { name },
  } = event;

  // 리스트에서 선택된 아이템과 같은 content 값을 가진 요소를 찾아 index를 반환한다.
  // let targetIdx = -1;
  // let targetItem;
  // lists.value.forEach((obj, index) => {
  //   obj.numberList.forEach((ob) => {
  //     if (ob.content === selectedItem) {
  //       targetIdx = index;
  //       targetItem = ob;
  //     }
  //   });
  // });

  // // drop이 된 <div> index(=colNum)를 받아 리스트에 추가한다.
  // // 기존 리스트에서는 요소를 삭제한다. (splice() 사용)
  // if (targetIdx !== -1 && targetItem) {
  //   console.log(targetIdx, targetItem);
  //   lists.value[colNum].numberList.push(targetItem);
  //   lists.value[targetIdx].numberList.splice(
  //     lists.value[targetIdx].numberList.indexOf(targetItem),
  //     1
  //   );
  // }
};

watch(lists.value, () => {
  console.log("list", lists.value);
});
</script>
<template>
  <section class="container">
    <div class="box">
      <p class="question">Q. 다음에 들어갈 알맞은 말을 골라 넣으시오.</p>
    </div>

    <img class="box describe-img" />

    <div class="box">
      <p class="answer">
        옛날 옛적에 숲 속에
        <span
          class="blank"
          name="호랑이"
          @drop.prevent="onDrop($event, null)"
          @dragenter.prevent
          @dragover.prevent
        ></span
        >와
        <span
          class="blank"
          name="토끼"
          @drop.prevent="onDrop($event, null)"
          @dragenter.prevent
          @dragover.prevent
        ></span
        >가 살았습니다. 호랑이는 크고 강한 동물이었지만, 그의 마음은 따뜻하고
        친절했습니다. 반면에 토끼는 작고 소심한 토끼지만, 누구보다도 영리하고
        상냥한 친구였습니다.
      </p>
    </div>

    <div
      class="row drag-box-container"
      v-for="(item, idx) in lists"
      :key="item.id"
      @drop.prevent="onDrop($event, idx)"
      @dragenter.prevent
      @dragover.prevent
    >
      <div
        v-for="(numItem, idx) in item.contents"
        :key="idx"
        class="drag-box"
        @dragstart="startDrag($event, numItem)"
        draggable="true"
      >
        <p>{{ numItem.content }}</p>
      </div>
    </div>
  </section>
</template>
<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: rgb(205, 205, 205);
  gap: 10px;
}

.row {
  display: flex;
  flex-direction: row;
}

.col {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.drag-box-container {
  width: 100%;
  height: 200px;
  padding: 10px;
  border: 1px solid rgb(205, 205, 205);
  border-radius: 20px;
  background-color: white;
  gap: 10px;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid plum;
  border-radius: 10px;
  background-color: white;

  & p.question {
    display: flex;
    font-size: large;
    font-weight: bold;
    margin: 15px;
  }

  & p.answer {
    font-size: 25px;
    line-height: 35px;
    padding: 5px;
  }

  & span.blank {
    display: inline-block;
    border: 1px solid plum;
    border-radius: 10px;
    width: 70px;
    height: 25px;
    margin: 5px;
    vertical-align: bottom;
  }
}

.drag-box {
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid plum;
  border-radius: 10px;
  background-color: white;

  width: 70px;
  height: 40px;
}

.describe-img {
  height: 300px;
  width: 100%;
}
</style>
