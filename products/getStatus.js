var fs = require("fs");
const util = require('util');

module.exports = {
  getStatus: async function () {
     return await readFile("./assets/data.json")
  },
};


async function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}
