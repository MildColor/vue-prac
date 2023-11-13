import { ACCESS_TOKEN_KEY } from "@/constants/auth";
import { userApis } from "@/server/users";
import { getLocalStorage } from "@/utils/localStorage";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore("user", () => {
  //   const userInfo = ref<UserInfo | null>(null);
  const accessToken = getLocalStorage(ACCESS_TOKEN_KEY);

  const isLoggedIn = ref(accessToken ? true : false);

  const updateUserInfo = (accessToken: string | null) => {
    if (accessToken) {
      isLoggedIn.value = accessToken ? true : false;
      localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    }
  };

  const handleAuthAction = async (formStore: User) => {
    try {
      const response = await userApis.signIn(formStore);

      console.log(response);
      const {
        data: {
          data: { accessToken },
        },
      } = response;

      updateUserInfo(accessToken);
    } catch (error) {
      console.error(error);
    }
  };

  return { isLoggedIn, updateUserInfo, handleAuthAction };
});
