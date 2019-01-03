const fs = require("fs");
fs.readFile("./info.json", "utf8", function(err, data) {
  if (err) {
    return console.log(err);
  }
  const object = JSON.parse(data);
  console.log("\n");
  Object.keys(object).forEach(key => {
    key === "name" || key === "occupation" || key === "message"
      ? console.log("\x1b[34m\x1b[1m" + `${object[key]}` + "\x1b[0m")
      : console.log("\x1b[31m\x1b[1m" + `${key}: ${object[key]}` + "\x1b[0m");
  });
  console.log("\n");
});
