var fs = require("fs");
const util = require('util');

module.exports = {
  getStatus: async function () {
     return await readFile("./assets/data.json")
  },
  updateLocalDB: async function (newDb) {
    return await updateLocalDB("./assets/data.json", newDb)
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

async function updateLocalDB(path, newDb) {
  let dataToWrite = JSON.stringify(newDb);
  return new Promise((resolve, reject) => {
    fs.writeFile(path, dataToWrite, (err) => {
      if (err) throw err;
      console.log('Local data has been updated');
      return 
  });
  });
}

