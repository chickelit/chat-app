import { io } from "socket.io-client";

const socket = io("http://192.168.0.103:3333");

export default socket;
