const CMD_Data = require("./CMD_Data");

class CMD_DataBody {
  constructor() {
    this.cmdType = undefined;
    this.errorMsg = undefined;
    this.cmdData = [];
  }

  getCmdType() {
    return this.cmdType;
  }

  setCmdType(value) {
    this.cmdType = value;
  }

  getCmdData() {
    return this.cmdData;
  }

  setCmdData(cmdKey, cmdValue) {
    const cmdLength = cmdValue != null ? cmdValue.length + 1 : 1;
    this.cmdData.push({ cmdLength, cmdKey, cmdValue });
  }

  getErrorMsg() {
    return this.errorMsg;
  }

  setErrorMsg(value) {
    this.errorMsg = value;
  }
}

module.exports = CMD_DataBody;
