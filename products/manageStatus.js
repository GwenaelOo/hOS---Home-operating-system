var fs = require("fs");
const util = require('util');
var update = require('./updateStatus');
var status = require('./getStatus')

module.exports = {
  getStatus: async function () {
    return await status.getStatus()
  },
  getStatusById: async function () {
    //return await readFile("./assets/data.json")
  },
  updateStatusById: async function () {
    //return await readFile("./assets/data.json")
  },

};





