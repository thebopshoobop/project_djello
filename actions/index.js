const authenticate = require("./auth");

const actions = io => {
  require("socketio-auth")(io, { authenticate, timeout: "none" });
  io.on("connection", client => {
    console.log("New connection!");
    client.on("disconnect", () => console.log("Disconnected!"));
  });
};

module.exports = actions;