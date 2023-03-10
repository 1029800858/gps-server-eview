const path = require("path");
const reverseAnalysis = require(path.join(
  process.cwd(),
  "/package/reverseAnalysis"
));

module.exports = function findMeDemo() {
  // let val = [
  //   {
  //     cmdHeadData: {
  //       flagACK: true,
  //       checkCRC: 52643,
  //       length: 3,
  //       sequenceId: 1,
  //       version: 0,
  //     },
  //     cmdBodyData: {
  //       cmdType: 4,
  //       systemData: {
  //         findMe: null,
  //       },
  //     },
  //   },
  // ];

  let val = [{
    cmdHeadData: {
      "flagACK": true,
      "checkCRC": 52643,
      "length": 3,
      "sequenceId": 1,
      "version": 0
    },
    cmdBodyData: {
      "cmdType": 4,
      "systemData": {
        "findMe": null
      }
    }
  }]
  return reverseAnalysis(val)
}
