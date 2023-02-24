const net = require("net");
const port = 7070;
const host = "127.0.0.1";
const path = require("path");
const BytesHexStrUtil = require(path.join(process.cwd(), "/utils/bytesHexStr.js"));
const protocolAnalysis = require(path.join(process.cwd(), "/package/protocolAnalysis"));
const response = require(path.join(process.cwd(), "/package/response"));
const findMeDemo = require(path.join(process.cwd(), "/package/demo"));


module.exports = function createSocket() {
  const server = net.createServer((socket) => {
    server.maxConnections = 5000;
    server.getConnections((err, count) => {
      console.log("Current number of connected clients: " + count);
    });
    socket.on("data", (dt) => {

      //Send the findme command to all devices in two minutes
      setTimeout(() => {
        // socket.write('AB100300A3CD0000040113');
        console.log(findMeDemo());
        let buf = Buffer.from(findMeDemo() || [])
        socket.write(buf, 'binary', () => { });
        console.log("find me done");
      }, 1 * 60 * 1000)
    });
  });
  server.listen(port, host, () => {
    console.log("server is running...");
  });
  server.on("connection", () => {
    console.log("New connection");
  });
  server.on("close", () => {
    console.log("Server closed");
  });
  server.on("error", () => {
    console.log("Server error");
  });
};