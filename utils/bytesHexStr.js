module.exports = class {
  // 将字节转换成字符串
  static bytesToHexString(byteArray, isOrder) {
    let str = "";
    if (byteArray == null || byteArray.length <= 0) {
      return "";
    }
    if (isOrder) {
      for (let i = 0; i < byteArray.length; i++) {
        str += byteArray[i].toString(16).toLocaleUpperCase() + " ";
      }
    } else {
      for (let i = byteArray.length - 1; i >= 0; i--) {
        // str = `%02X${byteArray[i]} `
        str += byteArray[i].toString(16).toLocaleUpperCase() + " ";
      }
    }
    return str.trim();
  }
  static toHexString(cmdData) {
    let str = "";
    if (!cmdData || cmdData.length <= 0) return str;
    cmdData.forEach((item) => {
      // @ts-ignore
      if (item === void 0 || item === null) return;
      str += ("0" + item.toString(16).toLocaleUpperCase()).slice(-2) + " ";
    });
    return str.trim();
  }
  //
  static bytes2StringByASCII(data) {
    let sbu = "";
    data.forEach((item) => {
      sbu += String.fromCharCode(item & 0xff);
    });
    return sbu;
  }

  static charToByte(str) {
    let result = "0123456789ABCDEF".indexOf(str);
    return result;
  }

  static string2BytesByUTF_8(data) {
    let encoder = new TextEncoder();
    let result = encoder.encode(data);
    return result;
  }
  static bytes2StringByUTF_8(data) {
    // return
  }

  // 将十六进制转换成单个字节数组
  static hexStringToBytes(hexString, isOrder) {
    if (!hexString) return;
    hexString = hexString.toString().replaceAll(" ", "");
    hexString = hexString.toString().toUpperCase();
    const length = hexString.length / 2;
    const hexChars = hexString.split("");
    const result = new Array(length);
    if (isOrder) {
      for (let i = 0; i < length; i++) {
        let pos = i * 2;
        result[i] =
          (this.charToByte(hexChars[pos]) << 4) |
          this.charToByte(hexChars[pos + 1]);
      }
    } else {
      for (let i = 0; i < length; i++) {
        let pos = (length - 1 - i) * 2;
        result[i] =
          (this.charToByte(hexChars[pos]) << 4) |
          this.charToByte(hexChars[pos + 1]);
      }
    }
    return result;
  }

  static string2BytesByASCII(data) {
    return data.split("").map((item) => {
      // @ts-ignore
      return item.charCodeAt();
    });
  }
};
