const express = require('express')
const app = express();
var PORT = 8080;
var path = require('path');

app.get('/', (req, res) => {

    res.send('Hello World!')
})


app.listen(PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`)
})