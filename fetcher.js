const request = require('request');
const input = process.argv[2].toString();
const fileDestination = process.argv[3].toString();
const fs = require("fs");

request(input, function (error, response, body) {
  fs.writeFile(fileDestination, body, (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log(`Saved ${body.length} bytes to ${fileDestination}. Have a great day!`)
});
