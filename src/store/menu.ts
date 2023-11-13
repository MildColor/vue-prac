// Utilities
import { defineStore } from "pinia";

export const useMenuStore = defineStore("menu", {
  // 화살표 함수는 전체 유형 유추을 위해 권장됨.
  state: () => {
    return {
      // 이 모든 속성은 자동으로 유형이 유추됨.
      isOpen: false,
    };
  },

  actions: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
});
