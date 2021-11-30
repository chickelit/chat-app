import { Plugin } from "@nuxt/types";

const axiosPlugin: Plugin = ({ app }) => {
  app.$axios.onRequest((config) => {
    const token = app.$cookies.get("token");

    if (token) {
      config.headers.Authorization = `bearer ${token}`;
    }
  });
};

export default axiosPlugin;
