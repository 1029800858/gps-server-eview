const net = require("net");
const port = 7070;
const host = "0.0.0.0";
const path = require("path");
const BytesHexStrUtil = require(path.join(process.cwd(), "/utils/bytesHexStr.js"));
const protocolAnalysis = require(path.join(process.cwd(), "/package/protocolAnalysis"));
const response = require(path.join(process.cwd(), "/package/response"));

module.exports = function createSocket() {
  const server = net.createServer((socket) => {
    server.maxConnections = 5000;
    server.getConnections((err, count) => {

      console.log("Current number of connected clients: " + count);
      console.log(socket.remoteAddress, socket.remotePort);
    });
    socket.on("data", (dt) => {
      console.log('dt - ' + dt.toString());

      let str = dt.toString("hex").toUpperCase();
      if (dt.toString().startsWith("AB")) {
        console.log("yes started with AB");

        str = dt;
      }
      console.log('str - ' + str);
      let data = protocolAnalysis(str);
      console.log('data - ' + data);
      const responseVal = data.length && response(data[0].cmdHeadData, data[0].cmdBodyData);
      console.log("Response result:", BytesHexStrUtil.toHexString(responseVal));
      let buf = Buffer.from(responseVal || []);
      socket.write(buf, "binary", () => { });

    });
  });
  server.listen(port, host, () => {
    console.log("server is running...");
  });
  server.on("connection", (a) => {
    console.log("New connection " + a);
  });
  server.on("close", () => {
    console.log("Server closed");
  });
  server.on("error", () => {
    console.log("Server error");
  });
}