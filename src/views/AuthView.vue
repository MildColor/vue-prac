<script setup lang="ts">
import { userApis } from "@/services/users";
import { reactive } from "vue";
import { useUserStore } from "@/store/user";
import router from "@/router";

const initialState = {
  id: "",
  password: "",
};

const state = reactive({
  ...initialState,
});

const { isLoggedIn, handleAuthAction } = useUserStore();

const handleSubmit = () => {
  handleAuthAction({ ...state });
  router.push("/dashboard");
};
</script>

<template>
  <div class="d-flex flex-column pa-5 h-100 w-100 justify-center">
    <p class="text-center text-h3 ma-5 text-blue-darken-1 font-weight-bold">
      Cube Eye
    </p>

    <v-form class="d-flex flex-column">
      <v-text-field v-model="state.id" label="id" required></v-text-field>

      <v-text-field
        v-model="state.password"
        type="password"
        label="password"
        required
      ></v-text-field>

      <v-btn color="blue-darken-1" class="mt-4" @click.prevent="handleSubmit">
        로그인
      </v-btn>
    </v-form>
  </div>
</template>

<style lang=""></style>
