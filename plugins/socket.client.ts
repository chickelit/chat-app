import { Plugin } from "@nuxt/types";
import { io } from "socket.io-client";

const socket = io("http://192.168.0.103:3333");

const socketPlugin: Plugin = ({ store }) => {
  if (store.state.users.profile.user) {
    socket.emit("create", `user-${store.state.users.profile.user.id}`);
  }
};

export { socket };
export default socketPlugin;
