var filemanagement = require('../../tools/fileManagement')

module.exports = async function (data, status) {
    let order = await sendPhysicalOrder(data, status)

    if (order.success === true) {
        await updateCloudDB()
        await filemanagement.updateLocalDB(order.data)
    } else {
        console.log("error")
    }
}

async function sendPhysicalOrder(data, status) {
    
    let productData = status[data.type][data.productUID]

    switch (productData.status) {
        case "ON":
                productData.status = "OFF"
            break;
        case "OFF":
                productData.status = "ON"
            break;
    }

    status[data.type][data.productUID] = productData

    let callback = {
        data: status,
        success: true
    }
    return callback
}

async function updateCloudDB() {
    return true
}

