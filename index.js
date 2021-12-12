let express = require("express");
let socket = require("socket.io");

/**app setup */
let app = express();

/**server setup */
let server = app.listen(3000, () => {
  console.log("project is running on localhost 3000");
});
/**route setup */
app.get("/", (res, req) => {
  req.sendFile(__dirname + "/public/index.html");
});
/**socket setup */
let io = socket(server);
io.on("connection", (socket) => {
  console.log("Socket connection connected" + socket.id);
}); /*Client to get browser connection */
