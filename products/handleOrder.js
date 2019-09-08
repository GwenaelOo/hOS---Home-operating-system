var object = require('lodash/fp/object');
var errors = require('../tools/errorsManagement')
var commands = require('./Orders/commands')


module.exports = {
    handleOrder: async function (data, status) {
        let productData = await findProductData(data, status)

        // if (productData.type === "error") {
        //     return handleError("001")
        // }

        await startOrderFlow(data, status)

        return handleSuccess(productData)
    },
};


async function findProductData(data, status) {  
    let productData = null
    status[data.type][data.productUID] !== undefined ? productData = status[data.type][data.productUID] : null
    return productData
}

async function startOrderFlow(data, status) {
    let productData = null
    status[data.type][data.productUID] !== undefined ? productData = status[data.type][data.productUID] : null

    switch (data.action) {
        case "toggle":
            commands.command_toggle(data, status)
            break;

        default:
            break;
    }
    return productData
}

async function handleError(errorCode) {
    let errorMessage = {
        type: "error",
        body: await errors.getErrorMessageFromId(errorCode)
    }
    return errorMessage
}

async function handleSuccess(productData) {
    let message = {
        type: "success",
        body: await productData
    }
    return message
}