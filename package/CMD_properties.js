module.exports = class CMD_Properties {
  version;
  flag_ACK;
  flag_ERR;
  encryption;
  constructor(data) {
    this.version = data?.version;
    this.flag_ACK = Boolean(data?.flag_ACK);
    this.flag_ERR = Boolean(data?.flag_ERR);
    this.encryption = data?.encryption;
  }
  getEncryption() {
    return this.encryption;
  }

  setEncryption(value) {
    this.encryption = value;
  }
  getFlag_ERR() {
    return Boolean(this.flag_ERR);
  }

  setFlag_ERR(value) {
    this.flag_ERR = value;
  }
  getFlag_ACK() {
    return Boolean(this.flag_ACK);
  }

  setFlag_ACK(value) {
    this.flag_ACK = value;
  }
  getVersion() {
    return this.version;
  }

  setVersion(value) {
    this.version = value;
  }
};
