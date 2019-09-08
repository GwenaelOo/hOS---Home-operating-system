var command_toggle = require('./command_toggle')

module.exports = {
    command_toggle: async function (data, status) {
      return command_toggle(data, status)
    },
  };