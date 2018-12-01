const csv = require("csv-parser");
const download = require("download");
const fs = require("fs");
const path = require("path");
let config = require("./config.json");
const urlConfig = require("./url.json");
const locale = require("../locales/en");

const ages = [
  "BronzeAge",
  "IronAge",
  "EarlyMiddleAges",
  "HighMiddleAges",
  "LateMiddleAges",
  "ColonialAge",
  "IndustrialAge",
  "ProgressiveEra",
  "ModernEra",
  "PostmodernEra",
  "ContemporaryEra",
  "Tomorrow",
  "TheFuture",
  "ArcticFuture",
  "OceanicFuture",
  "VirtualFuture"
];

let diff = {};

function updateAge(index, resolve) {
  const age = ages[index];

  let results = [];
  let result = `const { generateReward } = require("../utils");

module.exports = [
`;
  return download(urlConfig.url + urlConfig[age])
    .pipe(csv(["level", null, "cost", "reward"]))
    .on('data', (value) => results.push(value))
    .on('end', () => {
      let counter = 0;

      for (var i =  age !== "HighMiddleAges" ? 1 : 10; i < results.length; i++) {
        if (!results[i].reward) {
          break;
        }
        result += `  { cost: ${results[i].cost}, reward: generateReward(${results[i].reward}) },\n`;
        counter++;
      }

      result += `];\n`;

      if (counter > config[age]) {
        fs.writeFileSync(path.join(__dirname, `../lib/foe-data/ages-cost/${age !== "HighMiddleAges" ? age : 'defaultCost'}.js`), result);

        diff[age] = {
          age,
          from: config[age] + 1
        };
        if ((counter - config[age]) > 1) {
          diff[age].to = counter;
        }
        return resolve(main(index + 1));
      }
    });
}

function main(index) {
  if (index >= ages.length) {
    return diff;
  }
  return new Promise((resolve) => updateAge(index, resolve));
}

main(0).then((value) => {
  if (Object.keys(value).length === 0) {
    console.log("Nothing to do.");
    return;
  }
  let commitMessage = `feat(foe-data): :package: Add levels of several ages

Add GB levels (cost and reward) of:\n`;

  for (let age in value) {
    config[age] = value[age].to ? value[age].to : value[age].from;
    if (age === "HighMiddleAges") {
      commitMessage += `- ${locale.translation.foe_data.age.HighMiddleAges} / ${locale.translation.foe_data.age.NoAge}: ${value.HighMiddleAges.to ?
        value.HighMiddleAges.from + ' to ' + value.HighMiddleAges.to : value.HighMiddleAges.from}\n`;
    } else {
      commitMessage += `- ${locale.translation.foe_data.age[age]}: ${value[age].to ?
        value[age].from + ' to ' + value[age].to : value[age].from}\n`;
    }
  }

  fs.writeFileSync(path.join(__dirname, "./config.json"), JSON.stringify(config, null, 2));
  console.log("commitMessage:\n", commitMessage);
}).catch((reason) => {
  console.error("reason: ", reason);
});