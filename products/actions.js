var fs = require("fs");
const util = require('util');
var update = require('./updateStatus');
var status = require('../tools/fileManagement')
var order = require('./handleOrder')

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
  handleOrder: async function (req, status) {
    return await order.handleOrder(req, status)
  },

};





