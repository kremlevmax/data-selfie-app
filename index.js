const express = require('express');
const app = express();
const Datastore = require('nedb')

app.use(express.static('public'));
app.use(express.json());
app.listen(3000, () => {
    console.log("Server is up!");
});

const dataHolder = new Datastore('database.db')


app.post('/api', (req, res) => {
    const request = req.body

    const lat = request.lat
    const lon = request.lon
    const timestamp = Date.now()
    request.timestamp = timestamp


    dataHolder.insert(request)

    res.json({
        status: "success",
        latitude: lat,
        longitude: lon,
        timestamp: timestamp
    })
})

dataHolder.loadDatabase()