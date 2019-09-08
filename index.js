const express = require('express')
const app = express()
var tools = require('./products/manageStatus');

let status = {}

async function inithOS() {
    rawData = await tools.getStatus()
    status = JSON.parse(rawData)

    app.get('/all', function (req, res) {
        console.log(status)
        res.send("Status de l'installation!\n" + JSON.stringify(status))
    })

    app.get('/light', function (req, res) {
        res.send("Status de lumières!\n" + JSON.stringify(status.Lights));
    });

    app.get('/shutter', function (req, res) {
        res.send("Status de volets!\n" + JSON.stringify(status.Shutters))
    });

    app.get('/relay', function (req, res) {
        res.send("Status de relays!\n" + JSON.stringify(status.Relays));
    });

    app.listen(3000, function () {
        console.log('Example app listening on port 3000!')
    })

}

inithOS()