import { ref } from "vue";

const useDnD = () => {
  const answerOrder = ref<string[]>([]);

  const onDrop = (event: DragEvent) => {
    const item = event?.dataTransfer?.getData("selectedItem");
    // console.log("onDrop", item);

    if (item && typeof item === "string") {
      answerOrder.value.push(item);
    }
  };
  const onDrag = (event: DragEvent, item: any) => {
    // console.log("onDrag", item);

    if (event && event.dataTransfer) {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("selectedItem", item);
    }
  };

  return { answerOrder, onDrop, onDrag };
};

export default useDnD;
