const express = require('express');
const app = express();
const Datastore = require('nedb')

app.use(express.static('public'));
app.use(express.json({
    limit: '2MB'
}));
app.listen(3000, () => {
    console.log("Server is up!");
});

const dataHolder = new Datastore('database.db')

app.get('/api', (req, res) => {

    dataHolder.find({}, (err, data) => {
        if (err) {
            responce.end();
            console.log('No connection to database');
            return;
        }
        res.json(data)
        console.log(data);
    })
})


app.post('/api', (req, res) => {
    const request = req.body

    const lat = request.lat
    const lon = request.lon
    const userName = request.userName
    const timestamp = Date.now()
    request.timestamp = timestamp


    dataHolder.insert(request)

    res.json({
        status: "success",
        userName: userName,
        latitude: lat,
        longitude: lon,
        timestamp: timestamp
    })
})

dataHolder.loadDatabase()