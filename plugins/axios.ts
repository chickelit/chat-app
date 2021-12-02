import { Plugin } from "@nuxt/types";
import { $cookies } from "~/utils/nuxt-instance";

const axiosPlugin: Plugin = ({ app, store, redirect }) => {
  app.$axios.onRequest((config) => {
    const token = app.$cookies.get("token");

    if (token) {
      config.headers.Authorization = `bearer ${token}`;
    }
  });

  app.$axios.onError((error) => {
    if (error.response?.status === 401) {
      $cookies.remove("token");

      store.dispatch("auth/update", { token: null });

      return redirect("/login");
    }

    store.dispatch("error/update", error.response?.data.errors[0]);
  });
};

export default axiosPlugin;
