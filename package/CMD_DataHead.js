const Properties = require("./CMD_properties");

module.exports = class CMD_DataHead {
  constructor() {
    this.header = undefined;
    this.length = undefined;
    this.checkCRC = undefined;
    this.sequenceId = undefined;
    this.properties = undefined;
  }

  getHeader() {
    return this.header;
  }

  setHeader(value) {
    this.header = value;
  }

  getCheckCRC() {
    return this.checkCRC;
  }

  setCheckCRC(value) {
    this.checkCRC = value;
  }

  getSequenceId() {
    return this.sequenceId;
  }

  setSequenceId(value) {
    this.sequenceId = value;
  }

  getLength() {
    return this.length;
  }

  setLength(value) {
    this.length = value;
  }

  getProperties() {
    return this.properties;
  }

  setProperties(value) {
    this.properties = new Properties(value);
  }
};
