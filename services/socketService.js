const { Server } = require("socket.io");
let ioInstance = null;

function initSocket(server) {
  ioInstance = new Server(server, {
    cors: { origin: "*" },
  });

  ioInstance.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);
  });
}

function emitStatus(event, data) {
  if (ioInstance) {
    ioInstance.emit(event, data);
  }
}

module.exports = { initSocket, emitStatus };
