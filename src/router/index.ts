// Composables
import { createRouter, createWebHistory } from "vue-router";

import routes from "./routes";
import { useUserStore } from "@/store/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from) => {
  const store = useUserStore();

  if (
    // 유저 로그인 인증여부 확인
    !store.isLoggedIn &&
    // ❗ 무한 리디렉션 방지
    to.name !== "로그인"
  ) {
    // 유저를 로그인 페이지로 리디렉션
    return { name: "로그인" };
  }

  if (
    // 유저 로그인 인증여부 확인
    store.isLoggedIn &&
    // ❗ 무한 리디렉션 방지
    to.name == "로그인"
  ) {
    // 유저를 로그인 페이지로 리디렉션
    return { name: "대시보드" };
  }
});

export default router;
