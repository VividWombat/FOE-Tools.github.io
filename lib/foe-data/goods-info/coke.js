const moment = require("moment");
const age = require("../ages").IndustrialAge.key;

module.exports = {
  key: "coke",
  age: age,
  building: {
    resources: {
      coins: 45000,
      supplies: 102000
    },
    time: moment.duration({ hours: 14, minutes: 30 }),
    size: {
      length: 4,
      width: 5
    },
    population: 1020,
    connection: 1
  },
  unrefined: null
};
