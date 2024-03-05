export class Whatsapp {
    constructor(main) {
      this.chat = main;
  
      this.events();
    }
  
    events() {
      this.chat.on("connection", (socket) => {
        const token = socket.handshake.auth.token;
        console.log("USUARIO NUEVO");
          console.log(token);
        /**
         * !Envio de mensages para transmitir a los demas usuarios
         */
        socket.on("message", (arg) => {
          console.log(arg);
          this.chat.emit("message", arg);
        });
  
        /**
         * !Desconexion usuario
         */
        socket.on("disconnect", () => {
          console.log("Cliente desconectado");
        });
      });
    }
  }
  