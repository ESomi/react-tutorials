import socketIOClient from "socket.io-client";
const PORT = 9000;
const socket = socketIOClient(`http://172.30.1.44:${PORT}`);
export default socket;