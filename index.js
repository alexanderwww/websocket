import { createServer } from "http";
import { Server } from "socket.io";
import { Whatsapp } from "./chat/whatsapp.js";

const httpServer = createServer();
const io = new Server(httpServer, {});

const CHAT_WHATSAPP = io.of("/chat/whatsapp");
const CLASS_CHAT_WHATSAPP = new Whatsapp(CHAT_WHATSAPP);


console.log("INIT SERVER");
httpServer.listen(9000);
