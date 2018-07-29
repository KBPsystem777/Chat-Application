const express = require('express')
const app = express();
const http = require('http').Server(app);

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
    console.log(`Listening to port: http://localhost:3000`);
});

