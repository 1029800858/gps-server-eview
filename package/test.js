const path = require("path");
const { reverseAnalysis } = require(path.join(
  process.cwd(),
  "/package/reverseAnalysis"
));

function testReverseAnalysis() {
  let val = [
    {
      cmdHeadData: {
        sequenceId: 20,
        length: 51,
        checkCRC: 33515,
        version: 0,
        flagACK: true,
      },
      cmdBodyData: {
        cmdType: 3,
        servicesData: {
          addresses: {
            address: "Tool person",
            lng: 0.0,
            lat: 0.0,
          },
        },
      },
    },
  ];
  reverseAnalysis(val);
}

module.exports = { testReverseAnalysis };
