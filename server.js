const express = require('express');
const app = express();

app.get('/', (req, resp) => {
    resp.send("Hello Rocketseat");
});

app.listen(3001);