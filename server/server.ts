import * as socketio from "socket.io";

let io = socketio(7000);

io.on("connection", function(socket: any) {
  socket.on('hello', () => {
    console.log('hello come')
    socket.emit('connect');
  })

  console.log("a user connected");
});
