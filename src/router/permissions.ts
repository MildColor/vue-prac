import { useUserStore } from "@/store/user";
import router from "./index";

router.beforeEach(async (to, from) => {
  const store = useUserStore();

  if (!store.isLoggedIn && to.name !== "로그인") {
    return { name: "로그인" };
  }

  if (store.isLoggedIn && to.name === "로그인") {
    return { name: "대시보드" };
  }
});
