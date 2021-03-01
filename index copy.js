const express = require('express');
const app = express();

app.listen(3000, () => console.log("Server is started at port 3000"))
app.use(express.static('public'))
app.use(express.json())


app.post("/test", (req, res) => {
    const request = req.body
    res.json({
        status: "success",
        latitude: request.lat,
        longitude: request.lon
    })
})