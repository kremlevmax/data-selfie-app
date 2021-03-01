const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.listen(3000, () => {
    console.log("Server is up!");
});

const dataHolder = []

app.post('/api', (req, res) => {
    const request = req.body

    const lat = request.lat
    const lon = request.lon
    const datestamp = Date.now()

    dataHolder.push({lat, lon, datestamp})
    console.log(dataHolder);

    res.json({
        status: "success",
        latitude: lat,
        longitude: lon
    })
})