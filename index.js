const express = require('express')
const app = express()
const ACTIONS = require('./products/actions');
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

let status = {}

async function inithOS() {
    rawData = await ACTIONS.getStatus()
    status = JSON.parse(rawData)

    app.get('/all', function (req, res) {
        console.log(status)
        res.send("Status de l'installation!\n" + JSON.stringify(status))
    })

    app.get('/light', function (req, res) {
        res.send("Dimmer Status!\n" + JSON.stringify(status.Lights));
    });

    app.get('/light', function (req, res) {
        res.send("Dimmer Status!\n" + JSON.stringify(status.Lights));
    });

    app.get('/shutter', function (req, res) {
        res.send("Shutter Status!\n" + JSON.stringify(status.Shutters))
    });

    app.get('/relay', function (req, res) {
        res.send("Relays Status!\n" + JSON.stringify(status.Relays));
    });

    app.post('/order/', async function (req, res) {
        let message = await ACTIONS.handleOrder(req.body, status)
        console.log(message)
        res.send(message.body);
    });

    app.listen(3000, function () {
        console.log('hOS app listening on port 3000!')
    })

}

inithOS()