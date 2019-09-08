const errorsBook = require('../assets/errors')

module.exports = {
    getErrorMessageFromId: async function (id) {
      return await getErrorFromId(id)
    },
  };

  async function getErrorFromId (id) {
   return errorsBook.errors[id]
  }